// Filtros de características
let filtropacifico = 'off';
function pacifico() {
    let criaturas=document.querySelectorAll('.pacifico');
    let boton=document.querySelector('.filtro1');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtropacifico == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtropacifico = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtropacifico = 'off';
    }
}

let filtroneutral = 'off';
function neutral() {
    let criaturas=document.querySelectorAll('.neutral');
    let boton=document.querySelector('.filtro2');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroneutral == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroneutral = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroneutral = 'off';
    }
}

let filtroagresivo = 'off';
function agresivo() {
    let criaturas=document.querySelectorAll('.agresivo');
    let boton=document.querySelector('.filtro3');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroagresivo == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroagresivo = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroagresivo = 'off';
    }
}

let filtrointerior = 'off';
function interior() {
    let criaturas=document.querySelectorAll('.interior');
    let boton=document.querySelector('.filtro4');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtrointerior == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtrointerior = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtrointerior = 'off';
    }
}

let filtroexterior = 'off';
function exterior() {
    let criaturas=document.querySelectorAll('.exterior');
    let boton=document.querySelector('.filtro5');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroexterior == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroexterior = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroexterior = 'off';
    }
}

let filtroveloz = 'off';
function veloz() {
    let criaturas=document.querySelectorAll('.veloz');
    let boton=document.querySelector('.filtro6');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroveloz == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroveloz = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroveloz = 'off';
    }
}

let filtrolento = 'off';
function lento() {
    let criaturas=document.querySelectorAll('.lento');
    let boton=document.querySelector('.filtro7');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtrolento == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtrolento = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtrolento = 'off';
    }
}

//Filtro de zonas
let filtrogordion = 'off';
function gordion() {
    let criaturas=document.querySelectorAll('.gordion');
    let boton=document.querySelector('.filtro8');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtrogordion == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtrogordion = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtrogordion = 'off';
    }
}

let filtroexperimentation = 'off';
function experimentation() {
    let criaturas=document.querySelectorAll('.experimentation');
    let boton=document.querySelector('.filtro9');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroexperimentation == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroexperimentation = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroexperimentation = 'off';
    }
}

let filtroassurance = 'off';
function assurance() {
    let criaturas=document.querySelectorAll('.assurance');
    let boton=document.querySelector('.filtro10');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroassurance == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroassurance = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroassurance = 'off';
    }
}

let filtrovow= 'off';
function vow() {
    let criaturas=document.querySelectorAll('.vow');
    let boton=document.querySelector('.filtro11');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtrovow == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtrovow = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtrovow = 'off';
    }
}

let filtrooffense = 'off';
function offense() {
    let criaturas=document.querySelectorAll('.offense');
    let boton=document.querySelector('.filtro12');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtrooffense == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtrooffense = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtrooffense = 'off';
    }
}

let filtromarch = 'off';
function march() {
    let criaturas=document.querySelectorAll('.march');
    let boton=document.querySelector('.filtro13');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtromarch == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtromarch = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtromarch = 'off';
    }
}

let filtroadamance = 'off';
function adamance() {
    let criaturas=document.querySelectorAll('.adamance');
    let boton=document.querySelector('.filtro14');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroadamance == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroadamance = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroadamance = 'off';
    }
}

let filtroerend = 'off';
function rend() {
    let criaturas=document.querySelectorAll('.rend');
    let boton=document.querySelector('.filtro15');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroerend == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroerend = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroerend = 'off';
    }
}

let filtrodine = 'off';
function dine() {
    let criaturas=document.querySelectorAll('.dine');
    let boton=document.querySelector('.filtro16');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtrodine == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtrodine = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtrodine = 'off';
    }
}

let filtrotitan = 'off';
function titan() {
    let criaturas=document.querySelectorAll('.titan');
    let boton=document.querySelector('.filtro17');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtrotitan == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtrotitan = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtrotitan = 'off';
    }
}

let filtroartifice = 'off';
function artifice() {
    let criaturas=document.querySelectorAll('.artifice');
    let boton=document.querySelector('.filtro18');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroartifice == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroartifice = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroartifice = 'off';
    }
}

let filtroembrion = 'off';
function embrion() {
    let criaturas=document.querySelectorAll('.embrion');
    let boton=document.querySelector('.filtro19');
    criaturas.forEach(function(criatura) {
        if (criatura.style.display ==='none'){
            criatura.style.display = 'block';
        } else {
            criatura.style.display = 'none';
        }
    });
    if (filtroembrion == 'off') {
        boton.style = 'background-color: #35A335; color: #333;';
        filtroembrion = 'on';
    }
    else {
        boton.style = 'background-color: transparent; color: #35A335;';
        filtroembrion = 'off';
    }
}