var fotopordefecto = 'leon1';

function cambiafoto()
{   
    var imagen = document.getElementById('leon1');
    if (fotopordefecto == 'leon1'){
        imagen.src = "leon2.jpg";
        fotopordefecto = 'leon2';
    }
    else {
        imagen.src = 'leon1.jpg';
        fotopordefecto = 'leon1';
    }
}

const audio = new Audio();
audio.src = 'leon_rugiendo.mp3';