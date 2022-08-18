const mongoose = require('mongoose');

const connectDB = async () => {
    try{

        //const con = await mongoose.connect(process.env.MONGO_URI);
        const con = await mongoose.connect('mongodb+srv://wasif123:wasif123@ticketscluster.1j3jzwh.mongodb.net/?retryWrites=true&w=majority');
        console.log(`MongoDB connected: ${con.connection.host}`.cyan.underline);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB