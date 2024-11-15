const express  = require('express');
const {infoContoller} = require('../../controllers');
const ticketRoute = require('./ticket-routes');

const router = express.Router();

router.get('/info',infoContoller.info);
router.use('/ticket',ticketRoute);


module.exports = router;