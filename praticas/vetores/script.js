var vet = []
var soma = 0
var txt = document.querySelector('div#msg')
var ins = document.querySelector('select#ins')
var opt = document.createElement('option')
function inserir() {
    var txtnum = document.querySelector('input#num')

    if ((txtnum.value).length > 0) {

    var num = Number(txtnum.value) 
    soma += num
    vet.push(num)
    txtnum.value = ''

    //CRIANDO AS OPIÇÕES E AS COLOCANDO DENTRO DO SELECT
    var optNUMS = document.createElement('option')
    optNUMS.innerHTML = `Valor ${num} adiciodado.`
    ins.appendChild(optNUMS)
    } else {
        window.document('Verifique os dados e tente novamente')
    }
}

function analise() {
    var num2
    
    //'FOR' QUE ORGANIZA O VETOR DO MENOR PARA O MAIOR
    for (var cont in vet) {
        for (var cont2 in vet) {
            if (vet[cont2] > vet[cont]) {
                num2 = vet[cont]
                vet[cont] = vet[cont2]
                vet[cont2] = num2
            }
        }
    }


    txt.innerHTML = `O vetor possui <strong>${vet.length}</strong> elementos, com a soma de seus valores sendo <strong>${soma}</strong>. 
    <br>
    <hr>
    O menor valor é <strong>${vet[0]}</strong> e o maior é <strong>${vet[vet.length - 1]}</strong>
    <br>
    <hr>
    A média dos valores <strong>${(soma/vet.length).toFixed(2)}</strong>
    <br>
    <hr>
    Organizando o vetor, ele fica: <strong>[${vet}]</strong>
    <br>`   
}

function limpar() {
    vet = []
    soma = 0
    ins.innerHTML = ''
    opt.innerHTML = '==VETOR=='
    ins.appendChild(opt)
    txt.innerHTML = ''
}

