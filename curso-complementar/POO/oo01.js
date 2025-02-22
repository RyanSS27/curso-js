//Atribuindo características de várias formas

let nootebook = new Object 

nootebook.nome = "Lenovo Ideapad"
nootebook.fabricante = "Lenovo"
nootebook['modelo'] = "s145"
nootebook.preco = 2590

console.log(nootebook)

//Vou complicar kkkkk
//Um objeto pode ter outros objetos como característica, e esses objetos tem suas próprias características

const carteira = {
    identificacao: 'Pertence ao João',
    material: 'couro',
    qtaDinheiro: 75,
    documentos: { 
        CIN: {
            nome: 'João da Silva',
            cpf: '999.888.777-10',
            orgaoEmissor: 'SP'
        },
        RG: {
            Nome: 'João da Silva',
            Num: '111.222.10'
        }
    },

    passeEscolar: {
        tipo: 'Escolar',
        nome: 'Maria',
        saldo: 80,
        genero: 'fem'
    }
}

// Quero as características da carteira
console.log("CARTEIRA\n" + '========')
console.log(carteira)

// Quero as características de um setor característico da carteira
console.log("CARTEIRA > Documentos\n" + "========")
console.log(carteira.documentos)

// Quero as características de um documento presente em um setor característico da carteira
console.log("CARTEIRA > Documentos > cin\n" + '========')
console.log(carteira.documentos.CIN)



/*

Obs
- Tentei abreviar tudo nessa linha, porém, ela não mostrou as características: 

console.log('Carteira: '+ carteira + '. Documentos presentes na carteira: ' + carteira.documentos + 'CIN dentro dos documentos.' + carteira.documentos.CIN)

*/
