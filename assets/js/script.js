
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
        $("#enviar-correo").on("click", function () {
            alert("El correo fue enviado correctamente...");
        });
    });

    $("#h2-ingredientes, #h2-preparacion").on("dblclick", function () {
        $(this).css("color", "red");
    });

    $(".card-title").on("click", function () {
        $(".card-text").toggle();
    });

