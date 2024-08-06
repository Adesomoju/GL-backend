const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');
const router = express.Router();

const {
    register,
    login
} = require('../controllers/auth.controller.js');

router.post('/register', register);
router.post('/login', login);

module.exports = router;


// const router = express.Router();

// User Registration
// router.post('/register', async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.status(201).send({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });



// // User Login
// router.post('/login', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });

//         if (!user || !(await user.comparePassword(password))) {
//             return res.status(401).send({ error: 'Invalid login credentials' });
//         }

//         const token = jwt.sign({ _id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
//         res.send({ token });
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// module.exports = router;