const express = require('express');
const router = express.Router();
const { getTickets, setTickets, updateTickets, deleteTickets } = require('../controllers/ticketController');

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTickets);

router.route('/').post(protect, setTickets);
    
router.route('/:id').put(protect, updateTickets);

router.route('/:id').delete(protect,deleteTickets);

module.exports = router;