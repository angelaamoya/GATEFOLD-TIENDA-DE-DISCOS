//seleccionamos todoss los botones del acordeon
//menu responsive
$(".menu-btn").on("click" , function(){
    $(".menu").slideToggle();
    $(this).toggleClass("abierto");
})