function contador()
{
    var total = 200;
    setTimeout(function(){
        var valor = document.getElementById('contador');
        var respuesta = document.getElementById('resultado');
        var cantidad = valor.value.length;
        document.getElementById('resultado').innerText = cantidad + 'caracteres restantes.' + (total - cantidad);

        if(cantidad > total)
        {
            respuesta.style.color = 'red';
        }
        else{
            respuesta.style.color = 'blue';
        }
    });
}   