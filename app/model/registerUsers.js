  
let {DataTypes} = require('sequelize');
let sequelize = require('../../database/conexion');

let informationUsersTable=require('./informationUsers')
let opinionProjectTable=require('./opinionUsers')
let informationProjectUsers=require('./informationProjectUsers')

let registerUsersTable = sequelize.define('registerUsersTable',{
    id_Users: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    gender:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    password:{
        type: DataTypes.STRING(100),
        alowNull: false
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    month:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    day:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
 {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
}
);



informationUsersTable.belongsTo(registerUsersTable,{foreignKey: 'id_Users'});
registerUsersTable.hasMany(informationUsersTable,{foreignKey: 'id_Users'});

opinionProjectTable.belongsTo(registerUsersTable,{foreignKey: 'id_Users'});
registerUsersTable.hasMany(opinionProjectTable,{foreignKey: 'id_Users'});

informationProjectUsers.belongsTo(registerUsersTable,{foreignKey: 'id_Users'});
registerUsersTable.hasMany(informationProjectUsers,{foreignKey: 'id_Users'});


module.exports = registerUsersTable;