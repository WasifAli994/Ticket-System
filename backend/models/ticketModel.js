const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        require: [true, 'PLease add a text value!']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema)