const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware');
const { saveContactDetails } = require('../controllers/userDetails.controller');

// Route: POST /api/contact-details
router.post('/', verifyToken, saveContactDetails);

module.exports = router;
