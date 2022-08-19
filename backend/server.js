const express = require('express');
const colors = require('colors');
require('dotenv').config();
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware');

const port = process.env.PORT || 8000;
connectDB();

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// => /tickets and users route has been specified in the middleware so the '/' can be used in all of the http request methods in routes. 
app.use('/tickets', require('./routes/ticketRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port,() => {
    console.log(`Server is listening on port: ${port}`);
})