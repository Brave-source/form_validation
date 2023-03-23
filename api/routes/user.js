const express = require("express");
const User = require("../model/User");
const router = express.Router();

router.post("/", async(req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(200).json(savedUser);
    }catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;