
let num

// const resto = num % 2

let dispari = []


// for (i = 0; i < 10; i++) {
    
//     num = parseInt(prompt('Inserisci un numero'))
//     const resto = num % 2

//     if (resto === 1) {
//         dispari.push(num)
//     }
// }
// console.log(dispari)

while (dispari.length < 10) {
    
    num = parseInt(prompt('Inserisci un numero'))
    const resto = num % 2

    if (resto === 1) {
        dispari.push(num)
    }
}
console.log(dispari)


// // // // // // // // // // // // // #2

for (i=0; i < dispari.length; i++){
    console.log(dispari[i])
}


// // // // // // // // // // // // // // // BONUS



