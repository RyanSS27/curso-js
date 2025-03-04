//VOU TESTAR COMO AS FUNÇÕES FACTORY FUNCIONAM
let clientes = []

//Recebo as informações dos clientes como parâmetro e coloco esses parâmetros dentro das caracteríticas do objeto que vai ser retornado 
function criaCliente(nomeCliente, cpfCliente, scoreCliente) {
    let cont = clientes.length == 0? 1: clientes.length + 1
    return {
        idCliente: cont,
        nome: nomeCliente,
        cpf: cpfCliente,
        score: scoreCliente
    } //Ela retorna um objeto com essas características
}

//Chamei a função e passei os dados do meu nobre 
console.log(criaCliente('Carlos', 878787878, 10))

console.log('===================================================\nTESTE\n===================================================')

//TESTE DE ARMAZENAMENTO DE CLIENTES NO ARRAY
clientes = [] //limpei
//Inserindo clientes no array
clientes.push(criaCliente('Miguel', 56565656, 5))
clientes.push(criaCliente('Ana', 77777777, 5))
clientes.push(criaCliente('Samira', 44444444, 10))
clientes.push(criaCliente('Guilherme', 99999999, 5))

//Exibindo os clientes 
console.log('CLIENTE ESPECÍFICO:',clientes[3])

console.log('LISTAGEM DE CLIENTES')
for (cont = 0; cont < clientes.length; cont++) {
    console.log(clientes[cont])
}

//ALTERANDO UMA CARACTERÍSTICA DE UM CLIENTE ESPECÍFICO
console.log('===================================================')
//[Recebe] o id do cliente que deve ser alterado e quantos pontos de score serão somados
const reajusteScore = (id, soma) => {

    //Vasculha o array de clientes
    for(pos in clientes) {
        //Verifica se o idCliente bate com o id que deve ser alterado
        if (id == clientes[pos].idCliente) {
            clientes[pos].score += soma
        }
    }
}
reajusteScore(3, 15)//[Passa] o id do cliente que deve ser alterado e quantos pontos de score serão somados
console.log('Trocando o score da cliente de id 3:', clientes[2])




