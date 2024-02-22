// function fizzBuzz(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         return "fizzbuzz";
//     } else if (number % 3 === 0) {
//         return "fizz";
//     } else if (number % 5 === 0) {
//         return "buzz";
//     } else {
//         return number.toString();
//     }
// }
// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

// function contarRango(numeroInicial, numeroFinal) {
//     let contador = 0;
//     for (let i = numeroInicial + 1; i < numeroFinal; i++) {
//         contador++;
//     }
//     return contador;
// }

// console.log(contarRango(1, 9)) // 7
// console.log(contarRango(1332, 8743)) // 7410
// console.log(contarRango(5, 6)) // 0

// function numeroDeAes(cadena) {
//     let contador = 0;
//     for (let i = 0; i < cadena.length; i++) {
//         if (cadena[i].toLowerCase() === 'a') {
//             contador++;
//         }
//     }
//     return contador;
// }

// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0

// function multiplicarArreglo(arreglo) {
//     let resultado = 1;
//     for (let i = 0; i < arreglo.length; i++) {
//         resultado *= arreglo[i];
//     }
//     return resultado;
// }

// console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArreglo([])) // 1

// function sumarArreglo(arreglo, posicionInicial, posicionFinal) {
//     let suma = 0;
//     for (let i = posicionInicial; i <= posicionFinal; i++) {
//         suma += arreglo[i];
//     }
//     return suma;
// }

// console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
// console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

// function transcribir(cadenaADN) {
//     let complementoARN = '';
//     for (let i = 0; i < cadenaADN.length; i++) {
//         switch (cadenaADN[i]) {
//             case 'G':
//                 complementoARN += 'C';
//                 break;
//             case 'C':
//                 complementoARN += 'G';
//                 break;
//             case 'T':
//                 complementoARN += 'A';
//                 break;
//             case 'A':
//                 complementoARN += 'U';
//                 break;
//             default:
//                 // Si el carácter no es uno de los válidos, se mantiene igual
//                 complementoARN += cadenaADN[i];
//         }
//     }
//     return complementoARN;
// }

// console.log(transcribir("ACGT")) // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"