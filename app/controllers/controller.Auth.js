// let model_InformationProjectUsers=require('../model/informationProjectUsers');
let model_InformationUsers=require('../model/informationUsers');
// let model_OpinionUsers=require('../model/opinionUsers');
let model_RegisterUsers=require('../model/registerUsers');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');



let CreationNewUser = async(newUser) =>{
    try {
        let userExistsEmail = await model_RegisterUsers.findOne({where: {email: `${newUser.email}`}});

        if (userExistsEmail){
            newUserExists='Email ya registrado'
            return newUserExists;
        } else {
            let newUserBody = await model_RegisterUsers.create({
                name:newUser.name,
                lastname:newUser.lastName,
                year:newUser.year,
                month:newUser.month,
                day:newUser.day,
                gender:newUser.gender,
                email:newUser.email,
                password:newUser.password
            });
            return newUserBody;
        }
    } catch (error) {
        console.log(`Error en el modelo al registrar al usuario: ${error}`);
        throw new Error(error.message);
    }
}


let CreationAboutMeUser = async(AboutMeUser) =>{
    try {

        let userExistsInformation = await model_InformationUsers.findOne({where: {id_Users: `${AboutMeUser.id_Users}`}});


        if (userExistsInformation){
            userDataExists='Informacion del usuario ya registrado, puede modificar en ajustes'
            return userDataExists;
        } else {
            let userDataBody = await model_InformationUsers.create({
                id_Users:AboutMeUser.id_Users,
                profesion:AboutMeUser.profesion,
                city:AboutMeUser.city,
                country:AboutMeUser.country,
                linkedin:AboutMeUser.linkedin,
                hobbies:AboutMeUser.hobbies,
                aboutMe:AboutMeUser.aboutMe,
                idioms:AboutMeUser.idioms
                // id_project:AboutMeUser.id_project
            });
            return userDataBody;
        }

    } catch (error) {
        console.log(`Error en el modelo al registrar la informacion del usuario: ${error}`);
        throw new Error(error.message);
    }
}


let UpdateAboutMeUser = async(aboutMeUserNewBody) =>{

    try {

        let userExistsInformation = await model_InformationUsers.findOne({where: {id_information: `${aboutMeUserNewBody.id_information}`}});
        console.log(!userExistsInformation)

        if (!userExistsInformation){
            userDataExists='EL usuario no exite'
            return userDataExists;
        } else {
            let userDataBody = await model_InformationUsers.update({
                id_Users:aboutMeUserNewBody.id_Users,
                profesion:aboutMeUserNewBody.profesion,
                city:aboutMeUserNewBody.city,
                country:aboutMeUserNewBody.country,
                linkedin:aboutMeUserNewBody.linkedin,
                hobbies:aboutMeUserNewBody.hobbies,
                aboutMe:aboutMeUserNewBody.aboutMe,
                idioms:aboutMeUserNewBody.idioms
                // id_project:AboutMeUser.id_project
            },{where: {id_information: `${aboutMeUserNewBody.id_information}`}});
            return userDataBody;
        }

    } catch (error) {
        console.log(`Error en el modelo al modificar la informacion del usuario: ${error}`);
        throw new Error(error.message);
    }
}






let validationUser = async(validationUserBody) =>{
    const user=await model_RegisterUsers.findOne({where: {email: `${validationUserBody.email}`}});
    if (!user) return 'userFail'

    const validPassword=await bcrypt.compare(validationUserBody.password,user.password);
    if (!validPassword) return 'passwordFail'

    if(user && validPassword){
        const token=jwt.sign({
            name:user.dataValues.name,
            id_Users:user.dataValues.id_Users
            }, process.env.TOKEN_SECRET,{expiresIn:'120s'})
        return token
    }

};




let encriptPassword=async(body_password)=>{
    const saltos=await bcrypt.genSalt(7);
    const password=await bcrypt.hash(body_password,saltos)
    return password
}

module.exports={CreationNewUser,validationUser,encriptPassword,CreationAboutMeUser,UpdateAboutMeUser}