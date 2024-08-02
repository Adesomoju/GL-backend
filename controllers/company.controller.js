const Company = require('../models/company.model.js');

// Create and Save a new Company
const createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Retrieve all Companies from the database.
const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find({});
        res.status(200).json(companies);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Find a single Company with an id
const getCompany = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const company = await Company.findById(id);
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Find a single company with  ISIN
const getCompanyByISIN = async (req, res) => {
    try {
        const {
            isin
        } = req.params;
        const company = await Company.findOne({
            isin: isin
        });
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}


// Update a Company by the id in the request    
const updateCompany = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const company = await Company.findByIdAndUpdate(id, req.body);
        if (!company) {
            return res.status(404).json({
                message: 'Company not found'
            });
        }
        const updateCompany = await Company.findById(id);
        res.status(200).json(updateCompany);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};



module.exports = {
    createCompany,
    getCompanies,
    getCompany,
    getCompanyByISIN,
    updateCompany
};