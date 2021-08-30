const router=require('express').Router();
const controlleAuth=require('../controllers/controller.Auth')
const middlewaresUserValidation=require('../../middlewares/Joi_verification');
const e = require('express');
const { request } = require('express');

// router.set('view engine','ejs');
// router.set('views',__dirname+'/views');


router.post('/register',middlewaresUserValidation.validationNewUsersMidd,async(request,response)=>{

    let password=await controlleAuth.encriptPassword(request.body.password)
    let newUser ={
        name:request.body.name,
        lastName:request.body.lastName,
        year:request.body.year,
        month:request.body.month,
        day:request.body.day,
        gender:request.body.gender,
        email:request.body.email,
        password//password:password
    }
    try {
        let userDB=await controlleAuth.CreationNewUser(newUser);
        response.json({
            error:null,
            data:userDB
        })
    } catch (error) {
        response.status(400).json(error)
    }

});

router.get('/register',async(request,response)=>{

    response.render('register')
});


// response.header('auth-token',token).json({
//     error:null,
//     data:{token}
// });

// 


router.get('/login',async(request,response)=>{

    response.render('index')
});


router.post('/login',middlewaresUserValidation.validationLoginMidd,async(request,response)=>{

    let validationUserBody ={
        email:request.body.email,
        password:request.body.password
    }
    let resultValidationUserLogin=await controlleAuth.validationUser(validationUserBody) 

    if(resultValidationUserLogin==='userFail' || resultValidationUserLogin==='passwordFail'){
        response.status(400).json({error:true ,menssage:resultValidationUserLogin})
    }else{
        response.json({
        error:false,
        menssage:'Bienvenido',
        token:resultValidationUserLogin 
    })
    
    }

    // response.render('index')
});













router.get('/aboutMe',async(request,response)=>{
    response.render('aboutMe')
});


//Meter los registros de la tabla ABOUTME
router.post('/aboutMe',async(request,response)=>{

    let aboutMeUserBody ={
        id_Users:request.body.id_Users,
        profesion:request.body.profesion,
        city:request.body.city,
        country:request.body.country,
        linkedin:request.body.linkedin,
        hobbies:request.body.hobbies,
        aboutMe:request.body.aboutMe,
        idioms:request.body.idioms
        // id_project:request.body.id_project
    }
    try {
        let userInformationDB=await controlleAuth.CreationAboutMeUser(aboutMeUserBody);
        response.json({
            error:null,
            data:userInformationDB
        })
    } catch (error) {
        response.status(400).json(error)
    }

});




//Obtener los registros de la tabla ABOUTME
router.get('/perfil',async(request,response)=>{

    let aboutMeUserBody ={
        id_Users:request.body.id_Users,
        profesion:request.body.profesion,
        city:request.body.city,
        country:request.body.country,
        linkedin:request.body.linkedin,
        hobbies:request.body.hobbies,
        aboutMe:request.body.aboutMe,
        idioms:request.body.idioms
        // id_project:request.body.id_project
    }
    try {
        //DEBO JALAR LOS DATOS

        // let userInformationDB=await controlleAuth.CreationAboutMeUser(aboutMeUserBody);
        // response.json({
        //     error:null,
        //     data:userInformationDB
        // })
        response.render('perfil');
    } catch (error) {
        response.status(400).json(error)
    }

    

});


//Modificar los registros de la tabla ABOUTME
router.put('/aboutMe',async(request,response)=>{

    let aboutMeUserNewBody ={
        id_information:request.body.id_information,//lo tiene que proporcionar el front de forma automatica
        id_Users:request.body.id_Users,//lo tiene que proporcionar el front de forma automatica
        profesion:request.body.profesion,
        city:request.body.city,
        country:request.body.country,
        linkedin:request.body.linkedin,
        hobbies:request.body.hobbies,
        aboutMe:request.body.aboutMe,
        idioms:request.body.idioms
        // id_project:request.body.id_project
    }
    try {
        let userInformationDB=await controlleAuth.UpdateAboutMeUser(aboutMeUserNewBody);
        response.json({
            error:null,
            data:userInformationDB
        })
    } catch (error) {
        response.status(400).json(error)
    }

});



// router.get('/',async(request,response)=>{

// });


module.exports=router

