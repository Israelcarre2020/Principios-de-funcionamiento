/**
 * Función para calificar el ejercicio de aprendizaje 2
 */
var intentosSeleccionMultiple=0;
function seleccionMultiple() {

    var pregunta_1 = $("input[name='pregunta_1']:checked").val();
    var pregunta_2 = $("input[name='pregunta_2']:checked").val();
    var pregunta_3 = $("input[name='pregunta_3']:checked").val();
    var pregunta_4 = $("input[name='pregunta_4']:checked").val();
    var pregunta_5 = $("input[name='pregunta_5']:checked").val();
    var pregunta_6 = $("input[name='pregunta_6']:checked").val();
    var pregunta_7 = $("input[name='pregunta_7']:checked").val();
    var pregunta_8 = $("input[name='pregunta_8']:checked").val();
    var pregunta_9 = $("input[name='pregunta_9']:checked").val();
    $("#calificacionEjercicio_1").show();

    // if(!(pregunta_1 && pregunta_2 && pregunta_3 && pregunta_4 && pregunta_5 && pregunta_6 && pregunta_7 && pregunta_8 && pregunta_9)) {
    //     $("#calificacionEjercicio_1").html(`Debes responder todas las preguntas.`);
    //     return false;
    // }

    var calificacion = 0;

    $("#pregunta_1").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_3").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_4").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_5").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_6").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_7").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_8").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_9").css("background-color", "rgb(255 0 0 / 0.2)")


    if(pregunta_1 == "1"){
        calificacion++;
        $("#pregunta_1").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2 == "") {
        
        $("#pregunta_2").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_3 == "3") {
        calificacion++;
        $("#pregunta_3").css("background-color", "rgb(57 236 36 / 20%)");
    } 
    if (pregunta_4 == "4") {
        calificacion++;
        $("#pregunta_4").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_5 == "") {
       
        $("#pregunta_5").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_6 == "6") {
        calificacion++;
        $("#pregunta_6").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_7 == "7") {
        calificacion++;
        $("#pregunta_7").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_8 == "8") {
        calificacion++;
        $("#pregunta_8").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_9 == "") {
       
        $("#pregunta_9").css("background-color", "rgb(57 236 36 / 20%)");
    }

    $("#calificacionEjercicio_1").html(`Tu calificación es: ${calificacion}/6`);  

    if (calificacion === 6) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple();
            }
        })
    } else{
        intentosSeleccionMultiple++;

        if(intentosSeleccionMultiple >= 2){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple = 0;
            replaySeleccionMultiple();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple() {
    $("#calificacionEjercicio_1").hide();
    $("#pregunta_1").css("background-color", "white");
    $("#pregunta_2").css("background-color", "white");
    $("#pregunta_3").css("background-color", "white");
    $("#pregunta_4").css("background-color", "white");
    $("#pregunta_5").css("background-color", "white");
    $("#pregunta_6").css("background-color", "white");
    $("#pregunta_7").css("background-color", "white");
    $("#pregunta_8").css("background-color", "white");
    $("#pregunta_9").css("background-color", "white");
    $("input[name=pregunta_1]").prop("checked", false);
    $("input[name=pregunta_2]").prop("checked", false);
    $("input[name=pregunta_3]").prop("checked", false);
    $("input[name=pregunta_4]").prop("checked", false);
    $("input[name=pregunta_5]").prop("checked", false);
    $("input[name=pregunta_6]").prop("checked", false);    
    $("input[name=pregunta_7]").prop("checked", false);
    $("input[name=pregunta_8]").prop("checked", false);
    $("input[name=pregunta_9]").prop("checked", false);
}

/**
 * Controla el aparecer u ocultar las tarjetas de control
 */
$(".btnAplicacionesControl").click(function() {
    var idContenido = $(this).attr("data-idContenido");

    $(".aplicacionesControl").hide();
    $("#"+idContenido).show();
    targetas(idContenido);
})


/**
 * Función para configurar comportamiento de imagen de estructura de transistor
 */
function canvasEstructuraTransistor() {
    var canvas = new fabric.Canvas('estructuraTransistor_canvas');
    var imgElement = 'assets/img_3/btn_1.png';
    var imgElement2 = 'assets/img_3/btn_2.png'; 
    var imgElement3 = 'assets/img_3/btn_3.png';

    configureCanvas(canvas, fabric, imgElement, [25, 70], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_1").show();
        
    });
    configureCanvas(canvas, fabric, imgElement2, [150, 50], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_2").show();
    });
    configureCanvas(canvas, fabric, imgElement3, [255, 50], [40, 40], function(){
        $(".estructuraTransistor").hide();
        $("#estructuraTransistor_3").show();
    });
}
