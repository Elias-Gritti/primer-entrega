/*Te pide un numero y una palabra y en la consola pone la palabra la cantidad de veces segun el numero*/

let numero = parseInt(prompt('Ingrese un numero: '))
let palabra = prompt('Ingrese la palabra: ');

for(let i=1; i<=numero; i++) {
    console.log(`${i} - ${palabra}`)
    
}
alert(`Te mostrara en consola ${numero} veces la palabra: "${palabra}"`)