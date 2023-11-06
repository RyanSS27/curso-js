var agora = new Date()
var hr = agora.getHours()

if (hr < 6 && hr >= 0) {
    console.log('Boa madrugada!')
} else if (hr > 6 && hr < 12) {
    console.log('Bom dia!')
} else if (hr >= 12 && hr < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

console.log(agora.get())