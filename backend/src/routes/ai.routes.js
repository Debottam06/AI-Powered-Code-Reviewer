const express = require('express');
const router = express.Router();

const { getResponse, getReview } = require('../controller/ai.controller');
router.get('/get-response',getResponse);
router.post('/get-review',getReview);
module.exports = router;