//seleccionamos todoss los botones del acordeon
//menu responsive
$(".menu-btn").on("click" , function(){
    $(".menu").slideToggle();
    $(this).toggleClass("abierto");
})

// Cuando hacemos click en una opción del menú (movil),
//  se cierra el menú
 // 1) seleccionar con jquery las opciones del menú
var $navLink = $(".menu a");
$navLink.on("click", function() {
    $(".menu").slideUp();
    $(".menu-btn").removeClass("abierto");
})