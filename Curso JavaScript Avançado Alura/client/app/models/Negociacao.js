class Negociacao{
    constructor(data, quantidade, valor){
        //o underline _ antes do nome de uma propriedade, indica que ela so pode ser alterada pela propria classe, e nao pelo programador
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //congela o objeto assim q for instanciado
    }
    //a sintaxe get faz o metodo parecer uma propriedade
    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}