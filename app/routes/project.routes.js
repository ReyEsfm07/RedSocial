const router=require('express').Router();
const controlleProject=require('../controllers/controller.project');




router.post('/insertProject',async(request,response)=>{

    let newProject ={

        id_Users:request.body.id_Users,
        photoLink:request.body.photoLink,
        repositoryLink:request.body.repositoryLink,
        descriptionProject:request.body.descriptionProject
        
    }
    try {
        let projectDB=await controlleProject.CreationNewProject(newProject);
        response.json({
            error:null,
            data:projectDB
        })
    } catch (error) {
        response.status(400).json(error)
    }

});


router.post('/opinionProject',async(request,response)=>{

    let newOpinionProject ={
        id_project:request.body.id_project,
        stars:request.body.stars,
        opinion:request.body.opinion,
        id_Users:request.body.id_Users,
        id_Users_opinion:request.body.id_Users_opinion
    }
    try {
        let projectOpinionDB=await controlleProject.CreationNewOpinionProject(newOpinionProject);
        response.json({
            error:null,
            data:projectOpinionDB 
        })
    } catch (error) {
        response.status(400).json(error)
    }
});


router.get('/raiting',async(request,response)=>{
    response.render('raiting')
});
module.exports=router