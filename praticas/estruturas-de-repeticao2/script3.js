let nalunos = 0
let criaInputs = (div, nalunos) => {
    div.innerHTML = ''
    for (cont = 1; cont <= nalunos; cont++) {
        div.innerHTML += `<h3>${cont}° aluno</h3>`

        let labelNome = document.createElement('label')
        let inputNome = document.createElement('input')
        labelNome.setAttribute('for', `aluno${cont}`)
        inputNome.setAttribute('id', `aluno${cont}`)
        inputNome.setAttribute('placeholder', 'Digite o nome do aluno')

        let labelNota = document.createElement('label')
        let inputNota = document.createElement('input')
        labelNota.setAttribute('for', `nota${cont}`)
        inputNota.setAttribute('id', `nota${cont}`)
        inputNota.setAttribute('type', 'number')
    


        labelNota.innerHTML = 'Nota: '
        labelNome.innerHTML = `Nome: `
        div.appendChild(labelNome)
        div.appendChild(inputNome)
        div.appendChild(labelNota)
        div.appendChild(inputNota)
    }
    let botao = document.createElement('button')
    botao.innerHTML = 'Relatório'
    botao.setAttribute('type', 'submit')
    botao.setAttribute('onclick', 'relatorio()')
    div.appendChild(botao)
    return div
}

let teste = document.querySelector('div.testes')
function confirma() {
    nalunos = Number(document.querySelector('input#nalunos').value)
    if (nalunos <= 0) {
        window.alert('Por favor, verifique os dados e tente novamente.')  
    } else {
        let cadastro = document.querySelector('div.cadastro-alunos')
        cadastro = criaInputs(cadastro, nalunos)
    }
}

/*function verificacao() {
    let contErro = 0
    for(cont = 0; cont < nalunos; cont++) {
        if (document.querySelector(`input#aluno${cont}`).value.length == 0) {

            let inpErro =  document.querySelector(`input#aluno${cont}`)
            inpErro.style.borderColor = 'red'
            contErro = 1

        } else if (document.querySelector(`input#nota${cont}`).length == 0) {

            let inpErro = document.querySelector(`input#nota${nota}`)
            inpErro.style.borderColor = 'red'
            contErro = 1
            
        }
    }
    
    if (contErro > 0) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        relatorio()
    }
}*/

function relatorio() {
    let relat = document.querySelector('div.relat')
    relat.innerHTML = ''
    let soma = 0
    let melhornota = 0
    let melhoraluno = ''
    let msgMelhorAluno = ''
    let contErros = 0
    for (cont = 1; cont<=nalunos; cont++) {
        let inpAluno = document.querySelector(`input#aluno${cont}`)
        let aluno = inpAluno.value
        let inpNota = document.querySelector(`input#nota${cont}`)
        let nota = Number(inpNota.value)
        soma += nota
        
        if(inpAluno.value.length == 0) {
            inpAluno.style.border = "1px solid red"
            contErros = 1
        } else if(inpNota.value.length == 0) {
            inpNota.style.border = "1px solid red"
            contErros = 1
        } else if (nota > melhornota) {
            inpAluno.style.border = "1px solid black"
            inpNota.style.border = "1px solid black"
            msgMelhorAluno = `<p>O aluno com a maior nota foi ${aluno}, tirando ${nota}.</p>`
            melhoraluno = aluno
            melhornota = nota
        } else if (nota == melhornota) {
            melhoraluno += `, ${aluno}` 
            msgMelhorAluno = `<p>Os alunos com a maior nota foram: ${melhoraluno}; tirando ${nota}.</p>`//parei aq
        } //precisa fazer o else dos alunos com dificuldade
    }

    if (contErros >= 1) {
        window.alert("Verifique os dados e tente novamente.")
    } else if (nalunos == 1) {
        relat.innerHTML = `<h2>Relatório</h2> 
        <p>Só o aluno ${melhoraluno} foi avaliado e sua nota é ${melhornota}.</p>`
    } else {
        relat.innerHTML += `<h2>Relatório</h2>
        <p>Ao todo, ${nalunos} alunos foram avaliados e a média deles ficou ${(soma/nalunos).toFixed(2)}.</p> ${msgMelhorAluno}`
        
    }
}

