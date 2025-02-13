let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    if (!skills) return; // Si no encuentra el elemento, detiene la función.

    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        if (habilidades.length === 0) return; // Evita otro error si no hay elementos con esa clase.

        habilidades[0]?.classList.add("javascript");
        habilidades[1]?.classList.add("htmlcss");
        habilidades[2]?.classList.add("photoshop");
        habilidades[3]?.classList.add("wordpress");
        habilidades[4]?.classList.add("drupal");
        habilidades[5]?.classList.add("comunicacion");
        habilidades[6]?.classList.add("trabajo");
        habilidades[7]?.classList.add("creatividad");
        habilidades[8]?.classList.add("dedicacion");
        habilidades[9]?.classList.add("proyect");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    let proyectos = document.querySelectorAll(".portfolio .galeria .proyecto");

    if (proyectos.length > 1) {
        proyectos[0].addEventListener("click", function () {
            window.open("https://generador-qr-prp.netlify.app/", "_blank");
        });

        proyectos[1].addEventListener("click", function () {
            window.open("https://tres-en-raya-prp.netlify.app/", "_blank");
        });
    } else {
        console.error("❌ No se encontraron suficientes proyectos.");
    }
});







//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 