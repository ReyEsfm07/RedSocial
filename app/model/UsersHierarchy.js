  
let {DataTypes} = require('sequelize');
let sequelize = require('../../database/conexion');


let registerUsersHierarchyTable = sequelize.define('UserHierarchy',{
    id_UsersHierarchy: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UsersHierarchy:{
        type: DataTypes.STRING(50),
        allowNull: false
    }

},
 {
    timestamps: true,
    createdAt: 'fecha_registro_jerarquia',
    updatedAt: 'fecha_actualizacion_jerarquia'
}
);




module.exports = registerUsersHierarchyTable;