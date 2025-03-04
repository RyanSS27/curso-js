function criarProd(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}
console.log(criarProd('Monitor', 620))

//A variável recebe uma função que cria objetos
const criaPessoa = _ => {
    return {
        nome: _,
        fala: gosto => console.log('Eu gosto de', gosto)
    }
}

//A variável "pessoa" recebe o objeto retornado que tem uma comportamento (função) como característica 
const pessoa = criaPessoa('Ryan')
//Executa a função que está dentro do objeto pessoa e passa o parâmetro

console.log(pessoa)
pessoa.fala('programar') //Executo o comportamento que está dentro do objeto
