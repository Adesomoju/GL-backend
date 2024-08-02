const express = require('express');
const mongoose = require('mongoose');
const app = express()
const companyRoutes = require('./routes/company.route.js');

// middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


//routes
app.use('/api/companies', companyRoutes)


//connect to db
mongoose.connect('mongodb+srv://adesomojufisayo:8zBtbAjOM3LrMinn@gl-backenddb.9svnsg2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=GL-backendDB')
    .then(() =>
        console.log('Connected!'),
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    )
    .catch(err => console.log(err));