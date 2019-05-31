
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    //extrai informações do paciente no form
    var paciente = obtemPacienteDoFormulario(form);

    //monta uma linha da tabela com novos registros
    
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    else {
        adicionaPacienteNaTabela(paciente);

        

        form.reset();
        var mensagemDeErro = document.querySelector("#mensagens-erro");
        mensagemDeErro.innerHTML = "";
    }
    
    
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {   
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    } 
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = []
    if(paciente.nome.length == 0 || paciente.peso.length == 0 || paciente.altura.length == 0 || paciente.gordura.length == 0) {
        erros.push("Todos os campos devem ser preenchidos");
    }
    if(!validaPeso(paciente.peso )){
        erros.push("O peso é inválido.");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida.");
    }

    if(!validaGordura(paciente.gordura)) {
        erros.push("A gordura é inválida.")
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}