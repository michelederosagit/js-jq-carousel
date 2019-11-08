$(document).ready(function(){

    $(".next").click(function(){

        // Seleziono l'indice attivo
        var posImg = $(".slider-wrapper .images img.active, .nav i.active");
        // Rimuovo la classe all'indice
        posImg.removeClass("active")
        // Se l'indice è l'ultimo elemento allora torno al primo
        if (posImg.hasClass("last")) {
            $(".slider-wrapper .images img.first, .nav i.first").addClass("active");
        } else {
            posImg.next().addClass("active");
        }
    });

    $(".prev").click(function() { 

        // Seleziono l'indice attivo
        var posImg = $(".slider-wrapper .images img.active, .nav i.active");

        // Rimuovo la classe all'indice
        posImg.removeClass("active");

        // Se l'indice è il primo elemento allora torno all'ultimo
        if (posImg.hasClass("first")) {
            $(".slider-wrapper .images img.last, .nav i.last").addClass("active");
        } else {
            posImg.prev().addClass("active");
        }
    });
});