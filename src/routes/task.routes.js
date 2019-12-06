const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world');
});
router.get('/json', (req, res) => {
    res.json({
        "status": "quo",
        "music": true
    });
});

module.exports = router;