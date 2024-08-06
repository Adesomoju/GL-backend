const express = require('express');
const mongoose = require('mongoose');
const app = express()
const companyRoutes = require('./routes/company.route.js');
const authRoutes = require('./routes/auth.route.js');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Handle preflight requests
app.options('*', cors(corsOptions));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



//routes
app.use('/api/companies', companyRoutes)
app.use('/api/auth', authRoutes);


//connect to db
mongoose.connect('mongodb+srv://adesomojufisayo:8zBtbAjOM3LrMinn@gl-backenddb.9svnsg2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=GL-backendDB')
    .then(() =>
        console.log('Connected!'),
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    )
    .catch(err => console.log(err));