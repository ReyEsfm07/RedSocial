const {DataTypes} = require('sequelize');
let sequelize = require('../../database/conexion');

let opinionProjectTable=require('./opinionUsers')
let informationUsers=require('./informationUsers')

let informationProjectTable = sequelize.define('informationProjectTable',{

    id_project: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    photoLink:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    repositoryLink:{
        type: DataTypes.STRING(100),
        allowNull: true
    },    
    descriptionProject:{
        type: DataTypes.STRING(500),
        allowNull: true
    },    
    id_Users:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
 { 
    timestamps: true,
    createdAt: 'fecha_registro_projecto',
    updatedAt: 'fecha_actualizacion_projecto'
}
);


opinionProjectTable.belongsTo(informationProjectTable,{foreignKey: 'id_project'});
informationProjectTable.hasMany(opinionProjectTable,{foreignKey: 'id_project'});

// informationUsers.belongsTo(informationProjectTable,{foreignKey: 'id_project'});
// informationProjectTable.hasMany(informationUsers,{foreignKey: 'id_project'});


module.exports = informationProjectTable;