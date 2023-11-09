const AgendaService = require('../services/agenda.service')

class AgendaController{
    constructor(){
        this.service = new AgendaService()
    }

    async index(){
        const agendas = await this.service.getAll()
        return agendas
    }

        async create(date, hour_start, hour_end,user, place, status){
        const agenda = await this.service.create(date, hour_start, hour_end,user,place, status)
        return agenda
    }


    async findOne(id){
    
        const agenda =  await this.service.findOne(id)
        
        if(!agenda){
        
            throw new Error('Agenda dont find')
        }
        return agenda
    }
    async update(id, values){
        const agenda = await this.service.update(id,values)

         if(!agenda){
            throw new Error('Agenda dont find')
         }
         return agenda
    }

    async delete(id){
        const agenda = await this.service.delete(id)
        if(!agenda){
            throw new Error('Agenda dont find')
        }
        return agenda
    }
}

module.exports = AgendaController