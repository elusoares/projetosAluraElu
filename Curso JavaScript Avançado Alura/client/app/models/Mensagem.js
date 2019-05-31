class Mensagem{
    constructor(texto=""){//se nao passar valor, o valor padrao é em branco
        this._texto = texto;
    }

    get texto(){
       return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}