const express =require("express");
const sequelize = require('./database/conexion');
// const bodyparser=require('body-parser');
require('dotenv').config();

const app=express();

let informationUsers=require('./app/model/informationUsers');
let opinionUsers=require('./app/model/opinionUsers');
let informationProjectUsers=require('./app/model/informationProjectUsers');
let registerUsers=require('./app/model/registerUsers');
let registerUsersHierarchy=require('./app/model/UsersHierarchy')
let company=require('./app/model/company')

app.set('view engine','ejs');
app.set('views',__dirname+'/app/views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '../public'));

// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json())


//import routes
const authRoutes=require('./app/routes/auth.routes');
const projectRoures=require('./app/routes/project.routes')


const validaToken=require('./middlewares/JWT_validation');
const { required } = require("@hapi/joi");
//! const admin=require('./app/routes/admin')



//route middlewares
app.use('/user',authRoutes)
app.use('/perfil',projectRoures)
//! app.use('/admin',validaToken.verifyToken,admin)

//Ruta de prueba
app.get('/',(request,response)=>{
    response.send("Hello Word")
});


const testConnection = async() =>{
    try {


        //RECORDATORIO EL ORDEN IMPORTA COMO EN SQL
        await registerUsers.sync();
        await informationUsers.sync();
        await informationProjectUsers.sync(); 
        await opinionUsers.sync();

        await company.sync();
        await registerUsersHierarchy.sync();

        //AUTENTICAMOS LA CONEXION A LA BASE DE DATOS
        await sequelize.authenticate();
        console.log("SUCCESSFUL CONNECTION"); 
        //INICIAMOS NUESTRO SERVIDOR
        await app.listen(process.env.port,()=>{
            console.log(`SUCCESSFUL SERVER http://localhost:${process.env.port}`);
        })
        }catch(error){
        console.log("FAILED CONNECTION", error); 
        }
}

testConnection();
 
