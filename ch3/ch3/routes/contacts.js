// GET /contacts
// GET /conteacts/list

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('contacts 이후 url');
});

router.get('/list', (req, res) => {
    res.send('contacts 이후 list');
});

module.exports = router;