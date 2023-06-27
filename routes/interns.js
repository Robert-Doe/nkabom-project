/*
// Import the required libraries
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

// Import the Intern model
const Intern = require('../models/Intern');
const InternAuth = require('../models/InternAuth');

var crypto = require('crypto');
const {verifyPasswordArgon, hashPasswordArgon} = require("../library/hashing");

const secretKey = process.env.INTERN_ACCESS_TOKEN_SECRET;


const md5=(dataValue)=>{
    let hash = crypto.createHash('md5');
    let data = hash.update(dataValue, 'utf-8');
    let gen_hash= data.digest('hex');
    return gen_hash
}

/!*async function hashPassword(password) {
    const saltRounds = 10;

    try {
        const hash = (await bcrypt.hash(password, saltRounds)).toString();
        console.log(hash)
        return hash;
    } catch (error) {
        console.error(error);
        return null;
    }
}*!/


// Generate a JWT token for a given user
function generateToken(intern) {
    const payload = { id: intern.studentId, email: intern.email,role:'intern' };
    const options = { expiresIn: '300d' };
    return jwt.sign(payload, secretKey, options);
}

async function authenticateIntern(studentId, password) {
    const internAuth = await InternAuth.findByPk(studentId);

    console.log(internAuth)

    if (!internAuth) {
        // The user doesn't exist in the database
        return null;
    }

    const isPasswordValid = await verifyPasswordArgon(internAuth.keyHash,password);

    if (!isPasswordValid) {
        // The password is incorrect
        return null;
    }

    console.log("Is Password Valid : "+ isPasswordValid )

    // The user exists and the password is correct, so we can return the user object
    const intern =await Intern.findByPk(studentId);
    console.log(intern)
    return intern
}


// Middleware function for authenticating requests based on a bearer token
function authenticateRequest(req, res, next) {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        // The request doesn't have a valid Authorization header
        return res.status(401).json({ message: 'Invalid or missing Authorization header' });
    }

    const token = authorizationHeader.substring('Bearer '.length);

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            // The token is invalid or has expired
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        // The token is valid, so we can attach the user object to the request object
        const intern = Intern.findByPk(decoded.id)

        if (!intern) {
            // The user associated with the token doesn't exist in the database
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        req.intern = intern;
        next();
    });
}


router.post('/verify-activation',(req,res)=>{
    const {studentId} = req.body
    const internAuth= InternAuth.findByPk(studentId)
    if(internAuth){
        res.json({isActivated:true})
    }else{
        res.json({isActivated:false})
    }
})

router.post('/login', async (req, res) => {
    const {studentId, passKey} = req.body;

    const intern = await authenticateIntern(studentId, passKey);

    if (!intern) {
        return res.status(401).json({message: 'Invalid email or password'});
    }
    const token = generateToken(intern);
    res.json({token, intern});
});




// Get all interns
router.get('/', async (req, res) => {
    try {
        // Retrieve all interns from the database
        const interns = await Intern.findAll();
        // Return the interns data as JSON
        res.json(interns);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});




// Get a single intern by ID
router.get('/:id', async (req, res) => {
    try {
        // Retrieve the intern with the specified id from the database
        const intern = await Intern.findByPk(req.params.id);

        // Return the intern data as JSON
        res.json(intern);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

//Validating Activation

router.post('/account-activation', async (req, res) => {
    try {
       /!* console.log(req)*!/
        let {studentId,dob}=req.body;
        // Retrieve the intern with the specified id from the database
        const intern = await Intern.findByPk(studentId);
        console.log(intern.dob)
        console.log(dob)
        if(dob===intern.dob){
           res.status(200).json({"msg":"Activated Successfully"})
        }else{
            res.status(404).json({"msg":"Activation Unsuccessful"});
        }

    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});


router.post('/token-verification',(req,res)=> {

    const {token} = req.body;

// Verify the JWT token signature
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.error('Invalid token:', err);
           return res.status(404).json({msg: "Verification Failed"})
            // Handle error
        } else {
            // Token is valid
            console.log('Token is valid:', decoded);
          return  res.status(200).json({msg: "Verification Successful"})
            // Handle success
        }

    })

})

//Intern Auth SignUp

router.post('/auth/signup', async (req, res ) => {
    try {

        const {studentId,email,passKey}=req.body

        const keyHash=await hashPasswordArgon(passKey)
        // Create a new intern using the request body data
        const internAuth = await InternAuth.create({keyHash,email,studentId});

        const intern =await authenticateIntern(studentId,passKey)
        const token = generateToken({studentId,email});

        res.status(201).json({msg:"Account Created Successfully", token, intern });


    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Create a new intern
router.post('/', async (req, res ) => {
    try {

        // Create a new intern using the request body data
        const intern = await Intern.create(req.body);

        // Return the new intern data as JSON
        res.status(201).json(intern);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Update an existing intern by ID
router.put('/:id', async (req, res) => {
    try {
        // Retrieve the intern with the specified id from the database
        const intern = await Intern.findByPk(req.params.id);

        // Update the intern record with the request body data
        await intern.update(req.body);

        // Return the updated intern data as JSON
        res.json(intern);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Delete an existing intern by ID
router.delete('/:id', async (req, res) => {
    try {
        // Retrieve the intern with the specified id from the database
        const intern = await Intern.findByPk(req.params.id);

        // Delete the intern record
        await intern.destroy();

        // Return a success message as JSON
        res.json({ message: 'Intern record deleted successfully.' });
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Export the router for use in other modules
module.exports = router;
*/

// Import the required libraries
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
// Import the Intern model
const Intern = require('../models/intern');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const InternAuth = require("../models/InternAuth");
const {hashPasswordArgon, verifyPasswordArgon} = require("../library/hashing");
const dotenv = require("dotenv");
/*const Supervisor = require("../models/Supervisor");*/
dotenv.config()

const secretKey = process.env.INTERN_ACCESS_TOKEN_SECRET;

// Get all interns
router.get('/', async (req, res) => {
    try {
        const interns = await Intern.findAll();
        res.json(interns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single intern by ID
router.get('/:id', async (req, res) => {
    try {
        const intern = await Intern.findByPk(req.params.id);
        res.json(intern);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new intern
router.post('/', async (req, res) => {
    try {
        const intern = await Intern.create(req.body);
        res.status(201).json(intern);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing intern by ID
router.put('/:id', async (req, res) => {
    try {
        const intern = await Intern.findByPk(req.params.id);
        await intern.update(req.body);
        res.json(intern);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an existing intern by ID
router.delete('/:id', async (req, res) => {
    try {
        const intern = await Intern.findByPk(req.params.id);
        await intern.destroy();
        res.json({ message: 'Intern record deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Authentication and Authorization
router.post('/login', async (req, res) => {
    const { studentId, passKey } = req.body;

    try {
        const intern = await authenticateIntern(studentId, passKey);

        if (!intern) {
            return res.status(401).json({ message: 'Invalid intern ID or password' });
        }

        const token = generateToken(intern);
        res.json({ token, intern });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/auth/signup', async (req, res ) => {
    try {

        console.log(`JWT Token: ${secretKey}`)

        const {studentId,email,passKey}=req.body
        console.log(req.body)
        const keyHash=await hashPasswordArgon(passKey)
        // Create a new Supervisor using the request body data
        const internAuth = await InternAuth.create({keyHash,email,studentId});

        const intern =await Intern.findByPk(studentId)
        const token = generateToken({studentId,email});

        res.status(201).json({msg:"Account Created Successfully", token, intern });

    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});


router.post('/account-activation', async (req, res) => {
    try {
        /* console.log(req)*/
        let {studentId,dob}=req.body;
        // Retrieve the intern with the specified id from the database
        const intern = await Intern.findByPk(studentId);
        console.log(intern.dob)
        console.log(dob)
        if(dob===intern.dob){
            res.status(200).json({"msg":"Activated Successfully"})
        }else{
            res.status(404).json({"msg":"Activation Unsuccessful"});
        }

    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

router.post('/token-verification',(req,res)=> {

    const {token} = req.body;

// Verify the JWT token signature
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.error('Invalid token:', err);
            return res.status(404).json({msg: "Verification Failed"})
            // Handle error
        } else {
            // Token is valid
            console.log('Token is valid:', decoded);
            return  res.status(200).json({msg: "Verification Successful"})
            // Handle success
        }

    })

})


/*
async function authenticateIntern(internId, password) {
    try {
        // Retrieve the intern with the specified internId from the database
        const intern = await Intern.findByPk(internId);

        if (!intern) {
            // The intern doesn't exist in the database
            return null;
        }

        const isPasswordValid = bcrypt.compareSync(password, intern.password);

        if (!isPasswordValid) {
            // The password is incorrect
            return null;
        }

        // The intern exists and the password is correct, so we can return the intern object
        return intern;
    } catch (error) {
        console.error(error);
        return null;
    }
}*/

/*async function hashPassword(password) {
    const saltRounds = 10;

    try {
        const hash = (await bcrypt.hash(password, saltRounds)).toString();
        console.log(hash);
        return hash;
    } catch (error) {
        console.error(error);
        return null;
    }
}*/






function generateToken(intern) {
    const payload = { id: intern.studentId, email: intern.email, role:'intern' };
    const options = { expiresIn: '300d' };
    return jwt.sign(payload, secretKey, options);
}

async function authenticateIntern(studentId, password) {
    const internAuth = await InternAuth.findByPk(studentId);

    if (!internAuth) {
        // The intern doesn't exist in the database
        return null;
    }

    const isPasswordValid = await verifyPasswordArgon(internAuth.keyHash,password);

    if (!isPasswordValid) {
        // The password is incorrect
        return null;
    }

    console.log("Is Password Valid : "+ isPasswordValid )

    // The user exists and the password is correct, so we can return the user object
    const intern = await Intern.findByPk(studentId);
    console.log(intern)
    return intern
}

function authenticateRequest(req, res, next) {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        // The request doesn't have a valid Authorization header
        return res.status(401).json({ message: 'Invalid or missing Authorization header' });
    }

    const token = authorizationHeader.substring('Bearer '.length);

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            // The token is invalid or has expired
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        // The token is valid, so we can attach the user object to the request object
        const intern = Intern.findByPk(decoded.id);

        if (!intern) {
            // The user associated with the token doesn't exist in the database
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        req.intern = intern;
        next();
    });
}



// Export the router for use in other modules
module.exports = router;

