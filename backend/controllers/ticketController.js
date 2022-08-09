// @desc Get Tickets
// @route GET /tickets
// @access private

const getTickets = (req,res) => {
    res.json({message: "Get Tickets"}).status(200);
}

// @desc Add Ticket
// @route POST /tickets
// @access private

const setTickets = (req,res) => {
    res.json({message: "Ticket Added"}).status(200);
}

// @desc Update Ticket
// @route PUT /tickets/:id
// @access private

const updateTickets = (req,res) => {
    res.json({message: `Ticket # ${req.params.id} Updated`}).status(200);
}

// @desc Delete Ticket
// @route DELETE /tickets
// @access private

const deleteTickets = (req,res) => {
    res.json({message: `Ticket # ${req.params.id} Deleted`}).status(200);
}

module.exports = {
    getTickets,
    setTickets,
    updateTickets,
    deleteTickets 
}