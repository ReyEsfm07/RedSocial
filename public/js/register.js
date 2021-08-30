let register=document.getElementById('form')


let resgisterNewUser= async (e)=>{
    e.preventDefault();
    
    let datos=new FormData(register);
    let bodyLogin={
         email:datos.get('TUNOMBRE'),
         password:datos.get('TUAPELLIDO')
    }
    console.log(body)

}
 

register.addEventListener('submit', resgisterNewUser, false)
    // console.log(bodyLogin)






    // let result=await fetch('http://localhost:3000/user/login',{
    //                 method:'POST',
    //                 body:JSON.stringify(bodyLogin),
    //                 headers: {
    //                     "Accept": "application/json, text/plain, *,*",
    //                     "Content-Type": "application/json"
    //                     },    
    //                 body:JSON.stringify({
    //                     'email':bodyLogin.email,
    //                     'password':bodyLogin.password
    //                 })
    //             })
    //             // 

    // let resultFinal=await result.json()
    // alert(resultFinal.menssage)
    // if(resultFinal.menssage==='Bienvenido'){
    //     window.location.href="https://www.google.com.mx"
    // }
    // alert(JSON.stringify(await result.json().details[0].menssage))
