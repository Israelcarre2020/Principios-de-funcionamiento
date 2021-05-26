var audioActivo = true;
var audioActual;

function cierreActividades() {

    $(".menu-actividades").hide();
    setTimeout(function () { toggleOptions('.selector'); }, 10);
    $(".divcontenido").animate({ width: 'show' });
}

/**
 * por sí en algún momento se necesita saber el slide actual del smart wizard
 */
function onLoadAudio() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlAudioSlides(stepIndex);
}

function controlAudioSlides(numeroSlide) {

    if(audioActual)
        audioActual.pause();

    switch (numeroSlide) {
        case 1:
         
            audioActual = new Audio('assets/voz/U02P04001.mp3');
            break;
        case 2:
            $(`#tabsObjetivos>div>.tabs>button`).removeClass("active");
            $(`#tabsObjetivos>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");         
            
            audioActual = new Audio('assets/voz/U02P04003.mp3');
            break;            
        // case 3:
        //     $(`#tabsAprenderas>div>.tabs>button`).removeClass("active");
        //     $(`#tabsAprenderas>div>.wrapper_tabcontent>div`).removeClass("active");
        //     $("#tabUnidad_aprenderas").addClass("active");
        //     $(`#unidad_aprenderas`).addClass("active");         

        //     audioActual = new Audio('assets/voz/U04D005.mp3');
        //     break;            
        case 3:
            $('#carouselActividadAprendizaje1').carousel(0);
            audioActual = new Audio('assets/voz/U02P04007.mp3');
            break;   
        case 4:
            $('#carouselTiposEquipos').carousel(0);
            audioActual = new Audio('assets/voz/U02P04012.mp3');
            break;
        case 5:
            audioActual = new Audio('assets/voz/U02P04042.mp3');
            break;   
        case 6:
            $('#carouselFuentes').carousel(0);
            audioActual = new Audio('assets/voz/U02P04043.mp3');
            break;
        case 7:
            audioActual = new Audio('assets/voz/U02P04055.mp3');
            break;
        case 8:
            audioActual = new Audio('assets/voz/U02P04056.mp3');
            break;  
        case 9:
            $('#carouselVariadores').carousel(0);
            audioActual = new Audio('assets/voz/U02P04057.mp3');
            break;
        case 10:
            audioActual = new Audio('assets/voz/U02P04060.mp3');
            break;
        case 11:
            cierreActividades();
            audioActual = new Audio('assets/voz/U02P04061.mp3');
            break; 
        case 12:
            cierreActividades();
            $('#carouselActividadAprendizaje2').carousel(0);
            audioActual = new Audio('assets/voz/U02P04062.mp3');
            break;
        case 13:
            
            audioActual = new Audio('assets/voz/U02P04065.mp3');
            break;
        case 14:
            $(".multimediasDiapositiva").hide();
            $("#multimediaDiapositiva_0").show();
            audioActual = new Audio('assets/voz/U02P04066.mp3');
            break;
        case 15:
            audioActual = new Audio('assets/voz/U02P04081.mp3');
            break;
        case 16:
            audioActual = new Audio('assets/voz/U02P04090.mp3');
            break;
        case 17:
            audioActual = new Audio('assets/voz/U02P04090.mp3');
            break;
        case 18:
            audioActual = new Audio('assets/voz/U02P04092.mp3');
            break;
        case 19:
            audioActual = new Audio('assets/voz/U02P04093.mp3');
            break;
        case 20:
            audioActual = new Audio('assets/voz/U02P04102.mp3');
            break;
        case 21:
            $('#carouselReles').carousel(1);
            audioActual = new Audio('assets/voz/U02P04121.mp3');
            break;
        case 22:
            audioActual = new Audio('assets/voz/U02P04142.mp3');
            break;
        case 23:
            $('#carouselActividadAprendizaje3').carousel(0);
            audioActual = new Audio('assets/voz/U02P04143.mp3');
            break; 

        case 24:
            $('#carouselMotores').carousel(0);
            audioActual = new Audio('assets/voz/U02P04146.mp3');
            break;
        case 25:
            $('#carouselMotoresAlterna').carousel(0);
            audioActual = new Audio('assets/voz/U02P04153.mp3');
            break;
        case 26:
            $('#carouselMotoresAlterna').carousel(0);
            audioActual = new Audio('assets/voz/U02P04156.mp3');
            break;
        case 27:
            $('#carouselVariacion').carousel(0);
            audioActual = new Audio('assets/voz/U02P04157.mp3');
            break;
        case 28:
            audioActual = new Audio('assets/voz/U02P04159.mp3');
            break;
        case 29:
            $('.collapse').removeClass('show');
            audioActual = new Audio('assets/voz/U02P04189.mp3');
            break;
        case 30:
            audioActual = new Audio('assets/voz/U02P04197.mp3');
            break;
        case 31:
            audioActual = new Audio('assets/voz/U02P04198.mp3');
            break;   
        case 32:
            $('#carouselFundamentos').carousel(0);
            audioActual = new Audio('assets/voz/U02P04199.mp3');
            break; 
        case 33:
            audioActual = new Audio('assets/voz/U02P04202.mp3');
            break; 
        case 34:
            audioActual = new Audio('assets/voz/U02P04203.mp3');
            break;                
        default:
            audioActual = undefined;
            break;
    }
    
    if(!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();        
    }

    if(audioActual){
        audioActual.play();
    }

}

$("#audioActivo").click(function() { 
    audioActivoFuncion();
});

function audioActivoFuncion() {
    audioActivo = !audioActivo;
    
    if(!audioActivo) {
        $("#iconoAudioActivo").hide();
        $("#iconoAudioInactivo").show();
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        if (audioActual)
        audioActual.pause();          
    } else {
        $("#iconoAudioInactivo").hide();        
        $("#iconoAudioActivo").show();
        $("#pauseAudio").show();
        $("#resumeAudio").hide();
        if (audioActual)
        audioActual.play();  
    }
}

function pause_audio() {
    if(audioActual)
        audioActual.pause();
}

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#resumeAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.play();       

    $("#resumeAudio").hide();
    $("#pauseAudio").show();
});

function reproducirAudio(audioLocation) {
    if (audioActual)
        audioActual.pause();    

    audioActual = new Audio(audioLocation);      

    if (!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();
    }

    if (audioActual)
        audioActual.play();    
}

$('.modal').on('hidden.bs.modal', function (e) {
    if (audioActual)
        audioActual.pause();    
});

/**
 * Configuraciones personalizadas para tabs de audio
 */
function funcionamientodemotores(opcion){
    var audioLocation;
    switch (opcion) {
        case 'Usos':
            $('#carouselSiemens1').carousel(0);
            audioLocation = 'assets/voz/U02P04190.mp3';
            break;
        case 'Ejemplo':
            $('#carouselSiemens2').carousel(0);
            audioLocation = 'assets/voz/U02P04193.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function canvasAudio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U02P04160.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04162.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U02P04164.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U02P04166.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U02P04168.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U02P04170.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U02P04171.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U02P04172.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U02P04173.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U02P04174.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U02P04175.mp3';
            break;
        case 12:
            audioLocation = 'assets/voz/U02P04176.mp3';
            break;
        case 13:
            audioLocation = 'assets/voz/U02P04177.mp3';
            break;
        case 14:
            audioLocation = 'assets/voz/U02P04178.mp3';
            break;
        case 15:
            audioLocation = 'assets/voz/U02P04179.mp3';
            break;
        case 16:
            audioLocation = 'assets/voz/U02P04180.mp3';
            break;
        case 17:
            audioLocation = 'assets/voz/U02P04181.mp3';
            break;
        case 18:
            audioLocation = 'assets/voz/U02P04182.mp3';
            break;
        case 19:
            audioLocation = 'assets/voz/U02P04183.mp3';
            break;
        case 20:
            audioLocation = 'assets/voz/U02P04184.mp3';
            break;
        case 21:
            audioLocation = 'assets/voz/U02P04185.mp3';
            break;
        case 22:
            audioLocation = 'assets/voz/U02P04186.mp3';
            break;
        case 23:
            audioLocation = 'assets/voz/U02P04187.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function PrincipioMotores(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U02P04148.mp3';
            break;
        case 2:
            $('#carouselPasos').carousel(0);
            audioLocation = 'assets/voz/U02P04150.mp3';
            break;
        case 3:
            audioLocation = '';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function HerramientasAudio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U02P04103.mp3';
            break;
        case 2:
            $('#carouselPasos').carousel(0);
            audioLocation = 'assets/voz/U02P04105.mp3';
            break;
        case 3:
            $('#carouselAplicaciones').carousel(0);
            $('#carouselEntornos').carousel(0);
            audioLocation = 'assets/voz/U02P04109.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function Manejodeherramientas(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U02P04094.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04096.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U02P04098.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U02P04100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audiobusquedaDiapositiva(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            $('#carouselBusqueda').carousel(0);
            audioLocation = 'assets/voz/U02P04082.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04086.mp3';
            $('#carouselTipos').carousel(0);
            break;
        case 3:
            audioLocation = 'assets/voz/U02P04075.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U02P04077.mp3';
            $('#carouselContexto').carousel(0);
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audiomadurezesDiapositiva(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U02P04067.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04069.mp3';
            $('#carouselImportancia').carousel(1);
            break;
        case 3:
            audioLocation = 'assets/voz/U02P04075.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U02P04077.mp3';
            $('#carouselContexto').carousel(0);
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
} 

 function targetas2(opcion){
     var audioLocation;

     switch (parseInt(opcion)) {
         case 1:
             audioLocation = 'assets/voz/U02P04029.mp3';
             break;
         case 2:
             audioLocation = 'assets/voz/U02P04031.mp3';
             break;
         case 3:
             audioLocation = 'assets/voz/U02P04034.mp3';
             break;
         case 4:
             audioLocation = 'assets/voz/U02P04036.mp3';
             break;
         case 5:
             audioLocation = 'assets/voz/U02P04039.mp3';
             break;
        case 6:
            audioLocation = '';
            break;
         default:
             break;
     }

     reproducirAudio(audioLocation);
 }

function modal_TiposEquiposAudio(opcion){
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U02P04028.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function targetas(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U02P04014.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04016.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U02P04018.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U02P04020.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U02P04022.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U02P04024.mp3';
            break;
        case 7:
            audioLocation = '';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioConceptos(numeroTab) {

    var audioLocation;

    switch (parseInt(numeroTab)) {
        case 1:
            audioLocation = 'assets/voz/U04D011.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D012.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D013.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D014.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D015.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U04D016.mp3';
            break;
        case 7:
            $('#carouselConceptos').carousel(0);
            audioLocation = 'assets/voz/U04D017.mp3';
            break;
        case 8:
            $('#carouselConceptos_2').carousel(0);
            audioLocation = 'assets/voz/U04D024.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

/**
 * Esta función se llama desde contenido.html, ya que de acuerdo al botón seleccionado
 * se abre un modal. Estos audios corresponden a esos casos específicos:
 */
function audioAfecciones(tipo){
    var audioLocation;

    switch (tipo) {        
        case 'Queson':
            audioLocation = 'assets/voz/U02P04124.mp3';
            break;
        case 'consiste':
            audioLocation = 'assets/voz/U02P04126.mp3';
            break;
        case 'funciona':                
            audioLocation = 'assets/voz/U02P04128.mp3';
            break;
        case 'cuenta':            
            audioLocation = 'assets/voz/U02P04130.mp3';
            break;
        case 'Usos':            
            audioLocation = 'assets/voz/U02P04135.mp3';
            break;
        case 'Ejemplo':            
            audioLocation = 'assets/voz/U02P04137.mp3';
            break;
        case 'Diseños':            
            audioLocation = 'assets/voz/U02P04139.mp3';
            break;
        default:
            break;
    }
    
    reproducirAudio(audioLocation);
}

function audioComentariosFrecuencia(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D055.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D056.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D057.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D058.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D059.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U04D060.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U04D061.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioCollapsePuntos(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U04D070.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D072.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D075.mp3';
            break;
        default:
            break;
    }         
    
    reproducirAudio(audioLocation);
}

function audioImagenesCA(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D078.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D079.mp3';
            break;
        case 3:
            $("#carouselFrecuencia_2").carousel(0)
            audioLocation = 'assets/voz/U04D080.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D083.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D084.mp3';
            break;            
        case 6:
            audioLocation = 'assets/voz/U04D085.mp3';
            break;            
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTransformadoresTab(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D086 FUNCION 1.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D087.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U04D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTiposLinea(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D090.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D091.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U04D092.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTiposCorriente(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D094.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D095.mp3';
            break;
        case 3:            
            $("#carouselTipoCorriente").carousel(0);
            audioLocation = 'assets/voz/U04D096.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTiposConexiones(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D099.mp3';
            break;
        case 2:
            $("#carouselConexionDelta").carousel(0);
            audioLocation = 'assets/voz/U04D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioImanes(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D111.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D112.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U04D113.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U04D114.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U04D115.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U04D116.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U04D117.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U04D118.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U04D119.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U04D120.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioElectroImanesDiapositiva(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U04D132.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U04D133.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D134.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioElectroImanesTabs(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U04D135.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U04D136.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U04D137.mp3';
            break;
        case 4:
            $("#carouselFoucault").carousel(0);
            audioLocation = 'assets/voz/U04D138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTabs(opcion) {
    var audioLocation;

    switch (opcion) {
        case 'Objetivos':
            audioLocation = 'assets/voz/U02P04003.mp3';
            break;
        case 'Contenido':
            audioLocation = 'assets/voz/U02P04005.mp3';
            break;
        case 'Metodologia':
            audioLocation = 'assets/voz/U02P04006.mp3';
            break;
        case 'unidad_aprenderas':
            audioLocation = 'assets/voz/U02P0400.mp3';
            break;
        case 'unidad_necesitas':
            audioLocation = 'assets/voz/U04D006.mp3';
            break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
}

$('#carouselActividadAprendizaje1').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04007.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04008.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselActividadAprendizaje2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04062.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04063.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;       
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselActividadAprendizaje3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04143.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04144.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselTiposEquipos').on('slid.bs.carousel', function (){
    var numeroSlide = $('#carouselTiposEquipos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04012.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04027.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFuentes').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselFuentes>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04043.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04044.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04045.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U02P04046.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U02P04047.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U02P04048.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U02P04049.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U02P04050.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U02P04051.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U02P04052.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U02P04053.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselVariadores').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselVariadores>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04057.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04058.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04059.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselImportancia').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselImportancia>div>div.active').index();
    var audioLocation; 
    switch (numeroSlide) {
        case 0:
            audioLocation = '';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04069.mp3';
            break;        
        case 2:
            audioLocation = 'assets/voz/U02P04071.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U02P04072.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U02P04073.mp3';
            break;  
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselContexto').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselContexto>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04077.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04078.mp3';
            break;        
        case 2:
            audioLocation = '';
            break;        
        case 3:
            audioLocation = '';
            break;        

        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselBusqueda').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselBusqueda>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04082.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04083.mp3';
            break;        
        case 2:
            audioLocation = 'assets/voz/U02P04084.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselTipos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselTipos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04086.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04087.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04088.mp3';
            break;

        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselPasos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselPasos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04105.mp3'
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04106.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04107.mp3';
            break;

        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselAplicaciones').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselAplicaciones>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04109.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04110.mp3';
            break;
        case 2:
            
            audioLocation = 'assets/voz/U02P04111.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

// function activeentornos(opcion){
/*    var audioLocation2;
    switch (opcion) {
        case 0:
            audioLocation2 = 'assets/voz/U02P04111.mp3';
            break;
        case 1:
            audioLocation2 = 'assets/voz/U02P04112.mp3';
            break;
        case 2:
            audioLocation2 = 'assets/voz/U02P04113.mp3';
            break;
        case 3:
            audioLocation2 = 'assets/voz/U02P04114.mp3';
            break;
        case 4:
            audioLocation2 = 'assets/voz/U02P04115.mp3';
            break;
        case 5:
            audioLocation2 = 'assets/voz/U02P04116.mp3';
            break;
        case 6:
            audioLocation2 = 'assets/voz/U02P04117.mp3';
            break;
        case 7:
            audioLocation2 = 'assets/voz/U02P04118.mp3';
            break;
        case 8:
            audioLocation2 = 'assets/voz/U02P04119.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation2);*/
    
// }
$('#carouselEntornos').on('slid.bs.carousel', function (e) {

    var numeroSlide2 = $('#carouselEntornos>div>div.active').index();
    var audioLocation2;
    switch (numeroSlide2) {
        case 0:
            audioLocation2 = 'assets/voz/U02P04111.mp3';
            break;
        case 1:
            audioLocation2 = 'assets/voz/U02P04112.mp3';
            break;
        case 2:
            audioLocation2 = 'assets/voz/U02P04113.mp3';
            break;
        case 3:
            audioLocation2 = 'assets/voz/U02P04114.mp3';
            break;
        case 4:
            audioLocation2 = 'assets/voz/U02P04115.mp3';
            break;
        case 5:
            audioLocation2 = 'assets/voz/U02P04116.mp3';
            break;
        case 6:
            audioLocation2 = 'assets/voz/U02P04117.mp3';
            break;
        case 7:
            audioLocation2 = 'assets/voz/U02P04118.mp3';
            break;
        case 8:
            audioLocation2 = 'assets/voz/U02P04119.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation2);
    e.stopPropagation();
})

$('#carouselReles').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselReles>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04123.mp3';
            break;
        case 1:
            $('.collapse').removeClass('show');
            audioLocation = 'assets/voz/U02P04121.mp3';
            break;
        case 2:
            $('.collapse').removeClass('show');
            audioLocation = 'assets/voz/U02P04134.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselMotores').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselMotores>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04146.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04147.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselMotoresAlterna').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselMotoresAlterna>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04153.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04154.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04155.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselVariacion').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselVariacion>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04157.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04158.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselSiemens1').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselSiemens1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04190.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04191.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselSiemens2').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselSiemens2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04193.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04194.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U02P04195.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})

$('#carouselFundamentos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFundamentos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U02P04199.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U02P04200.mp3';
            break;
        default:
            break;
    }
    reproducirAudio(audioLocation);
})