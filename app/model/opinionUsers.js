let {DataTypes} = require('sequelize');
let sequelize = require('../../database/conexion');


let opinionProjectTable = sequelize.define('opinionProjectTable',{
    id_Opinion: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_project: {
        type: DataTypes.INTEGER,
        allowNull: true
    },  
    stars:{
        type: DataTypes.FLOAT,
        allowNull: true
    },  
    opinion:{
        type: DataTypes.STRING(250),
        allowNull: true
    },    
    id_Users:{
        type: DataTypes.INTEGER,
        allowNull: true
    },    
    id_Users_opinion:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
 {
    timestamps: true,
    createdAt: 'fecha_registro_projecto_opinion',
    updatedAt: 'fecha_actualizacion_projecto_opinion'
}
);





module.exports = opinionProjectTable; 