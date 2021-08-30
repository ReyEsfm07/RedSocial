const jwt=require("jsonwebtoken");

const verifyToken=(request,response,next)=>{
    const token =request.header('auth-token')
    //Si el token no existe
    if(!token) return response.status(401).json({error:'Acceso denegado'})
    try {
        const verified= jwt.verify(token,process.env.TOKEN_SECRET)
        request.user=verified
        next()
    } catch (error) {
        response.status(400).json({error:'Token no valido'})
    }
}

module.exports={verifyToken}