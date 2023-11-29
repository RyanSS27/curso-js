function clicou() {
    var txtn = document.querySelector('input#n')

    if (txtn.value.length == 0) {
        window.alert('Digite algum número antes de confirmar.')
    } else {
        var n = Number(txtn.value)
        var tabuada = document.getElementById('tabuada')

        tabuada.innerHTML = ''
        for (c = 0; c <= 10; c++) {
            var item = document.createElement('option')
            item.innerHTML = `${c} x ${n} = ${c * n}`

            tabuada.appendChild(item)
        }
    }
}