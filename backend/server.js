const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// => /tickets route has been specified in the middleware so the '/' ca be used in all of the http request methods in routes. 
app.use('/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

app.listen(port,() => {
    console.log(`Server is listening on port: ${port}`);
})