

var intentosEmparejamiento1 = 0;

$(document).ready(function () { 
    
    $("#contentEmparejamiento1").append(`
        <div class="row">
            <div class="col-md-12" style="text-align: center">
                <br>
                <button onclick="validarResultado1()" class="btn btn-info font-weight-bold">Validar Ejercicio</button>
            </div>
        </div>
    `);
    init1();
});

function init2() {
 
    // Reset the game
    $('#cardPile1').html('');
    $('#cardSlots1').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = [   
                            'Electrónica digital',
                            'Electrónica análoga',
                            'Electrónica de comunicaciones',
                            'Instrumentación electrónica',
                            'Optoelectrónica',
                            'Electrónica de potencia'
                        ];
    var numbers = [1, 2, 3,4,5,6];
    numbers.sort(function () { return Math.random() - .5 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento1' + numbers[i]).appendTo('#cardPile1').draggable({
            containment: '#contentEmparejamiento1',
            stack: '#cardPile1 p',
            cursor: 'move',
            revert: false
        });
    }

    // Create the card slots
    var words = ['.1.', '.2.', '.3.','.4.', '.5.', '.6.'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%">' + words[i - 1] + '</p>').data('number', i).appendTo('#cardSlots1').droppable({
            accept: '#cardPile1 p',
            hoverClass: 'hovered',
            drop: handleCardDrop1,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });
    }
}

function init1() {
    intentosEmparejamiento1 = 0;
    // Reset the game
    $('#cardPile1').html('');
    $('#cardSlots1').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = [   
                            'Electrónica digital',
                            'Electrónica análoga',
                            'Electrónica de comunicaciones',
                            'Instrumentación electrónica',
                            'Optoelectrónica',
                            'Electrónica de potencia'
                        ];
    var numbers = [1, 2, 3,4,5,6];
    numbers.sort(function () { return Math.random() - .5 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento1' + numbers[i]).appendTo('#cardPile1').draggable({
            containment: '#contentEmparejamiento1',
            stack: '#cardPile1 p',
            cursor: 'move',
            revert: false
        });
    }

    // Create the card slots
    var words = ['.1.', '.2.', '.3.','.4.', '.5.', '.6.'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%">' + words[i - 1] + '</p>').data('number', i).appendTo('#cardSlots1').droppable({
            accept: '#cardPile1 p',
            hoverClass: 'hovered',
            drop: handleCardDrop1,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });
    }
}

function handleCardDrop1(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    ui.draggable.position({
        of: $(this), my: 'left top', at: 'left top'
    });

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui.draggable.addClass('correct');
        //ui.draggable.draggable('disable');
        //$(this).droppable('disable');

        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        //ui.draggable.draggable('option', 'revert', false);
    } else {
        ui.draggable.removeClass('correct');
    }
}

function validarResultado1(){

    var correctCards = $("#cardPile1>p.correct").length;

    if (correctCards === 6) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                init1();
            }
        })
    } else{
        intentosEmparejamiento1++;

        if(intentosEmparejamiento1 >= 2){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosEmparejamiento1 = 0;
            init1();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
            init2();
        }
    }
}