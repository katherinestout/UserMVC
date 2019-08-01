const express = require('express');
const router = express.Router();

const User = require('../../model/UserModel');

router.get('/', (req, res) => {
    res.send("hello test route")
});

module.exports = router;