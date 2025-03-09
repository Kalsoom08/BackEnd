const express = require('express');
const { User } = require('../Models/User.js');
const bcrypt = require('bcryptjs');

const router = express.Router();
router.use(express.json());

router.post('/registerUser', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        const createUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json(createUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
