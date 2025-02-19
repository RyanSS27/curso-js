let visor = window.document.querySelector('div.visor')
let verifica = 0 

/*
    FUNCIONAMENTO DA FUNÇÃO
    =======================
    1° A função recebe o conteúdo da tecla no parâmetro 'a' para adiciona-lo ao visor.
    2° Ela verifica se uma operção foi selecionada no parâmetro 'tipo' para que não se possa digitar 2 operações seguidas.
*/

function clicou(a, tipo = 0) {
    
    if (tipo == 1 && verifica == 1) {
        //Se a pessoa digitou 2 operações seguidas, ela apaga a anterior e adiciona a posterior
        let conta = visor.innerHTML
        visor.innerHTML = conta.substring(0, conta.length - 1) + a
    } else {
        visor.innerHTML += a
    }

    //Salva último tipo de click para auxiliar na próxima verificação
    verifica = tipo 
    
}

function limpa() {
    visor.innerHTML = ""
}

function del() {
    let conta  = visor.innerHTML
    visor.innerHTML = conta.substring(0, conta.length - 1)
}

function calc() {
    //Recebe o conteúdo do visor da calculadora
    let conta =  visor.innerHTML

    
    //Testa se há conteúdo no visor ou se o último click foi uma operação, retornando erros ou seguindo 
    if (conta.length == 0) {
        window.alert('Antes de calcular, insira uma expressão númerica.')
    } else if (verifica != 0) {
        window.alert('Termine ou corrija a expressão númerica (não se pode termina-lá com um operador).')
    } else {

        //Faz a troca de caracteres na string para que ela possa ser calculada
        conta = conta.replace('x','*').replace('^','**')

        visor.innerHTML = eval(conta)
    }
}