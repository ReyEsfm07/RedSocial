let aboutMeData=document.getElementById('form')

let aboutMe=async (e)=>{
    e.preventDefault();
    let datos=new FormData(aboutMeData);
    
    let bodyAboutMe={
        id_Users:4,
        // foto:'linkFotoUsuarioPerfil',
        profesion:datos.get('estudios'),
        city:datos.get('ciudad'),
        country:datos.get('estado'),
        linkedin:datos.get('linkedin'),
        hobbies:datos.get('hobbie'),
        aboutMe:datos.get('aboutMeText'),
        idioms:datos.get('idiomas')
   }
//    console.log(bodyAboutMe)
   let result=await fetch('http://localhost:3000/user/aboutMe',{
                            method:'POST',
                            body:JSON.stringify(bodyAboutMe),
                            headers: {
                                "Accept": "application/json, text/plain, *,*",
                                "Content-Type": "application/json"
                                }
                        })

    let resultFinal=await result.json()
    alert(resultFinal.menssage)

}

aboutMeData.addEventListener('submit', aboutMe, false)