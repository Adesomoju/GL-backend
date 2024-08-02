const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Company name is required']
    },
    ticker: {
        type: String,
        required: true
    },
    exchange: {
        type: String,
        required: true
    },
    isin: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validateISIN,
            message: props => `${props.value} is not a valid ISIN!`
        },
    },
    website: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});


function validateISIN(res) {
    return /^[A-Z]{2}[A-Za-z0-9]{10}$/.test(res);
};

const Company = mongoose.model('Company', companySchema);

module.exports = Company;