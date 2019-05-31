var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var identificador = document.querySelectorAll(".paciente");

for(var i = 0; i < identificador.length; i++) {
    var peso = identificador[i].querySelector(".info-peso").textContent;
    var altura = identificador[i].querySelector(".info-altura").textContent;
    var gordura = identificador[i].querySelector(".info-gordura").textContent;
    var imc = identificador[i].querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    var gorduraEhValida = validaGordura(gordura);

    if(!pesoEhValido) {
        imc.textContent = "Peso Inválido";
        identificador[i].classList.add("paciente-invalido");
    }

    if(!alturaEhValida) {
        imc.textContent = "Altura Inválida";
        identificador[i].classList.add("paciente-invalido");
    }

    if(!gorduraEhValida) {
        imc.textContent = "Gordura Inválida";
        identificador[i].classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida && gorduraEhValida) {
        imc.textContent = calcularImc(peso, altura);
    }
}

function calcularImc(peso, altura) {
    var imc = (peso / (altura * altura)).toFixed(2);
    return imc;
}

function validaPeso(peso) {
    if(peso > 0 && peso < 1000) {
        return true;
    }
    else {
        return false;

    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3) {
        return true;
    }
    else {
        return false;
    }
}

function validaGordura(gordura) {
    if(gordura > 0 && gordura <= 100) {
        return true;
    }
    else {
        return false;
    }
}
