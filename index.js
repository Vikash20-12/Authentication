const express = require('express');
const app = express();
const dotenv = require('dotenv/config');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//connect to db
mongoose.connect(process.env.DB_CONNECT,{ 
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,   
    useFindAndModify : true 
  });
  var conn = mongoose.connection;
  conn.on('connected', function() {
      console.log('database is connected successfully');
  });
  conn.on('error', console.error.bind(console, 'connection error:'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts',postRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});

