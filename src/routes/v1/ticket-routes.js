const express = require('express');
const { TicketController } = require('../../controllers');
const router = express.Router();

router.post('/create',TicketController.createTicket);

module.exports = router;