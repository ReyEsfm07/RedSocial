  
const Sequelize = require('sequelize');

const sequelize =new Sequelize('proyectoRedSocial',null,null,{
    dialect:'mssql',//process.env.DIALECT,//MYSQL,SQL SERVER ,PG SQL,MONGOODB
    server:'localhost',//process.env.HOST,
    port:1433,//process.env.PORT_MSSQL,
    dialectOptions:{
        authentication:{
            type:'default',
            options:{
                encrypt:true,
                userName:'sa',//process.env.USERNAME_MSSQL,
                password:'12q3wa4esz'//process.env.PASSWORD
            }
            
        }
    }

});



module.exports = sequelize;
