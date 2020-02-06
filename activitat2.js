    // EXERCICI 4: ESDEVANIMENTS

    // 1- Establir el valor de l'element input igual al valor de l'element label;

    var valor = $('#search label').html();
    $('#search input').val(valor);

    // 2- Afegir la classe hint l'element input;

    $('#search input').addClass('hint');

    // 3- Remoure l'element label;

    $('#search label').remove();

    // 4- Vincular un esdeveniment focus en l'input per eliminar el text de suggeriment i la classe hint;

    $('#search input').on('focus', function () {
        $(this).removeClass('hint');
        $(this).val('');
    });

    // 5- Vincular un esdeveniment blur al input per restaurar el text de suggeriment i la classe hint en cas que no s'hagi ingressat algun text.

    $('#search input').on('blur', function () {
        $(this).addClass('hint');
        $(this).val(valor);
    });