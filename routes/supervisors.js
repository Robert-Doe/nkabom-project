// Import the required libraries
const express = require('express');
const router = express.Router();
var crypto = require('crypto');
// Import the Supervisor model
const Supervisor = require('../models/supervisor');
const SupervisorAuth = require('../models/SupervisorAuth')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const {verifyPasswordArgon, hashPasswordArgon} = require("../library/hashing");
const secretKey = process.env.SUPERVISOR_ACCESS_TOKEN_SECRET;

/*

async function hashPassword(password) {
    const saltRounds = 10;

    try {
        const hash = (await bcrypt.hash(password, saltRounds)).toString();
        console.log(hash)
        return hash;
    } catch (error) {
        console.error(error);
        return null;
    }
}
*/

// Generate a JWT token for a given user
function generateToken(staff) {
    const payload = { id: staff.staffId, email: staff.email, role:'supervisor' };
    const options = { expiresIn: '300d' };
    return jwt.sign(payload, secretKey, options);
}

async function authenticateSupervisor(staffId, password) {
    const supervisorAuth = await SupervisorAuth.findByPk(staffId);

    console.log(supervisorAuth)

    if (!supervisorAuth) {
        // The user doesn't exist in the database
        return null;
    }

    const isPasswordValid = await verifyPasswordArgon(supervisorAuth.keyHash,password);

    if (!isPasswordValid) {
        // The password is incorrect
        return null;
    }

    console.log("Is Password Valid : "+ isPasswordValid )

    // The user exists and the password is correct, so we can return the user object
    const supervisor = await Supervisor.findByPk(staffId);
    console.log(supervisor)
    return supervisor
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
        const supervisor = Supervisor.findByPk(decoded.studentId)

        if (!supervisor) {
            // The user associated with the token doesn't exist in the database
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        req.supervisor = supervisor;
        next();
    });
}

router.post('/email',(req,res)=>{

    const nodemailer = require('nodemailer');

// Create a transporter object
    const transporter = nodemailer.createTransport({
        host: 'smtp.titan.email',
        port: 587, // Hostinger SMTP port
        secure: false, // Set to true if using a secure connection (e.g., port 465)
        auth: {
            user: 'info@codeden.org', // Your Hostinger email address
            pass: 'bob@Cumulus#4717' // Your Hostinger email password
        }
    });

// Define the email options
    const mailOptions = {
        from: 'info@codeden.org',
        to: 'gracealiko08@gmail.com',
        subject: 'Mailer Alert',
        text: "Dear grace, the mailing portion of the API is working. Start your UI, we're halfway through. It's left with the payment API"
    };

// Send the email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error occurred:', error.message);
            res.json({ msg: 'Error sending email' });
        } else {
            console.log('Email sent successfully!');
            console.log('Message ID:', info.messageId);
            res.json({ msg: 'Email sent successfully' });
        }
    });


    /*// Create a transporter object
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'robertdoe60@gmail.com',
                pass: 'jmkdatnisxhxktpx'
            }
        });

    // Define the email options
        const mailOptions = {
            from: 'robertdoe60@gmail.com',
            to: 'robertdoe60@gmail.com',
            subject: 'Hello from Nodemailer',
            text: 'This is a test email sent using Nodemailer.'
        };

    // Send the email
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('Error occurred:', error.message);
                res.json({msg: "Error sending email"})
            } else {
                console.log('Email sent successfully!');
                console.log('Message ID:', info.messageId);
                res.json({msg: "Email sent successfully"})
            }
        });*/
})


router.post('/verify-activation',async (req, res) => {
    const {staffId} = req.body
    const supervisorAuth = await SupervisorAuth.findByPk(staffId)

    console.log("Verifying Supervisor Activation")

    if (supervisorAuth) {
        res.json({isActivated: true})
    } else {
        res.json({isActivated: false})
    }
})


// Get all supervisors
router.get('/', async (req, res) => {
    try {
        // Retrieve all supervisors from the database
        const supervisors = await Supervisor.findAll();

        // Return the supervisors data as JSON
        res.json(supervisors);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Get a single supervisor by ID
router.get('/:id', async (req, res) => {
    try {
        // Retrieve the supervisor with the specified id from the database
        const supervisor = await Supervisor.findByPk(req.params.id);

        // Return the supervisor data as JSON
        res.json(supervisor);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }


});

// Create a new supervisor
router.post('/', async (req, res) => {
    try {
        // Create a new supervisor using the request body data
        const supervisor = await Supervisor.create(req.body);

        // Return the new supervisor data as JSON
        res.status(201).json(supervisor);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Update an existing supervisor by ID
router.put('/:id', async (req, res) => {
    try {
        // Retrieve the supervisor with the specified id from the database
        const supervisor = await Supervisor.findByPk(req.params.id);

        // Update the supervisor record with the request body data
        await supervisor.update(req.body);

        // Return the updated supervisor data as JSON
        res.json(supervisor);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Delete an existing supervisor by ID
router.delete('/:id', async (req, res) => {
    try {
        // Retrieve the supervisor with the specified id from the database
        const supervisor = await Supervisor.findByPk(req.params.id);

        // Delete the supervisor record
        await supervisor.destroy();

        // Return a success message as JSON
        res.json({ message: 'Supervisor record deleted successfully.' });
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});




router.post('/login', async (req, res) => {
    const {staffId, passKey} = req.body;

    const supervisor = await authenticateSupervisor(staffId, passKey);

    if (!supervisor) {
        return res.status(401).json({message: 'Invalid email or password'});
    }
    const token = generateToken(supervisor);
    res.json({token, supervisor});
});

//Validating Activation

router.post('/account-activation', async (req, res) => {
    try {
        /* console.log(req)*/
        let {staffId,dob}=req.body;
        // Retrieve the Supervisor with the specified id from the database
        const supervisor = await Supervisor.findByPk(staffId);
        console.log(supervisor.dob)
        console.log(dob)
        if(dob===supervisor.dob){
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

//Supervisor Auth SignUp

router.post('/auth/signup', async (req, res ) => {
    try {

        const {staffId,email,passKey}=req.body

        const keyHash=await hashPasswordArgon(passKey)
        // Create a new Supervisor using the request body data
        const supervisorAuth = await SupervisorAuth.create({keyHash,email,staffId});

        const supervisor =await authenticateSupervisor(staffId,passKey)
        const token = generateToken({staffId,email});

        res.status(201).json({msg:"Account Created Successfully", token, supervisor });

    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});


// Export the router for use in other modules
module.exports = router;
