function contador() {
    var total = 200;
    setTimeout(function () {
        var valor = document.getElementById('contador');
        var respuesta = document.getElementById('resultado');
        var cantidad = valor.value.length;
        document.getElementById('resultado').innerText = cantidad + 'caracteres restantes.' + (total - cantidad);

        if (cantidad > total) {
            respuesta.style.color = 'red';
        }
        else {
            respuesta.style.color = 'blue';
        }
    });
}


var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    if (e.target.nombre.value == '') {
        alert('El campo nombre es requerido');
        return;
    }

    if (e.target.mail.value == '') {
        alert('El campo mail es requerido');
        return;
    }

    if (e.target.mensaje.value == '') {
        alert('El campo mensaje es requerido');
        return;
    }

    alert('Gracias ' + e.target.nombre.value + ' por enviarnos "' + e.target.mensaje.value + '"');
});