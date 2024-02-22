// function contrasenaValida( x ){
//     if(x==="2Fj(jjbFsuj" || x=== "eoZiugBf&g9")return true
//     else return false
// }
// console.log(contrasenaValida("2Fj(jjbFsuj")) // true
// console.log(contrasenaValida("eoZiugBf&g9")) // true
// console.log(contrasenaValida("hola")) // false
// console.log(contrasenaValida(""))

// function calcularImpuestos(edad, ingresos){
//     if( edad >= 18 && ingresos >= 1000) return ingresos*0.4
//     else return 0
// }
// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0

// function bmi(peso, altura) { 
//     let BMI = peso / (altura * altura);
//     if (BMI < 18.5) return "Bajo de peso"; 
//     if (BMI >= 18.5 && BMI <= 24.9) return "Normal";
//     if (BMI >= 25 && BMI <= 29.9) return "Sobrepeso";
//     else return "Obeso";
// }
// console.log(bmi(65, 1.8)) // "Normal"
// console.log(bmi(72, 1.6)) // "Sobrepeso"
// console.log(bmi(52, 1.75)) //  "Bajo de peso"
// console.log(bmi(135, 1.7)) // "Obeso"

// function imprimirArreglo(z){
//     // console.log(arguments.length)
//       let x=[arguments];
//       for(i = 0; i < x.length ;i++) return x[i]
  
//   }
//   console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))

// function likes(number) {
//     if (number < 1000) {
//         return number.toString();
//     } else if (number < 1000000) {
//         return (number / 1000).toFixed(0) + 'K';
//     } else {
//         return (number / 1000000).toFixed(0) + 'M';
//     }
// }

// console.log(likes(983)) // "983"
// console.log(likes(1900)) // "1K"
// console.log(likes(54000)) // "54K"
// console.log(likes(120800)) // "120K"
// console.log(likes(25222444)) // "25M"

// function numeroDeCaracteres(cadena, caracter) {
//     let contador = 0;
//     for (let i = 0; i < cadena.length; i++) {
//         if (cadena[i] === caracter) {
//             contador++;
//         }
//     }
//     return contador;
// }
// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", "e")) // 4

// function sumarArreglo(arreglo) {
//     let suma = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         suma += arreglo[i];
//     }
//     return suma;
// }
// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0

// function removerCeros(arreglo) {
//     let arregloSinCeros = [];
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i] !== 0) {
//             arregloSinCeros.push(arreglo[i]);
//         }
//     }
//     return arregloSinCeros;
// }
// console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
// console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
// console.log(removerCeros([0, 0, 0])) // []

// function imprimirMatriz(matriz) {
//     for (let fila of matriz) {
//         for (let elemento of fila) {
//             console.log(elemento);
//         }
//     }
// }
// console.log(imprimirMatriz([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]))

//   function distancia(str1, str2) {
    
//     let diferencia = 0;
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== str2[i]) {
//             diferencia++;
//         }
//     }
//     return diferencia;
// }

// // código de prueba
// console.log(distancia("hola", "hola")) // 0
// console.log(distancia("sol", "tol")) // 1
// console.log(distancia("carro", "correr")) // 3

// // test de advent js
// // solucion dele ejercicio 2
// function manufacture(gifts, materials) {
//     return gifts.filter(gift => {
//         for (let char of gift) {
//             if (!materials.includes(char)) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }

// solucion dele ejercicio 3
// function findNaughtyStep(original, modified) {
//     if (original === modified) {
//         return '';
//     }
//     const len = Math.min(original.length, modified.length);
//     for (let i = 0; i < len; i++) {
//         if (original[i] !== modified[i]) {
//             if (modified.length > original.length) {
//                 return modified[i];
//             }
//             else {
//                 return original[i];
//             }
//         }
//     }
//     return modified[len];
// }
// solucion dele ejercicio 6
// solucion dele ejercicio 10