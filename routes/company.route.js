const express = require('express');
const router = express.Router();

const {
    getCompany,
    getCompanies,
    createCompany,
    updateCompany,
    getCompanyByISIN
} = require('../controllers/company.controller.js');

router.get('/', getCompanies);
router.get('/:id', getCompany);
router.get('/isin/:isin', getCompanyByISIN);
router.post('/', createCompany);
router.put('/:id', updateCompany);

module.exports = router;