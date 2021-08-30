let {DataTypes} = require('sequelize');
let sequelize = require('../../database/conexion');

// let registerUsersTable=require('./registerUsers')

let informationUsersTable = sequelize.define('informationUsersTable',{
    id_Information: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_Users: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    profesion:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    city:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    country:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    linkedin:{
        type: DataTypes.STRING(100),
        alowNull: false
    },
    hobbies:{
        type: DataTypes.STRING(250),
        allowNull: false
    },
    aboutMe:{ 
        type: DataTypes.STRING(250),
        allowNull: false
    },
    idioms:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
    // ,
    // id_project: {

    //     type: DataTypes.INTEGER,
    //     allowNull: true
    // }
},
 {
    timestamps: true,
    createdAt: 'fecha_registro_informacion',
    updatedAt: 'fecha_actualizacion_informacion'
}
);





module.exports = informationUsersTable;