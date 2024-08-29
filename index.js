//Desafio 1 - Funciones
// function sumarPares(numeros) {
//   let suma = 0;
//   for (const i in numeros) {
//     if (numeros[i] % 2 == 0) {
//       suma = numeros[i] + suma;
//     }
//   }
//   return suma;
// }

// function contarPalabras(palabras) {
//   let contador = 0;
//   for (let i = 0; i < palabras.length; i++) {
//     contador++;
//   }
//   return contador;
// }

// function finDeSemana(diaDeSemana) {
//   if (diaDeSemana == "Sábado" || diaDeSemana == "Domingo") {
//     return "Es fin de semana! :)";
//   } else {
//     return "No es fin de semana :(";
//   }
// }

// function main() {
//   const numerosVarios = [25, 58, 12, 45, 64, 75, 10, 1, 36, 96, 55, 37];
//   let totalPares = sumarPares(numerosVarios);
//   const palabrasVarias = ["Hola", "Espero", "Que", "estés", "muy", "bien"];
//   let palabrasArray = contarPalabras(palabrasVarias);
//   const diaSemanal = "Domingo";
//   let saberDia = finDeSemana(diaSemanal);

//   console.log("Resultados");
//   console.log("La cantidad de números pares en el array suman:", totalPares);
//   console.log("La cantidad de palabras en el array son:", palabrasArray);
//   console.log("¿Puedes decirme si es fin de semana o no?:", saberDia);
// }

// main();

//EJERCICIO 'SOLO PARES' - Funciones

// function main() {
//   const palabras = [
//     { palabra: "Hola", numero: 1 },
//     { palabra: "Galletitas", numero: 22 },
//     { palabra: "Fideos", numero: 4 },
//     { palabra: "Arroz", numero: 5 },
//     { palabra: "Jugo en sobre", numero: 3 },
//     { palabra: "Picadillo", numero: 2 },
//     { palabra: "Pollo", numero: 57 },
//     { palabra: "Gato", numero: 78 },
//     { palabra: "Vaso", numero: 41 },
//     { palabra: "Computadora", numero: 96 },
//     { palabra: "Celular", numero: 51 },
//     { palabra: "Zapato", numero: 88 },
//     { palabra: "Taza", numero: 33 },
//     { palabra: "Teclado", numero: 49 },
//     { palabra: "Mouse", numero: 65 },
//     { palabra: "Paquete", numero: 84 },
//     { palabra: "Cuaderno", numero: 54 },
//     { palabra: "Lavarropas", numero: 30 },
//     { palabra: "Heladera", numero: 25 },
//     { palabra: "Estufa", numero: 17 },
//   ];

//   const productosPares = buscaPares(palabras);

//   console.log(productosPares);
// }

// function buscaPares(producto) {
//   const numerosPares = [];
//   for (let i = 0; i < producto.length; i++) {
//     const numProducto = producto[i].numero;
//     if (numProducto % 2 == 0) {
//       numerosPares.push(producto[i]);
//     }
//   }

//   return numerosPares;
// }

// main();

//EJERCICIO ARROW FUNCTION

// function main() {
//   const arr = [
//     "hola",
//     "adios",
//     "bienvenido",
//     "chau",
//     "Felicidad",
//     "Chocolatada",
//     "Ola",
//   ];
//   console.log(filterByLength(arr, 5));
// }

// const filterByLength = (strings, numero) => {
//   arrayFinal = [];

//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i].length >= numero) {
//       arrayFinal.push(strings[i]);
//     }
//   }
//   return arrayFinal;
// };

// main();

// function obtenerNumerosPares(numeros) {
//   const numerosPares = [];
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//       numerosPares.push(numeros[i]);
//     }
//   }
//   return numerosPares;
// }

// const obtenerNumerosPares = (numeros) => {
//   const numerosPares = [];
//     for (let i = 0; i < numeros.length; i++) {
//       if (numeros[i] % 2 === 0) {
//         numerosPares.push(numeros[i]);
//       }
//     }
//     return numerosPares;
// }

// function transformarFrase(frase) {
//   const fraseFinal = [];

//   const fraseMayuscula = frase.map(function (palabra) {
//     // const inicial = palabra.charAt(0);
//     // const restoDePalabra = palabra.slice(1);
//     // const inicialMayuscula = inicial.toUpperCase();
//     // const restoEnMinuscula = restoDePalabra.toLowerCase();
//     // const resultado = inicialMayuscula.concat(restoEnMinuscula);
//     const resultado = palabra
//       .charAt(0)
//       .toUpperCase()
//       .concat(palabra.slice(1).toLowerCase());

//     return resultado;
//   });

//   const oracion = fraseMayuscula.join(" ");

//   return oracion;
// }

// function main() {
//   const frase = ["La", "vida", "es", "como", "una", "caja", "de", "chocolates"];
//   const oracionMayuscula = transformarFrase(frase);
//   console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
// }

// main();

function crearArrayRandom(tamaño, cantidad) {
  let numerosRandom = Array.from({ length: tamaño }, () =>
    Math.floor(Math.random() * cantidad)
  );
  return numerosRandom;
}

function ordenarArray(arrayDesordenado) {
  for (let c1 = 0; c1 < arrayDesordenado.length; c1++) {
    for (let c2 = 0; c2 < arrayDesordenado.length; c2++) {
      esMayor = arrayDesordenado[c2] > arrayDesordenado[c2 + 1];
      if (esMayor) {
        var aux = arrayDesordenado[c2 + 1];
        arrayDesordenado[c2 + 1] = arrayDesordenado[c2];
        arrayDesordenado[c2] = aux;
      }
    }
  }
  console.log(arrayDesordenado);
}

function main() {
  const mostrarArrayRandom = crearArrayRandom(5, 100);
  console.log("El array creado es:", mostrarArrayRandom);
  ordenarArray(mostrarArrayRandom);
}

main();
