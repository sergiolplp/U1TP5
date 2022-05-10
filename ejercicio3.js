// LEÓN

var fotopordefecto1 = 'leon1';

function cambiafoto1()
{   
    var imagen1 = document.getElementById('leon1');
    if (fotopordefecto1 == 'leon1'){
        imagen1.src = "leon2.jpg";
        fotopordefecto1 = 'leon2';
    }
    else {
        imagen1.src = 'leon1.jpg';
        fotopordefecto1 = 'leon1';
    }
}

const audio1 = new Audio();
audio1.src = 'rugido.mp3';

// ELEFANTE

var fotopordefecto2 = 'elefante1';

function cambiafoto2()
{   
    var imagen2 = document.getElementById('elefante1');
    if (fotopordefecto2 == 'elefante1'){
        imagen2.src = "elefante2.jpg";
        fotopordefecto2 = 'elefante2';
    }
    else {
        imagen2.src = 'elefante1.jpg';
        fotopordefecto2 = 'elefante1';
    }
}

const audio2 = new Audio();
audio2.src = 'barrito.mp3';

// GORILLA

var fotopordefecto3 = 'gorila1';

function cambiafoto3()
{   
    var imagen3 = document.getElementById('gorila1');
    if (fotopordefecto3 == 'gorila1'){
        imagen3.src = "gorila2.jpg";
        fotopordefecto3 = 'gorila2';
    }
    else {
        imagen3.src = 'gorila1.jpg';
        fotopordefecto3 = 'gorila1';
    }
}

const audio3 = new Audio();
audio3.src = 'gruñido.mp3';