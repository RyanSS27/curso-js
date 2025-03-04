//FORMAS DE SE CRIAR OBJETOS 

//Literal
const obj = {}

//Através da função 'new Object'
let objeto = new Object
objeto = {
    nome: 'Maça',
    tipo: 'fruta',
    cor: 'red'
}

console.log(typeof Object /*Note que o Object é uma função*/, typeof new Object /*Note que, quando executado, ele já aponta como um objeto. Achei isso mó legal e resolvi anotar hahaha*/)
console.log(objeto)

//Factory Function 
function criaObjeto(nome, preco) {
    //Retona objetos com as características que podem (ou não) serem passadas como parâmetro
    return {
        nome: nome,
        preco: preco
    }
}
let armazenaObjeto = criaObjeto('Geladeira Show', 4000)
console.log(armazenaObjeto)