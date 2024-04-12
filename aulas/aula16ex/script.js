var vet = []
var dados = document.querySelector('div#dados')
var maiornum = 0
var menornum = 0
var cntnum = 0
var soma = 0

function adicionei() {
    var num = Number(document.getElementById('n').value)

    if (document.getElementById('n').value.length > 0) {
        vet.push(num)

        var tabvalores = document.querySelector('select#tabvalores')
        var opt = document.createElement('option')
        opt.setAttribute('value', `${num}`)

        tabvalores.appendChild(opt)
        opt.innerHTML = `O valor ${num} foi registrado.`

        var inp = document.getElementById('n')
        inp.value = ''
        //conta os números
        cntnum++
        //soma os números
        soma += num
        //maior e menor valor valor
        if (cntnum == 1) {
            maiornum = num
            menornum = num
        } else if (num >= maiornum) {
            maiornum = num
        } else if (num <= menornum) {
            menornum = num
        }

        //Limpa a div com os dados
        dados.innerHTML = ""

        //Div de testes
        var teste = document.querySelector('div#teste')
        teste.innerHTML = vet
    } else {
        window.alert('Nenhum valor foi digitado.')
    }

}

function finalizei() {
    dados.innerHTML = ''
    dados.innerHTML += `Ao todo, temos ${cntnum} valores inseridos. <br>`
    dados.innerHTML += `O maior valor foi ${maiornum}. <br>`
    dados.innerHTML += `O menor valor informado foi ${menornum}. <br>`
    dados.innerHTML += `Somando os valores digitados, temos ${soma}. <br>`
    dados.innerHTML += `A média dos valores foi ${soma / cntnum}.` 
}