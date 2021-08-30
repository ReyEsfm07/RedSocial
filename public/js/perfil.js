let contador=0;

let calificar=(item)=>{
    console.log(item)
    contador=item.id[0]
    let nombre=item.id.substring(1)

    for( let i=0;i<5;i++){

        if(i<contador){
            document.getElementById((i+1)+nombre).style.color='orange'
            
        }else{
            document.getElementById((i+1)+nombre).style.color='white'
        }
       
    }
    alert("Gracias por la calificación de "+contador+" estrellas :D")
}


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});
