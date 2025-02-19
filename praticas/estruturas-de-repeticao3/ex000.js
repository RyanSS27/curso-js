var botao = document.querySelector('input#contagem')
botao.addEventListener('click', contar)

function contar() {
    //PEGANDO OS ELEMENTOS DA PÁGINA
    var inpInc = document.querySelector('input#inicio-cont').value
    var inpFim = document.querySelector('input#fim-cont').value
    var passo = Number(document.querySelector('input#passo').value)
    var msg = document.querySelector('div#msg')

    //PEGANDO OS VALORES DO INÍCIO E FIM 
    var inc = Number(inpInc)
    var fim = Number(inpFim)
    

    if (passo != 0 && inpInc.length != 0 && inpFim.length != 0)/*o teste verifica se os inputs estão preenchidos (não usei o .length no 'passo' pois, se estiver vazio, o valor é zero)*/ {
        if (inc > fim && passo > 0) {
            for (var cont = inc; cont >= fim; cont -= passo) {
                msg.innerHTML += `&#x27A1; ${cont} `
            }

        } else if (inc > fim && passo < 0) {
            for (var cont = inc; cont >= fim; cont += passo) {
                msg.innerHTML += `&#x27A1; ${cont} `
            }
        } else if (inc < fim && passo > 0) {
            for (var cont = inc; cont <= fim; cont += passo) {
                msg.innerHTML += `&#x27A1; ${cont} `
            }
        }
        msg.innerHTML += `&#x1F3C1;`
    } else {
        window.alert('[Erro] Verifique os dados e tente novamente.')
    }
}

