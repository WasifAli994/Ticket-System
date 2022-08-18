const asyncHandler = require('express-async-handler');

const Tickets = require('../models/ticketModel')

// @desc Get Tickets
// @route GET /tickets
// @access private

const getTickets = asyncHandler(async (req,res) => {
    
    const tickets = await Tickets.find();
    res.json(tickets).status(200);
})

// @desc Add Ticket
// @route POST /tickets
// @access private

const setTickets = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field!");
    }
    const tickets = await Tickets.create({
        text: req.body.text
    })
    res.json(tickets).status(200);
})

// @desc Update Ticket
// @route PUT /tickets/:id
// @access private

const updateTickets = asyncHandler(async (req,res) => {

    const tickets = await Tickets.findById(req.params.id)

    if(!tickets){
        res.status(400)
        throw new Error('Requested Ticket Not found!');
    }

    const updatedTicket = await Tickets.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.json(updatedTicket).status(200);
})

// @desc Delete Ticket
// @route DELETE /tickets
// @access private

const deleteTickets = asyncHandler(async (req,res) => {

    const tickets = await Tickets.findById(req.params.id)

    if(!tickets){
        res.status(400)
        throw new Error('Requested Ticket Not found!')
    }

    await tickets.remove();

    res.json({id: req.params.id}).status(200);
})

module.exports = {
    getTickets,
    setTickets,
    updateTickets,
    deleteTickets 
}