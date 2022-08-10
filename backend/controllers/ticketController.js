const asyncHandler = require('express-async-handler');

// @desc Get Tickets
// @route GET /tickets
// @access private

const getTickets = asyncHandler(async (req,res) => {
    res.json({message: "Get Tickets"}).status(200);
})

// @desc Add Ticket
// @route POST /tickets
// @access private

const setTickets = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field!");
    }
    res.json({message: "Ticket Added"}).status(200);
})

// @desc Update Ticket
// @route PUT /tickets/:id
// @access private

const updateTickets = asyncHandler(async (req,res) => {
    res.json({message: `Ticket # ${req.params.id} Updated`}).status(200);
})

// @desc Delete Ticket
// @route DELETE /tickets
// @access private

const deleteTickets = asyncHandler(async (req,res) => {
    res.json({message: `Ticket # ${req.params.id} Deleted`}).status(200);
})

module.exports = {
    getTickets,
    setTickets,
    updateTickets,
    deleteTickets 
}