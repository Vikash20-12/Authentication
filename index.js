const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },()=> {
    console.log('connected to db!')
});

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});

