const { TicketServices } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');


async function createTicket(req,res){
    try{
        const response = await TicketServices.createTicket({
            subject : req.body.subject,
            content : req.body.content,
            Email : req.body.Email,
            status : req.body.status
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    }catch(error){
        console.log(`Inside Controller ->`,error);
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createTicket,
}