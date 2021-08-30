const router =require('express').Router();

router.get('/',(request,response)=>{
    response.json({
        error:null,
        data:{
            title:'mi ruta protegida',
            user:'llegaste'//request.user
        }
    })
})
module.exports=router 