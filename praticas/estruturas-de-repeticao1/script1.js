function clicou() {
    var testes = document.querySelector('div#testes')
    var nalunos = Number(document.getElementById('nalunos').value)

    //Criação dos inputs de NOTA e NOME
    var inputNota = document.createElement('input')
    inputNota.setAttribute('type', 'number')

    var inputNome = document.createElement('input')

    //Determinando seus names
    inputNota.setAttribute('name', 'nota')
    inputNome.setAttribute('name', 'nome')
    
    //Tira todo o conteúdo da div de testes para caso o programa seja executado mais de uma vez
    testes.innerHTML = ''

    for (var cont = nalunos; cont > 0; cont--) {
        testes.innerHTML += `<h3>${nalunos-
            cont+1}° aluno.</h3> <p>Digite o nome do aluno:</p>`
        testes.appendChild(inputNome)

        testes.innerHTML += `<p>Digite a nota:</p>`
        testes.appendChild(inputNota)
    }

    var inputButtom = document.createElement('input')
    inputButtom.setAttribute('type', 'button')
    inputButtom.setAttribute('value', 'Relatório')
    inputButtom.setAttribute('onclick', 'relatorio()')
    testes.appendChild(inputButtom)
}


function relatorio() {
    var relat = document.querySelector('div#relat')
    var melhornota
    var melhoraluno
    var piornota
    var pioraluno
    var vetnomes = []
    var vetnotas = []
    var soma = 0

    for (cont = 0; cont <= nalunos; cont++) {
        //CRIAÇÃO DAS VARIÁVEIS QUE VÃO RECEBER OS NOMES E NOTAS DOS INPUTS CRIADOS POR JAVASCRIPT
        var nome = document.getElementsByName('nome')[cont].value

        var nota = Number(document.getElementsByName('nota')[cont].value)

        soma += nota.value
        //ENCONTRANDO A MAIOR NOTA CASO OUVER MAIS DE 1 ALUNO
        if (nalunos == 1) {
            melhornota = nota
            melhoraluno = nome
        } else {
            //Verifica se é o primeiro aluno que está sendo avaliado. Caso seja, já define ele como a maior nota
            if (cont == 0) {
                melhornota = nota
                melhoraluno = nome
            } else {
                //Verifica se a nota é maior, menor ou igual.
                if (nota > melhornota) {
                    melhornota = nota
                    melhoraluno = nome
                } else if (nota < menornota) {
                    piornota = nota
                    pioraluno = nome
                }
            }
        }
        vetnomes.push(nome)
        vetnotas.push(nota)
    }

    //Emite o relatório
    if (nalunos == 1) {
        relat.innerHTML = `<h2>Relatório</h2> 
        <p>Só o aluno ${melhoraluno} foi avaliado e sua nota é ${melhornota}.</p>`
    } else {
        relat.innerHTML = `<h2>Relatório</h2>
        <p>Ao todo, ${nalunos.value} alunos foram avaliados e a média deles ficou ${(soma/nalunos.value).toFixed(2)}</p>
        <p>O aluno com a maior nota foi ${melhoraluno}, tirando ${melhornota}.</p>
        <p>O aluno com maior dificuldade foi ${pioraluno}, tirando ${piornota}</p>`

    }
}