let model_InformationProjectUsers=require('../model/informationProjectUsers');
let model_OpinionUsers=require('../model/opinionUsers');

let CreationNewProject = async(newProject) =>{

    try {
        let newProjectBody = await model_InformationProjectUsers.create({
            id_Users:newProject.id_Users,//Este se deberia de pasar automatico en el front
            photoLink:newProject.photoLink,
            repositoryLink:newProject.repositoryLink,
            descriptionProject:newProject.descriptionProject
        });
        return newProjectBody;
    } catch (error) {
        console.log(`Error en el modelo al registrar al usuario: ${error}`);
        throw new Error(error.message);
    }
}



let CreationNewOpinionProject = async(newOpinionProject) =>{

    try {
        let newOpinionProjectBody = await model_OpinionUsers.create({
            id_project:newOpinionProject.id_project,//Este se deberia de pasar automatico en el front
            stars:newOpinionProject.stars,
            opinion:newOpinionProject.opinion,
            id_Users:newOpinionProject.id_Users,//Este se deberia de pasar automatico en el front
            id_Users_opinion:newOpinionProject.id_Users_opinion//Este se deberia de pasar automatico en el front
        });
        return newOpinionProjectBody;
    } catch (error) {
        console.log(`Error en el modelo al registrar al usuario: ${error}`);
        throw new Error(error.message);
    }
}

module.exports={CreationNewProject,CreationNewOpinionProject}