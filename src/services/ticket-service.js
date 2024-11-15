const { TicketRepository } = require('../repositories');
const { emailConfig } = require('../config');
const AppError = require('../utils/errors/app-errors');
const {StatusCodes} = require("http-status-codes");

const ticketRepo = new TicketRepository();

async function sendMail(mailFrom, mailTo, subject, text){
    try {
        const response = await emailConfig.mailSender.sendMail({
            from : mailFrom,
            to : mailTo,
            subject : subject,
            text : text
        });
        return response;
    }catch (error){
        throw new AppError('Can Not Send The Mail',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function createTicket(data){
    try {
        const response = await ticketRepo.create(data);
        return response;
    }catch(error){
        console.log(`Inside Service ->`,error);
        throw new AppError('Can Not Create Mail-Request',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getPendingEmails(){
    try{
        const response = await ticketRepo.getAllPendingEmails();
        return response;
    }catch(error){
        throw new AppError('Can Not Find Pending Mail-Request',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    sendMail,
    createTicket,
    getPendingEmails
}