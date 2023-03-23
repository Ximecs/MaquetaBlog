// BUSCADOR DE CONTENIDO

//Declarando Variables
bars_search = document.getElementById("multiCollapseExample1");
cover_ctn_search = document.getElementById("coverContentSearch");//contenedor Input
inputSearch = document.getElementById("input-Search");
box_Search = document.getElementById("box-search");


//Ejecutar funciones
document.getElementById("searchItemNav").addEventListener("click", mostrar_fondocover);
document.getElementById("coverContentSearch").addEventListener("click", ocultar_collapse);
//Funcion para mostrar el cover
function mostrar_fondocover() {
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
}

//Funcion para ocultar el cover
function ocultar_collapse() {
    bars_search.classList.remove("show");
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_Search.style.display = "none";
    //console.log("entra a la funcion ocultar");
}

// SCROLL UP

document.getElementById("button-up").addEventListener("click",scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if(currentScroll>0){
       // window.requestAnimationFrame(scrollUp);
        window.scrollTo (0,0);
        buttonUp.style.transform = "scale(0)";
    }
}

buttonUp = document.getElementById("button-up");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
        buttonUp.style.transform = "scale(1)";
    }else if (scroll < 100){
        buttonUp.style.transform = "scale(0)";
    }
}

// FIN SCROLL UP

//CREANDO FILTRADO DE BUSQUEDA INTERNO

document.getElementById("input-Search").addEventListener("keyup", buscador_interno);

function buscador_interno() {
    filter = inputSearch.value.toUpperCase();
    li = box_Search.getElementsByTagName("li");

    //Recorriendo Elementos a filtrar mediante los 'Li'

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            box_Search.style.display = "block";

            if (inputSearch.value === "") {
                box_Search.style.display = "none";
            }
        } else {
            li[i].style.display = "none";
        }
        console.log(textValue.toUpperCase().indexOf(filter));
    }


} //FIN CREANDO FILTRADO DE BUSQUEDA INTERNO
