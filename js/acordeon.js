
// Cuando hacemos click en una opción del menú (movil),
//  se cierra el menú
 // 1) seleccionar con jquery las opciones del menú


//aqui van 6 elementos
$(".acordeon__titulo").on("click" , function(){

    var contenido = ($(this).next());
    //cerramos lod demass
    $(".acordeon__contenido").not(contenido).slideUp();
    $(".acordeon_titulo").not(this).removeClass("abierto");




    //contenido show
    contenido.slideToggle();
    $(this).toggleClass("abierto");
})
