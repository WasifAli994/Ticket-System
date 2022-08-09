const express = require('express');
const router = require('express').Router();
const { getTickets, setTickets, updateTickets, deleteTickets } = require('../controllers/ticketController');

router.get('/', getTickets);

router.post('/', setTickets);

router.put('/:id', updateTickets);

router.delete('/:id', deleteTickets);

module.exports = router;