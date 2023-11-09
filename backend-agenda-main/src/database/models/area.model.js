const { DataTypes, Model } = require ('sequelize')

const AREA_TABLE = 'areas'

const AreaSchema = {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    code:{
        type:DataTypes.STRING,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    observations:{
        type:DataTypes.STRING,
        allowNull: false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
} 

class Area extends Model{
    static associate(models){
        this.hasMany(models.User,{as: 'users'})

    }
    static config(sequelize){
        return {sequelize, tableName: AREA_TABLE, modelName: 'Area', timestamps:false}
    }
}

module.exports = {AREA_TABLE, AreaSchema, Area}