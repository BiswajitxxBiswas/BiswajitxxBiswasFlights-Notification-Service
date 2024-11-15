const { Ticket } = require('../models');
const CrudRepository = require('./crud-repository');

class TicketRepository extends  CrudRepository{
    constructor() {
        super(Ticket);
    }

    async getAllPendingEmails(){
        const response = await Ticket.findAll({
            where : {
                status : 'PENDING'
            }
        });
        return response;
    }
}

module.exports = TicketRepository;