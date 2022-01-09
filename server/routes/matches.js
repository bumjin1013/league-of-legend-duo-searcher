const express = require('express');
const router = express.Router();
const { Match } = require("../models/Match");

const { auth } = require("../middleware/auth");

router.get('/match', (req, res) => {
    Match.find((err, doc) => {
        if(err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true, doc
        })
    })
})


router.post('/match', (req, res) => {

    const match = new Match(req.body);
    
    match.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true, doc
        })
    })
})


module.exports = router;
