window.onload = function() {
    document.getElementById("grupoOpciones1").style.display = "none";
    document.getElementById("grupoOpciones2").style.display = "none";
    document.getElementById("grupoOpciones3").style.display = "none";

    document.getElementById("materia1").addEventListener("change", function() {
        toggleOpciones("materia1", "grupoOpciones1");
    });

    document.getElementById("materia2").addEventListener("change", function() {
        toggleOpciones("materia2", "grupoOpciones2");
    });

    document.getElementById("materia3").addEventListener("change", function() {
        toggleOpciones("materia3", "grupoOpciones3");
    });

    function toggleOpciones(selectId, opcionesId) {
        const materiaSeleccionada = document.getElementById(selectId).value;
        document.getElementById(opcionesId).style.display = materiaSeleccionada !== "opcion0" ? "flex" : "none";
    }
};$(document).ready(function() {
    $('#Datpersonales').click(function(e) {
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        $('#Seccionde-datos-personales').show();
        $('#Seccionde-seleccion').hide();
        $('#datos-confirmacion').hide();
        $('#Seccionde-seleccion-redes, #Seccionde-seleccion-multimedia, #Seccionde-seleccion-software').hide();
    });

    $('#ccióndemateria').click(function(e) {
        e.preventDefault();

        if (!validarFormulario()) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }

        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        $('#Seccionde-datos-personales').hide();
        $('#Seccionde-seleccion').fadeIn();
        $('#datos-confirmacion').hide();
        $('#Seccionde-seleccion-redes, #Seccionde-seleccion-multimedia, #Seccionde-seleccion-software').hide();

        var selectedValue = $('#selection').val();
        
        if (selectedValue === 'redes') {
            $('#Seccionde-seleccion-redes').show();
        } else if (selectedValue === 'multimedia') {
            $('#Seccionde-seleccion-multimedia').show();
        } else if (selectedValue === 'software') {
            $('#Seccionde-seleccion-software').show();
        }
    });

    // Manejar el clic en "Confirmación"
    $('a:contains("Confirmación")').click(function(e) {

        if (!validarFormulario()) {
            alert('Por favor, completa todos los campos requeridos.'); // Mensaje de advertencia
            return; // Salir de la función si hay campos vacíos
        }
        e.preventDefault();
        $('#Seccionde-datos-personales').hide();
        $('#Seccionde-seleccion').hide();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('#datos-confirmacion').show();
        $('#Seccionde-seleccion-redes, #Seccionde-seleccion-multimedia, #Seccionde-seleccion-software').hide();
    });

    // Opcional: Lógica para el botón "Limpiar"
    $('#btnLimpiar').click(function() {
        $('#inputNombre').val('');
        $('#inputProvincia').val('');
        $('#inputCiudad').val('');
        $('#inputSector').val('');
        $('#inputCalle').val('');
        $('#selection').val('opcion0'); 
    });

    
    $('#btnRegistrar').click(function(e) {
        e.preventDefault(); // Evitar la acción por defecto del botón
    
        if (!validarFormulario()) {
            alert('Por favor, completa todos los campos requeridos.'); // Mensaje de advertencia
            return; // Salir de la función si hay campos vacíos
        }
    
        $('.nav-link').removeClass('active'); 
        $('#ccióndemateria').addClass('active'); 
        $('#Seccionde-datos-personales').hide();
        $('#Seccionde-seleccion').fadeIn(); 
        $('#datos-confirmacion').hide(); // Asegúrate de ocultar la sección de confirmación
    
        $('#Seccionde-seleccion-redes, #Seccionde-seleccion-multimedia, #Seccionde-seleccion-software').hide();
    
        var selectedValue = $('#selection').val(); 
        var carrera;
        if (selectedValue === 'redes') {
            carrera = 'redes'; 
            $('#Seccionde-seleccion-redes').show();
        } else if (selectedValue === 'multimedia') {
            carrera = 'multimedia'; 
            $('#Seccionde-seleccion-multimedia').show();
        } else if (selectedValue === 'software') {
            carrera = 'software'; 
            $('#Seccionde-seleccion-software').show();
        }
    
        // Obtener los valores de los inputs
        var nombre = $('#inputNombre').val();
        var provincia = $('#inputProvincia').val();
        var ciudad = $('#inputCiudad').val();
        var sector = $('#inputSector').val();
        var calle = $('#inputCalle').val();
    
        $('#nombre').text(nombre);
        $('#provincia').text(provincia);
        $('#ciudad').text(ciudad);
        $('#sector').text(sector);
        $('#calle').text(calle);
        $('#carrera').text(carrera); 
    });
    
    function validarFormulario() {
        var esValido = true; 
    
        // Limpiar estilos previos
        $('input, select').css('border', '');
    
        // Validar cada campo
        if ($('#inputNombre').val() === '') {
            $('#inputNombre').css('border', '2px solid red');
            esValido = false; // Marcar como no válido
        }
        
        if ($('#inputProvincia').val() === '') {
            $('#inputProvincia').css('border', '2px solid red');
            esValido = false;
        }
        
        if ($('#inputCiudad').val() === '') {
            $('#inputCiudad').css('border', '2px solid red');
            esValido = false;
        }
        
        if ($('#inputSector').val() === '') {
            $('#inputSector').css('border', '2px solid red');
            esValido = false;
        }
        
        if ($('#inputCalle').val() === '') {
            $('#inputCalle').css('border', '2px solid red');
            esValido = false;
        }
    
        if ($('#selection').val() === 'opcion0') {
            $('#selection').css('border', '2px solid red'); // Resaltar si es la opción por defecto
            esValido = false;
        }
    
        return esValido;
    }
    
    
// Maneja el evento de clic en el botón "Aceptar"
$('#btnAceptar').on('click', function() {
    $('#Seccionde-datos-personales').hide(); 
    $('#Seccionde-seleccion').hide(); 
    $('.nav-link').removeClass('active'); // Desactivar otros enlaces
    $('a:contains("Confirmación")').addClass('active'); // Activar "Confirmación"
    $('#datos-confirmacion').show();
    $('#Seccionde-seleccion-redes, #Seccionde-seleccion-multimedia, #Seccionde-seleccion-software').hide();

    $('#materia-1-opcion1, #materia-1-opcion2, #materia-1-opcion3').text('');
    $('#materia-2-opcion1, #materia-2-opcion2, #materia-2-opcion3').text('');
    $('#materia-3-opcion1, #materia-3-opcion2, #materia-3-opcion3').text('');

  
  
    const seleccion1 = $('input[name="grupo1"]:checked').val();
    const seleccion2 = $('input[name="grupo2"]:checked').val();
    const seleccion3 = $('input[name="grupo3"]:checked').val();
    const seleccion4 = $('input[name="grupo4"]:checked').val();
    const seleccion5 = $('input[name="grupo5"]:checked').val();


    
    if (seleccion1) {
        switch (seleccion1) {
            case 'opcion1':
                $('#materia-1-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-1-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-1-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion2) {
        switch (seleccion2) {
            case 'opcion1':
                $('#materia-2-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-2-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-2-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion3) {
        switch (seleccion3) {
            case 'opcion1':
                $('#materia-3-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-3-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-3-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion4) {
        switch (seleccion4) {
            case 'opcion1':
                $('#materia-4-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-4-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-4-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion5) {
        switch (seleccion5) {
            case 'opcion1':
                $('#materia-5-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-5-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-5-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }


    if (!seleccion1 && !seleccion2 && !seleccion3) {
        alert('No se ha seleccionado ninguna opción.');
    }
});


$('#btnAceptar2').on('click', function() {
    $('#Seccionde-datos-personales').hide(); 
    $('#Seccionde-seleccion').hide(); 
    $('.nav-link').removeClass('active'); // Desactivar otros enlaces
    $('a:contains("Confirmación")').addClass('active'); // Activar "Confirmación"
    $('#datos-confirmacion').show();
    $('#Seccionde-seleccion-redes, #Seccionde-seleccion-multimedia, #Seccionde-seleccion-software').hide();

    $('#materia-1-opcion1, #materia-1-opcion2, #materia-1-opcion3').text('');
    $('#materia-2-opcion1, #materia-2-opcion2, #materia-2-opcion3').text('');
    $('#materia-3-opcion1, #materia-3-opcion2, #materia-3-opcion3').text('');

   
  
    const seleccion1 = $('input[name="grupo1"]:checked').val();
    const seleccion2 = $('input[name="grupo2"]:checked').val();
    const seleccion3 = $('input[name="grupo3"]:checked').val();
    const seleccion4 = $('input[name="grupo4"]:checked').val();
    const seleccion5 = $('input[name="grupo5"]:checked').val();


    
    if (seleccion1) {
        switch (seleccion1) {
            case 'opcion1':
                $('#materia-1-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-1-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-1-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion2) {
        switch (seleccion2) {
            case 'opcion1':
                $('#materia-2-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-2-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-2-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion3) {
        switch (seleccion3) {
            case 'opcion1':
                $('#materia-3-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-3-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-3-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion4) {
        switch (seleccion4) {
            case 'opcion1':
                $('#materia-4-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-4-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-4-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion5) {
        switch (seleccion5) {
            case 'opcion1':
                $('#materia-5-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-5-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-5-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }



    if (!seleccion1 && !seleccion2 && !seleccion3) {
        alert('No se ha seleccionado ninguna opción.');
    }
});


$('#btnAceptar3').on('click', function() {
   
    $('#Seccionde-datos-personales').hide(); 
    $('#Seccionde-seleccion').hide(); 
    $('.nav-link').removeClass('active'); // Desactivar otros enlaces
    $('a:contains("Confirmación")').addClass('active'); // Activar "Confirmación"
    $('#datos-confirmacion').show();
    $('#Seccionde-seleccion-redes, #Seccionde-seleccion-multimedia, #Seccionde-seleccion-software').hide();


    $('#materia-1-opcion1, #materia-1-opcion2, #materia-1-opcion3').text('');
    $('#materia-2-opcion1, #materia-2-opcion2, #materia-2-opcion3').text('');
    $('#materia-3-opcion1, #materia-3-opcion2, #materia-3-opcion3').text('');

  
    const seleccion1 = $('input[name="grupo1"]:checked').val();
    const seleccion2 = $('input[name="grupo2"]:checked').val();
    const seleccion3 = $('input[name="grupo3"]:checked').val();
    const seleccion4 = $('input[name="grupo4"]:checked').val();
    const seleccion5 = $('input[name="grupo5"]:checked').val();


    
    if (seleccion1) {
        switch (seleccion1) {
            case 'opcion1':
                $('#materia-1-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-1-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-1-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion2) {
        switch (seleccion2) {
            case 'opcion1':
                $('#materia-2-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-2-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-2-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion3) {
        switch (seleccion3) {
            case 'opcion1':
                $('#materia-3-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-3-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-3-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion4) {
        switch (seleccion4) {
            case 'opcion1':
                $('#materia-4-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-4-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-4-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }

    if (seleccion5) {
        switch (seleccion5) {
            case 'opcion1':
                $('#materia-5-opcion1').text('Lu 18:00 a 20:00');
                break;
            case 'opcion2':
                $('#materia-5-opcion2').text('Ma 10:00 a 14:00');
                break;
            case 'opcion3':
                $('#materia-5-opcion3').text('Mi 13:00 a 17:00');
                break;
            default:
                break;
        }
    }


    if (!seleccion1 && !seleccion2 && !seleccion3) {
        alert('No se ha seleccionado ninguna opción.');
    }
});


$('#tabla-asignaturas tbody td').empty();


function capturarMateria(materiaId, celdaId) {
    $(`#${materiaId}`).on('change', function() {
        let selectedValue = $(this).val(); 
        let selectedText = $(this).find('option:selected').text(); 
        $(`#${celdaId}`).text(selectedText);
    });
}

capturarMateria('materia1', 'materia-1');
capturarMateria('materia2', 'materia-2');
capturarMateria('materia3', 'materia-3');
capturarMateria('materia4', 'materia-4');
capturarMateria('materia5', 'materia-5');



capturarMateria('materia11', 'materia-1');
capturarMateria('materia22', 'materia-2');
capturarMateria('materia33', 'materia-3');
capturarMateria('materia44', 'materia-4');
capturarMateria('materia55', 'materia-5');




capturarMateria('materia111', 'materia-1');
capturarMateria('materia222', 'materia-2');
capturarMateria('materia333', 'materia-3');
capturarMateria('materia444', 'materia-4');
capturarMateria('materia555', 'materia-5');





    $('#Finalizar').on('click', function() {
        location.reload();
    });


});
