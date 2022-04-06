/*VARIABLES PARA BOTON ARRIBA*/
let btnArriba = document.getElementById("flecha_arriba");
document.addEventListener("scroll", scroll);

/*BOTON PARA DIRIGIRSE ARRIBA DE LA PAGINA*/
function scroll(){
    var pagina = document.querySelector("html");
    var x = pagina.scrollTop;
    if(x >= 0 && x <= 20 ){
    btnArriba.style.visibility='hidden';
    }else{
        btnArriba.style.visibility='visible';
    }
};


btnArriba.addEventListener("click", function() {
    window.scrollTo(0, 0)
});