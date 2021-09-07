window.addEventListener("scroll", function(){
    let animacion = document.getElementById("promos");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log("posicionObj1");

    let tamañoPantalla = window.innerHeight;

    if(posicionObj1 < tamañoPantalla ){
        animacion.style.animation = "mover .7s ease-out"
    }
})