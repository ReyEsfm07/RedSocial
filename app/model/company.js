  
let {DataTypes} = require('sequelize');
let sequelize = require('../../database/conexion');


let companyTable = sequelize.define('registerUsersTable',{
    id_Company: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name_company:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description_company:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    people_number:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    logo_company:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
  
},
 {
    timestamps: true,
    createdAt: 'fecha_registro_company',
    updatedAt: 'fecha_actualizacion_company'
}
);



module.exports = companyTable;