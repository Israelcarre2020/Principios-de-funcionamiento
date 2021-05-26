var numSlide = 35;
var htmljuego = $("#juegofv").html();
var intentosJuego = 0;
var intentosJuegoSecuencia = 0;
var arraytruefalse = [false,false,false];
var arrayPalabra = [false,false,false];
var segundosInicial = 0;
var segundosTiempo = "00:00:00";
var controlaTiempo=setInterval('updateClock()', 1000 );

$(document).ready(function () {
    iniciarJuegofv();
    updateClock();
    iniciarJuegoPalabra();
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('.hello_world').pwstabs({
        effect: 'slideleft',
        defaultTab: 1
    });
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('#porcentaje_curso').popover({
            container: 'body',
            html: true,
            content: '<div id="percent_curso" class="blue"></div>',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    })

    $('#porcentaje_curso').on('shown.bs.popover', function () {
        var numItems = $('.done').length / 2;
        var porcent = parseFloat((numItems / numSlide) * 100).toFixed(2);
        $("#percent_curso").percircle({ percent: porcent, animate: "true" });
    })

    $('#icon_actividades').off('click').on('click', function () {
        if ($(".divcontenido").is(':visible')) {
            $(".divcontenido").animate({ width: 'hide' });
            $(".menu-actividades").show(1000);
            setTimeout(function () { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
        } else {
            $(".menu-actividades").hide();
            setTimeout(function () { toggleOptions('.selector'); }, 10);
            $(".divcontenido").animate({ width: 'show' });
        }
    });

    $('.link_actividad').off('click').on('click', function () {
        $(".menu-actividades").hide();
        setTimeout(function () { toggleOptions('.selector'); }, 10);
        $(".divcontenido").animate({ width: 'show' });

        var number_at = $(this).attr("for");

        switch (number_at) {
            case "c1":
                $('#smartwizard').smartWizard("goToStep", 3);
                $('#smartwizard2').smartWizard("goToStep", 3);
                break;
            case "c2":
                $('#smartwizard').smartWizard("goToStep", 12);
                $('#smartwizard2').smartWizard("goToStep", 12);
                break;
            case "c3":
                $('#smartwizard').smartWizard("goToStep", 23);
                $('#smartwizard2').smartWizard("goToStep", 23);
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }

        $(".controls-slide").show();

        $(".divcontenido").css("height","1000px");
    });  

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });     

    $('#smartwizard').smartWizard({
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $('#smartwizard2').smartWizard({
        theme:'arrows',
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        },
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        }
    });

    $('#nextSlide').on('click', function () {
        var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"))+1;
         
        switch (stepIndex) {
            case 3:
            case 12:
            case 23: 
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            default:
                $('#smartwizard2').smartWizard("next");
                $('#smartwizard').smartWizard("next");
                break;
        }
                         
    });

    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });
    
    
var words = 
['Liliopsida',
'multimedias',
'Afecciones',
'Descubiertos',
'Magnoliopsida',
'Coberturas vivas',
'Plantas',
'Cultivos',
'Maleza'];


var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');

//var puzzle = wordfind.newPuzzle(words, { height: 15, width: 15, fillBlanks: false });
//wordfind.print(puzzle);


$("#tryAgainPuzzle").click(function(){
gamePuzzle = wordfindgame.create(words, '#puzzle', '#words','#tiempoSL');        

//var puzzle = wordfind.newPuzzle(words, { height: 15, width: 15, fillBlanks: false });
//wordfind.print(puzzle);
});

$("#solvePuzzle").click(function () { wordfindgame.solve(gamePuzzle, words) });



    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        controlAudioSlides(stepIndex);
        switch(stepIndex) {
            case 1:
            case 2:
                case 3:
                    case 4:
                        case 5:              
                        case 6:
                            case 7:
                                case 8:
                                    case 9:
                                        case 10:
                                            case 11:
                                                $(`.menu_actividades`).removeClass("active_actividad");
                                                $(`#menu_actividad1`).addClass("active_actividad");
                                                break;
                                                case 12:
                                                    case 13:
                                                        case 14:
                        case 15:
                            case 16:                              
                            case 17:                
            case 18:                
            case 19:      
            case 20:                
            case 21:                
            case 22:                
            $(`.menu_actividades`).removeClass("active_actividad");
            $(`#menu_actividad2`).addClass("active_actividad");
            break;
            case 23:                
            case 24:                
            case 25:                          
            case 26:                
            case 27:                
            case 28:                
            case 29:                
            case 30:               
            case 31: 
            case 32:                
            case 33:                
            case 34:                
            case 35: 
            $(`.menu_actividades`).removeClass("active_actividad");
            $(`#menu_actividad3`).addClass("active_actividad");
            break;
            default:
                break;
        }
    });

    

    customUnitReady();
});
placa_alterna();
//imagen con opciones
function placa_alterna() {
    var canvas = new fabric.Canvas('placa_alterna');
    var imgElement1 = 'assets/img_3/cb1-0.png';
    var imgElement2 = 'assets/img_3/cb1-0.png'; 
    var imgElement3 = 'assets/img_3/cb1-0.png';
    var imgElement4 = 'assets/img_3/cb1-0.png';
    var imgElement5 = 'assets/img_3/cb1-0.png';
    var imgElement6 = 'assets/img_3/cb1-0.png';
    var imgElement7 = 'assets/img_3/cb1-0.png';
    var imgElement8 = 'assets/img_3/cb1-0.png';
    var imgElement9 = 'assets/img_3/cb1-0.png';
    var imgElement10 = 'assets/img_3/cb1-0.png'; 
    var imgElement11 = 'assets/img_3/cb1-0.png';
    var imgElement12 = 'assets/img_3/cb1-0.png';
    var imgElement13 = 'assets/img_3/cb1-0.png';
    var imgElement14 = 'assets/img_3/cb1-0.png';
    var imgElement15 = 'assets/img_3/cb1-0.png';
    var imgElement16 = 'assets/img_3/cb1-0.png';
    var imgElement17 = 'assets/img_3/cb1-0.png';
    var imgElement18 = 'assets/img_3/cb1-0.png';
    var imgElement19 = 'assets/img_3/cb1-0.png';
    var imgElement20 = 'assets/img_3/cb1-0.png';
    var imgElement21 = 'assets/img_3/cb1-0.png';
    var imgElement22 = 'assets/img_3/cb1-0.png';
    var imgElement23 = 'assets/img_3/cb1-0.png';
    fabric.Image.fromURL(imgElement1, function(oImg) {
        oImg.left=140;
        oImg.top=20;
        oImg.scaleToHeight(30);
        oImg.scaleToWidth(30);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_1").collapse("show");
            canvasAudio(1);           
        });

    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=140;
        oImg2.top=50;
        oImg2.scaleToHeight(30);
        oImg2.scaleToWidth(30);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_2").collapse("show");
            canvasAudio(2);             
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=30;
        oImg3.top=65;
        oImg3.scaleToHeight(30);
        oImg3.scaleToWidth(30);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_3").collapse("show");
            canvasAudio(3);             
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg4) {
        oImg4.left=110;
        oImg4.top=65;
        oImg4.scaleToHeight(30);
        oImg4.scaleToWidth(30);
        oImg4.selectable = false;
        canvas.add(oImg4);

        oImg4.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_4").collapse("show");
            canvasAudio(4);             
        });
    });
    fabric.Image.fromURL(imgElement5, function(oImg5) {
        oImg5.left=230;
        oImg5.top=65;
        oImg5.scaleToHeight(30);
        oImg5.scaleToWidth(30);
        oImg5.selectable = false;
        canvas.add(oImg5);

        oImg5.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_5").collapse("show"); 
            canvasAudio(5);           
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg6) {
        oImg6.left=30;
        oImg6.top=90;
        oImg6.scaleToHeight(30);
        oImg6.scaleToWidth(30);
        oImg6.selectable = false;
        canvas.add(oImg6);

        oImg6.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_6").collapse("show");
            canvasAudio(6);            
        });
    });
    fabric.Image.fromURL(imgElement7, function(oImg7) {
        oImg7.left=120;
        oImg7.top=90;
        oImg7.scaleToHeight(30);
        oImg7.scaleToWidth(30);
        oImg7.selectable = false;
        canvas.add(oImg7);

        oImg7.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_7").collapse("show");
            canvasAudio(7);            
        });
    });
    fabric.Image.fromURL(imgElement8, function(oImg8) {
        oImg8.left=220;
        oImg8.top=90;
        oImg8.scaleToHeight(30);
        oImg8.scaleToWidth(30);
        oImg8.selectable = false;
        canvas.add(oImg8);

        oImg8.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_8").collapse("show"); 
            canvasAudio(8);           
        });
    });
    fabric.Image.fromURL(imgElement9, function(oImg9) {
        oImg9.left=30;
        oImg9.top=115;
        oImg9.scaleToHeight(30);
        oImg9.scaleToWidth(30);
        oImg9.selectable = false;
        canvas.add(oImg9);

        oImg9.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_9").collapse("show");
            canvasAudio(9);            
        });
    });
    
    fabric.Image.fromURL(imgElement10, function(oImg10) {
        oImg10.left=80;
        oImg10.top=115;
        oImg10.scaleToHeight(30);
        oImg10.scaleToWidth(30);
        oImg10.selectable = false;
        canvas.add(oImg10);

        oImg10.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_10").collapse("show");
            canvasAudio(10);            
        });
    });
    fabric.Image.fromURL(imgElement11, function(oImg11) {
        oImg11.left=130;
        oImg11.top=115;
        oImg11.scaleToHeight(30);
        oImg11.scaleToWidth(30);
        oImg11.selectable = false;
        canvas.add(oImg11);

        oImg11.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_11").collapse("show");
            canvasAudio(11);            
        });
    });
    fabric.Image.fromURL(imgElement12, function(oImg12) {
        oImg12.left=220;
        oImg12.top=115;
        oImg12.scaleToHeight(30);
        oImg12.scaleToWidth(30);
        oImg12.selectable = false;
        canvas.add(oImg12);

        oImg12.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_12").collapse("show"); 
            canvasAudio(12);           
        });
    });
    fabric.Image.fromURL(imgElement13, function(oImg13) {
        oImg13.left=50;
        oImg13.top=140;
        oImg13.scaleToHeight(30);
        oImg13.scaleToWidth(30);
        oImg13.selectable = false;
        canvas.add(oImg13);

        oImg13.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_13").collapse("show");
            canvasAudio(13);            
        });
    });
    fabric.Image.fromURL(imgElement14, function(oImg14) {
        oImg14.left=130;
        oImg14.top=140;
        oImg14.scaleToHeight(30);
        oImg14.scaleToWidth(30);
        oImg14.selectable = false;
        canvas.add(oImg14);

        oImg14.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_14").collapse("show");
            canvasAudio(14);            
        });
    });
    fabric.Image.fromURL(imgElement15, function(oImg15) {
        oImg15.left=220;
        oImg15.top=140;
        oImg15.scaleToHeight(30);
        oImg15.scaleToWidth(30);
        oImg15.selectable = false;
        canvas.add(oImg15);

        oImg15.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_15").collapse("show");
            canvasAudio(15);            
        });
    });
    fabric.Image.fromURL(imgElement16, function(oImg16) {
        oImg16.left=30;
        oImg16.top=165;
        oImg16.scaleToHeight(30);
        oImg16.scaleToWidth(30);
        oImg16.selectable = false;
        canvas.add(oImg16);

        oImg16.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_16").collapse("show");
            canvasAudio(16);            
        });
    });
    fabric.Image.fromURL(imgElement17, function(oImg17) {
        oImg17.left=90;
        oImg17.top=165;
        oImg17.scaleToHeight(30);
        oImg17.scaleToWidth(30);
        oImg17.selectable = false;
        canvas.add(oImg17);

        oImg17.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_17").collapse("show"); 
            canvasAudio(17);           
        });
    });
    fabric.Image.fromURL(imgElement18, function(oImg18) {
        oImg18.left=150;
        oImg18.top=165;
        oImg18.scaleToHeight(30);
        oImg18.scaleToWidth(30);
        oImg18.selectable = false;
        canvas.add(oImg18);

        oImg18.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_18").collapse("show");
            canvasAudio(18);            
        });
    });
    fabric.Image.fromURL(imgElement19, function(oImg19) {
        oImg19.left=220;
        oImg19.top=165;
        oImg19.scaleToHeight(30);
        oImg19.scaleToWidth(30);
        oImg19.selectable = false;
        canvas.add(oImg19);

        oImg19.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_19").collapse("show"); 
            canvasAudio(19);           
        });
    });
    fabric.Image.fromURL(imgElement20, function(oImg20) {
        oImg20.left=90;
        oImg20.top=190;
        oImg20.scaleToHeight(30);
        oImg20.scaleToWidth(30);
        oImg20.selectable = false;
        canvas.add(oImg20);

        oImg20.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_20").collapse("show"); 
            canvasAudio(20);           
        });
    });
    fabric.Image.fromURL(imgElement21, function(oImg21) {
        oImg21.left=145;
        oImg21.top=190;
        oImg21.scaleToHeight(30);
        oImg21.scaleToWidth(30);
        oImg21.selectable = false;
        canvas.add(oImg21);

        oImg21.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_21").collapse("show");
            canvasAudio(21);            
        });
    });
    fabric.Image.fromURL(imgElement22, function(oImg22) {
        oImg22.left=220;
        oImg22.top=190;
        oImg22.scaleToHeight(30);
        oImg22.scaleToWidth(30);
        oImg22.selectable = false;
        canvas.add(oImg22);

        oImg22.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_22").collapse("show");
            canvasAudio(22);            
        });
    });
    fabric.Image.fromURL(imgElement23, function(oImg23) {
        oImg23.left=135;
        oImg23.top=215;
        oImg23.scaleToHeight(30);
        oImg23.scaleToWidth(30);
        oImg23.selectable = false;
        canvas.add(oImg23);

        oImg23.on('mouseup', function() {
            console.log('selected a circle');  
            $("#modal_placa_23").collapse("show"); 
            canvasAudio(23);           
        });
    });

}


/**
 * Función juego falso verdadero
 */

function iniciarJuegofv() {
    
    $(".actividadtruefalse label").checkbox({
          checked: "assets/img_3/cb2-1.png",
          check: "assets/img_3/cb2-0.png",
          onChange: function(i) {
                switch (i[0].name) {
                  case "r1":
                    if (i[0].value==="1") {
                        arraytruefalse[0]=true;
                    } else {
                        arraytruefalse[0]=false;
                    }
                    break;
                  case "r2":
                    if (i[0].value==="0") {
                        arraytruefalse[1]=true;
                    } else {
                        arraytruefalse[1]=false;
                    }
                    break;
                  case "r3":
                    if (i[0].value==="1") {
                        arraytruefalse[2]=true;
                    } else {
                        arraytruefalse[2]=false;
                    }
                    break;                   
                  default:
                    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                    break;
                }
          },
          onLoad: function(i) {
            // do something
          }
        });
        
}
$('#validarjuego3').off('click').on('click', function(){
    if (intentosJuego > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        );
        intentosJuego = 0;
        goToActivities();
    } else {
        console.log(arraytruefalse);
        if (arraytruefalse.indexOf(false) != -1) {
            Swal.fire(
                '¡Respuesta Invalida!',
                '',
                'error'
            )  
            intentosJuego++;
        }else{
            Swal.fire(
                '¡Felicidades!',
                '¡Has acertado!',
                'success'
            )    
        }
    }
    
    if(intentosJuego >= 2){
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        );
        intentosJuego = 0;
        goToActivities();   
    }
});
// temporizador
function updateClock()
	{
	sec_num=segundosInicial;
	   
		var hours   = Math.floor(sec_num / 3600);
		if (hours>99) {
			// 99 horas es el maximo
			hours=0;
			segundosInicial=0;
			sec_num=segundosInicial;
			}
		var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		var seconds = sec_num - (hours * 3600) - (minutes * 60);

		if (hours   < 10) {hours   = "0"+hours;}
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}
		var time    = hours+':'+minutes+':'+seconds;


	 $("#tiempoSL").text(time);
	segundosTiempo=time;
	segundosInicial++;
	};

    // Juego Palabra
    function iniciarJuegoPalabra() {
    
        $(".actividadPalabra").change(function() {
            switch ($(this).attr("name")) {
                case "r1":
                if ($(this).val().toLowerCase()==="Normatividad vigente".toLowerCase()) {                        
                    arrayPalabra[0]=true;
                } else {
                    arrayPalabra[0]=false;
                }
                break;
                case "r2":
                if ($(this).val().toLowerCase()==="Aplicación en campo".toLowerCase()) {                        
                    arrayPalabra[1]=true;
                } else {
                    arrayPalabra[1]=false;
                }
                break;
                case "r3":
                if ($(this).val().toLowerCase()==="Trampas de colores".toLowerCase()) {                        
                    arrayPalabra[2]=true;
                } else {
                    arrayPalabra[2]=false;
                }
                break;                   
                default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
        });
            
    }
    // Juego seleccion muliple
    var intentosJuego=0;
    
    
$('#validarjuego4').off('click').on('click', function(){
    if (intentosJuego > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        )
         
    } else {
        var arrayx=$(".juegoact4").val();
        var arraynum=arrayx.map(function (x) { 
            return parseInt(x, 10); 
          });
        
        let total = arraynum.reduce((a, b) => a + b, 0);
        console.log(total)
        if (total === 40) {
            Swal.fire(
                '¡Respuesta Invalida!',
                'Selecciona unicamente lo correcto',
                'error'
            )  
            intentosJuego++;
        }else{
            if (arrayx.length === 5) {
                Swal.fire(
                    '¡Has acertado!',
                    'Continua con la Siguiente actividad',
                    'success'
                ) 
            }else{
                Swal.fire(
                    '¡Selecciona los correctos!',
                    '',
                    'warning'
                    
                )  
                intentosJuego++;
            }    
        }
    }  
});

//  * Se inician las funciones particulares de cada unidad
//  */
function customUnitReady() {
    // transistorCanvas();
    
    $("select").imagepicker({
        show_label: true,
        clicked: function(e){
            console.log($(this).val());
        }
    })

    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
        onItemSwitch: function (currentItem,previousItem,index) {
            console.log(index);
        }
    });



};


    // Slide de conceptos
    $(".multimediasDiapositivaBtn").click(function () {
        
        $(".multimediasDiapositiva").hide();
        var commentNumber = $(this).attr("data-comentario");
        $("#multimediaDiapositiva").show();
        $("#multimediaDiapositiva_" + commentNumber).show();
        audiomadurezesDiapositiva(commentNumber);

    });    
    // Slide de conceptos
    $(".busquedasDiapositivaBtn").click(function () {
        
        $(".busquedasDiapositiva").hide();
        var commentNumber = $(this).attr("data-comentario");
        $("#busquedaDiapositiva").show();
        $("#busquedaDiapositiva_" + commentNumber).show();
        audiobusquedaDiapositiva(commentNumber);

    }); 



var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


// tabs
$(".tablinks").click(function(){
    var idTabs = $(this).parent().parent().parent().attr("id");        

    $(`#${idTabs}>div>.tabs>button`).removeClass("active");
    $(`#${idTabs}>div>.wrapper_tabcontent>div`).removeClass("active");
    
    $(this).addClass("active");
    $(`#${$(this).attr("data-country")}`).addClass("active");

    audioTabs($(this).attr("data-country"));
});

/**
 * Configuración del canvas
 * @param {La inicialización del canvas, ésta debe llevar el id} canvas 
 * @param {El evento fabric que permite adicionar imágenes nuevas al canvas} fabric 
 * @param {La dirección de la imagen que se quiere adicionar} pathImage 
 * @param {La posición de la imagen (left, top)} position 
 * @param {Tamaño de la imagen dentro del canvas (height, width)} size 
 * @param {Lo que se quiere que haga una vez se de clic sobre la imagen} eventFunction 
 */
function configureCanvas(canvas, fabric, pathImage, position, size, eventFunction) {
    fabric.Image.fromURL(pathImage, function(oImg){
        oImg.left = position[0];
        oImg.top = position[1];
        oImg.scaleToHeight(size[0]);
        oImg.scaleToWidth(size[1]);
        oImg.selectable = false;
        canvas.add(oImg);
        
        oImg.on('mouseup', function() {
            eventFunction();
        });
    });    

}


// Multimodal
(function($, window) {
    'use strict';

    var MultiModal = function(element) {
        this.$element = $(element);
        this.modalCount = 0;
    };

    MultiModal.BASE_ZINDEX = 1040;

    MultiModal.prototype.show = function(target) {
        var that = this;
        var $target = $(target);
        var modalIndex = that.modalCount++;

        $target.css('z-index', MultiModal.BASE_ZINDEX + (modalIndex * 20) + 10);

        // Bootstrap triggers the show event at the beginning of the show function and before
        // the modal backdrop element has been created. The timeout here allows the modal
        // show function to complete, after which the modal backdrop will have been created
        // and appended to the DOM.
        window.setTimeout(function() {
            // we only want one backdrop; hide any extras
            if(modalIndex > 0)
                $('.modal-backdrop').not(':first').addClass('hidden');

            that.adjustBackdrop();
        });
    };

    MultiModal.prototype.hidden = function(target) {
        this.modalCount--;

        if(this.modalCount) {
           this.adjustBackdrop();

            // bootstrap removes the modal-open class when a modal is closed; add it back
            $('body').addClass('modal-open');
        }
    };

    MultiModal.prototype.adjustBackdrop = function() {
        var modalIndex = this.modalCount - 1;
        $('.modal-backdrop:first').css('z-index', MultiModal.BASE_ZINDEX + (modalIndex * 20));
    };


    function Plugin(method, target) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('multi-modal-plugin');

            if(!data)
                $this.data('multi-modal-plugin', (data = new MultiModal(this)));

            if(method)
                data[method](target);
        });
    }

    $.fn.multiModal = Plugin;
    $.fn.multiModal.Constructor = MultiModal;

    $(document).on('show.bs.modal', function(e) {
        $(document).multiModal('show', e.target);
    });

    $(document).on('hidden.bs.modal', function(e) {
        $(document).multiModal('hidden', e.target);
    });
}(jQuery, window));


function goToActivities(){
    pause_audio();
    $(".divcontenido").animate({ width: 'hide' }); 
    $(".menu-actividades").show(1000); 
    setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
    $(".controls-slide").hide();
}