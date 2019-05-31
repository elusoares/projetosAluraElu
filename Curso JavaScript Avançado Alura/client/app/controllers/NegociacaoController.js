class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document);//o dolar guarda o metodo querySelector que por sua vez indica pelo bind que pertence ao objeto document
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($("#negociacoes-view")),
            "adiciona", 
            "esvazia");

        this._form =  $(".form");

        
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($("#mensagem-view")),
            "texto");        
    }

    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
    
        this._mensagem.texto = "Negociacao adicionada com sucesso"; 
        this._limpaFormulario();

    }

    importaNegociacoes(){
        let service = new NegociacaoService();
        Promise.all([
            service.obterNegociacoesDaSemana(), 
            service.obterNegociacoesDaSemanaAnterior(), 
            service.obterNegociacoesDaSemanaRetrasada()
            ]).then(negociacoes => {
                negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações importadas com sucesso";
            }).catch(erro => this._mensagem.texto = erro);
    }

    apaga(){
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações apagadas com sucesso.";
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value, 
            this._inputValor.value);
    }
    _limpaFormulario(){
        this._form.reset();
        this._inputData.focus();
    }
}