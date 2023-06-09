// Import the required libraries
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
// Import the Coordinator model
const Coordinator = require('../models/coordinator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CoordinatorAuth = require("../models/CoordinatorAuth");
const {hashPasswordArgon, verifyPasswordArgon} = require("../library/hashing");
const Supervisor = require("../models/Supervisor");

const secretKey = process.env.COORDINATOR_ACCESS_TOKEN_SECRET;

// Get all coordinators
router.get('/', async (req, res) => {
    try {
        const coordinators = await Coordinator.findAll();
        res.json(coordinators);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single coordinator by ID
router.get('/:id', async (req, res) => {
    try {
        const coordinator = await Coordinator.findByPk(req.params.id);
        res.json(coordinator);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new coordinator
router.post('/', async (req, res) => {
    try {
        const coordinator = await Coordinator.create(req.body);
        res.status(201).json(coordinator);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing coordinator by ID
router.put('/:id', async (req, res) => {
    try {
        const coordinator = await Coordinator.findByPk(req.params.id);
        await coordinator.update(req.body);
        res.json(coordinator);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an existing coordinator by ID
router.delete('/:id', async (req, res) => {
    try {
        const coordinator = await Coordinator.findByPk(req.params.id);
        await coordinator.destroy();
        res.json({ message: 'Coordinator record deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Authentication and Authorization
router.post('/login', async (req, res) => {
    const { staffId, passKey } = req.body;

    try {
        const coordinator = await authenticateCoordinator(staffId, passKey);

        if (!coordinator) {
            return res.status(401).json({ message: 'Invalid coordinator ID or password' });
        }

        const token = generateToken(coordinator);
        res.json({ token, coordinator });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/auth/signup', async (req, res ) => {
    try {

        const {staffId,email,passKey}=req.body
        console.log(req.body)
        const keyHash=await hashPasswordArgon(passKey)
        // Create a new Supervisor using the request body data
        const coordinatorAuth = await CoordinatorAuth.create({keyHash,email,staffId});

        const coordinator =await Coordinator.findByPk(staffId)
        const token = generateToken({staffId,email});

        res.status(201).json({msg:"Account Created Successfully", token, coordinator });

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
async function authenticateCoordinator(coordinatorId, password) {
    try {
        // Retrieve the coordinator with the specified coordinatorId from the database
        const coordinator = await Coordinator.findByPk(coordinatorId);

        if (!coordinator) {
            // The coordinator doesn't exist in the database
            return null;
        }

        const isPasswordValid = bcrypt.compareSync(password, coordinator.password);

        if (!isPasswordValid) {
            // The password is incorrect
            return null;
        }

        // The coordinator exists and the password is correct, so we can return the coordinator object
        return coordinator;
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






function generateToken(coordinator) {
    const payload = { id: coordinator.staffId, email: coordinator.email, role:'coordinator' };
    const options = { expiresIn: '300d' };
    return jwt.sign(payload, secretKey, options);
}

async function authenticateCoordinator(staffId, password) {
    const coordinatorAuth = await CoordinatorAuth.findByPk(staffId);

    if (!coordinatorAuth) {
        // The coordinator doesn't exist in the database
        return null;
    }

    const isPasswordValid = await verifyPasswordArgon(coordinatorAuth.keyHash,password);

    if (!isPasswordValid) {
        // The password is incorrect
        return null;
    }

    console.log("Is Password Valid : "+ isPasswordValid )

    // The user exists and the password is correct, so we can return the user object
    const coordinator = await Coordinator.findByPk(staffId);
    console.log(coordinator)
    return coordinator
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
        const coordinator = Coordinator.findByPk(decoded.id);

        if (!coordinator) {
            // The user associated with the token doesn't exist in the database
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        req.coordinator = coordinator;
        next();
    });
}



// Export the router for use in other modules
module.exports = router;

