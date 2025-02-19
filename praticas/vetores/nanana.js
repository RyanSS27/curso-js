let vet = [2,1,8,5,7]
let num 
let soma = 0
for (var cont in vet) {
    for (var cont2 in vet) {
        if (vet[cont2] > vet[cont]) {
            num = vet[cont]
            vet[cont] = vet[cont2] 
            vet[cont2] = num
        }
    }
}

for (let cont in vet) {
    soma += vet[cont]
}
console.log(vet)
let quant = vet.length
console.log((soma/vet.length).toFixed(2))


