const AppError = require('../utils/errors/app-errors');
const {StatusCodes} = require("http-status-codes");
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data){
        const  response = await  this.model.create(data);
        console.log(`Inside Repo ->`,response);
        return response;
    }

    async destroy(data){
        const response = await this.model.destroy({
            where : {
                id : data
            }
        });

        if(response === 0){
            throw new  AppError('Can Not find the resource',StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async update(data,id){
        const response = await this.model.update(data,{
            where : {
                id : id,
            }
        });
        if(response === 0){
            throw new  AppError('Can Not find the resource',StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async get(data){
        const response = await this.model.findByPk(data);
        if(response === 0){
            throw new  AppError('Can Not find the resource',StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAll(){
        const response = await this.model.findAll();
        if(response === 0){
            throw new  AppError('Can Not find the resource',StatusCodes.NOT_FOUND);
        }
        return response;
    }
}

module.exports = CrudRepository;