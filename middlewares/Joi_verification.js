const Joi=require('@hapi/joi');


let validationNewUsersMidd=async(request, response, next)=>{
    try {
        const schemaRegister=Joi.object({
            name:Joi.string().min(3).max(255).required(),
            lastName:Joi.string().min(3).max(255).required(),
            year:Joi.number().min(1900).max(2050).required(),
            month:Joi.number().min(1).max(12).required(),
            day:Joi.number().min(1).max(31).required(),
            gender:Joi.string().min(3).max(25).required(),
            email:Joi.string().min(3).max(255).required().email(),
            password:Joi.string().min(3).max(255).required()
        });
    
        const {error}=schemaRegister.validate(request.body);
        if (error){
            return response.status(400).json({error:error.details[0].message})
        }
        next()
    }
     catch (error) {
        res.status(400).json({message: 'Acceso denegado: Alguno de los campos cumple con los estandares'});
    }
}



let validationLoginMidd=async(request, response, next)=>{
    try {
        const schemaLogin=Joi.object({
            email:Joi.string().min(3).max(255).required().email(),
            password:Joi.string().min(3).max(255).required()
        });
    
        //validaciones de usuario
        const {error}=schemaLogin.validate(request.body);
        if (error){
            return response.status(400).json({error:error.details[0].message})
        }
        next()
    }
     catch (error) {
        res.status(400).json({message: 'Acceso denegado: Alguno de los campos cumple con los estandares'});
    }
}


module.exports={validationNewUsersMidd,validationLoginMidd}
