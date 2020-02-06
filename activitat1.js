// EXERCICI 1: SELECCIONS

// 1- Seleccionar tots els elements div que posseeixen la classe module.
var div_modules = $('div.module');

// 2- Especificar 3 seleccions que puguin seleccionar el tercer ítem de la llista desordenada #myList. Quin és el millor per utilitzar? Per què?

// el selector de l'id es el millor
var seleccio1 = $('#myListItem');
var seleccio2 = $('li#myListItem');
var seleccio3 = $('#myList li:eq(3)');

// 3- Seleccionar l'element label de l'element input utilitzant un selector d'atribut. (ajuda: el selector d’atribut són els label[x=”y”])

var label = $('label[for="q"]');

// 4- Esbrinar quants elements en la pàgina estan ocults (ajuda: .length)

var ocults = $("html *:hidden").length;

// 5- Esbrinar quantes imatges a la pàgina posseeixen l'atribut alt.

var imatges = $('img[alt]').length;

// 6- Seleccionar totes les files senars del cos de la taula.

var files_senars = $('tbody tr:odd');


// EXERCICI 2: RECÓRRER EL DOM

// 1- Seleccionar totes les imatges a la pàgina; registrar a la consola l'atribut src de cada imatge.

var imatges = $('img');
$.each(imatges, function (index, value) {
    console.log(this.src);
});

// 2- Seleccionar l'element input, després dirigir-se cap el formulari i afegir-hi una classe a aquest.

var input = $('input').parent('form').addClass('classe');

// 3- Seleccionar l'ítem que posseeix la classe current dins de la llista #myList i eliminar aquesta classe en l'element; després afegir la classe current al següent ítem de la llista.

var item = $('#myList .current');
item.removeClass('current');
item.next().addClass('current');

// 4- Seleccionar l'element select dins de #specials; després (des de l’element), dirigir-se cap el botó submit.

var select = $('#specials select');
var boto = select.parent().next().children();

// 5- Seleccionar el primer ítem de la llista en l'element #slideshow; afegir-hi la classe current al mateix i després afegir la classe disabled als elements germans.

var item = $('#slideshow').children().first().addClass('current');
item.siblings().addClass('disabled');

// EXERCICI 3: MANIPULACIÓ

// 1- Afegir 5 nous ítems al final de la llista desordenada #myList. Ajuda: for (var i = 0; i <5; i ++) {...}

var llista = $('#myList');
for (var i = 0; i < 5; i++) {
    llista.append('<li>List Item ' + (i + 8) + '</li>');
}

// 2- Remoure els ítems imparells (1,3,5…) de la llista.

llista.children().remove(':even');

// 3- Afegir un altre element h2 i un altre paràgraf a l'últim div.module (o div.disabled).

$('div.module').last().append('<h2>h2</h2>').append('<p>paràgraf</p>');

// 4- Afegir una altra opció a l'element select; donar-li a l'opció afegida el valor Wednesday.

$('select').append('<option value="wednesday">Wednesday</option>').prop('selected');
$('select').children('[value="wednesday"]').attr('selected', 'selected');

// 5- Afegir un nou div.module (o div.disabled) a la pàgina després de l'últim; després afegir una còpia d'una de les imatges existents dins del nou div.

$('div.module').last().after('<div class="module"></div>');
var imatge = $('img').first();
$('div.module').last().append(imatge.clone());