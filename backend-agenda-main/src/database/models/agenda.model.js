const { DataTypes, Model } = require ('sequelize')

const AGENDA_TABLE = 'agendas'

const AgendaSchema = {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull: false
    },
    hour_start:{
        type:DataTypes.TIME,
        allowNull: false,
        
    },
    hour_end:{
        type:DataTypes.TIME,
        allowNull: false
    },
    user:{
        type:DataTypes.STRING,
        allowNull: false
    },
    place:{
        type:DataTypes.STRING,
        allowNull: false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
} 

class Agenda extends Model{
    static associate(models){

    }
    static config(sequelize){
        return {sequelize, tableName: AGENDA_TABLE, modelName: 'Agenda', timestamps:false}
    }
}

module.exports = {AGENDA_TABLE, AgendaSchema, Agenda}