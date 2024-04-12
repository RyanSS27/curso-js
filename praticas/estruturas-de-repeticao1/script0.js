function clicou() {
    var container = document.querySelector('div#container')
    var alunos = Number(document.querySelector('input#qtalunos').value)

    var testes = document.querySelector('div#testes')

    var cont = 0
    
    do {
        //RESPONSÁVEL POR CRIAR A ETIQUETA COM A MENSAGEM
        var msgnome = ['sei lá'] 
        var msgnome[cont] = document.createElement('label')
        msgnome[cont].setAttribute('id', 'msgnome')
        /*possível erro*/testes.appendChild(msgnome[cont])
        msgnome[cont].innerHTML = `Digite o nome do aluno:`

        //RESPONSÁVEL POR CRIAR O INPUT DE TEXTO
        var inputnome = document.createElement('input') 
        inputnome.setAttribute('type', 'text')
        inputnome.setAttribute('id', 'inputnome')
        testes.appendChild(inputnome)

        cont++
    } while (alunos >= cont)

    
    testes.innerHTML = alunos
}