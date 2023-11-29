
function clicou() {
    var inc = document.querySelector('input#inc')

    var fim = document.querySelector('input#fim')

    var passo = document.querySelector('input#passo')

    var resp = document.querySelector('div#msg')

    
    if (inc.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Algum valor não foi inserido.')
    } else {

        if (Number(passo.value) == 0) {
            window.alert('Passo invalido. Considerando PASSO "1".')
            passo.value = 1
        }

        resp.innerHTML = `Resultado: <br>`
        if (Number(inc.value) < Number(fim.value)) {
            for (var c = Number(inc.value); c <= Number(fim.value); c += Number(passo.value)) {
                resp.innerHTML += ` &#x27A1;` + c
            }
        } else {
            for (var c = Number(inc.value); c >= Number(fim.value); c -= Number(passo.value)) {
                resp.innerHTML += ` &#x27A1;` + c
            }
        }
        resp.innerHTML += ` &#x1F3C1;`
    }
}