const express = require('express');
const router = express.Router();

router.get('/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({ ip: ip });
    });

    module.exports = router;
    