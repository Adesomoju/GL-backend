const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
    getCompany,
    getCompanies,
    createCompany,
    updateCompany,
    getCompanyByISIN,
    getCompanyByISINorID
} = require('../controllers/company.controller.js');

router.get('/', auth, getCompanies);
router.get('/:id', auth, getCompany);
router.get('/isin/:isin', auth, getCompanyByISIN);
router.post('/', auth, createCompany);
router.put('/:id', auth, updateCompany);
router.get('/isin/id/:id', auth, getCompanyByISINorID);

module.exports = router;