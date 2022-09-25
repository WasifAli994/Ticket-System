const asyncHandler = require('express-async-handler');

const Tickets = require('../models/ticketModel')
const User = require('../models/userModel')

// @desc Get Tickets
// @route GET api/tickets
// @access private

const getTickets = asyncHandler(async (req,res) => {
    
    const tickets = await Tickets.find({user: req.user.id});
    res.json(tickets).status(200);
})

// @desc Add Ticket
// @route POST api/tickets
// @access private

const setTickets = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field!");
    }
    const tickets = await Tickets.create({
        text: req.body.text,
        user: req.user.id
    })
    res.json(tickets).status(200);
})


// @desc Update Ticket
// @route PUT api/tickets/:id
// @access private

const updateTickets = asyncHandler(async (req,res) => {

    const tickets = await Tickets.findById(req.params.id)

    if(!tickets){
        res.status(400)
        throw new Error('Requested Ticket Not found!');
    }

    const user = await User.findById(req.user.id)
    //check for user
    if(!user){
        res.status(401)
        throw new Error('User not Found!')
    }

    //To make sure the logged in user matches the goal user
    if(tickets.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized!')
    }

    const updatedTicket = await Tickets.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.json(updatedTicket).status(200);
})

// @desc Delete Ticket
// @route DELETE api/tickets
// @access private

const deleteTickets = asyncHandler(async (req,res) => {

    const tickets = await Tickets.findById(req.params.id)

    if(!tickets){
        res.status(400)
        throw new Error('Requested Ticket Not found!')
    }

    const user = await User.findById(req.user.id)
    //check for user
    if(!user){
        res.status(401)
        throw new Error('User not Found!')
    }

    //To make sure the logged in user matches the goal user
    if(tickets.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized!')
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