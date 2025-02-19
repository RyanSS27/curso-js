function clicou() {
    let container = document.querySelector('div#container')
    let alunos = Number(document.querySelector('input#qtalunos').value)

    let testes = document.querySelector('div#testes')

    let cont = 0
    
    do {
        //RESPONSÁVEL POR CRIAR A ETIQUETA COM A MENSAGEM
        let msgnome = ['sei lá'] //cria um array 
        msgnome[cont] = document.createElement('label')
        msgnome[cont].setAttribute('id', `msgnome${cont}`)
        /*possível erro*/testes.appendChild(msgnome[cont])
        msgnome[cont].innerHTML = `Digite o nome do aluno:`

        //RESPONSÁVEL POR CRIAR O INPUT DE TEXTO
        let inputnome = document.createElement('input') 
        inputnome.setAttribute('type', 'text')
        inputnome.setAttribute('id', 'inputnome')
        testes.appendChild(inputnome)

        cont++
    } while (alunos >= cont)

    
    testes.innerHTML = alunos
}