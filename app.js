//Ejercicio 1 Tienen misma longitud

// const tienenMismaLongitud = (a, b) => {
//     const primera = a.length;
//     const segunda = b.length;

//     if (primera === segunda) {
//         return true;
//     } else {
//         return false;
//     }

// };

// console.log(tienenMismaLongitud('javascript', 'java'));
// console.log(tienenMismaLongitud('manzana', 'cerveza'));



//Ejercicio 2 ultimo caracter
// const igualLongitud = (palabra, caracter) => {
//     let posicionDelUltimoCaracter = palabra.length - 1;
//     let ultimoCaracter = palabra.charAt(posicionDelUltimoCaracter);

//const ultimoCaracter = (palabra, caracter) => palabra.endsWith(caracter); otra forma de hacerlo


//     if (ultimoCaracter === caracter) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(igualLongitud('lovelace', 'e'));
// console.log(igualLongitud('lovelace', 'f'));
// console.log(igualLongitud('silvi', 'o'));



//Ejercicio 3 Contraseña
// const esValida = (contraseña) => {
//     if (contraseña.length >= 8) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(esValida('contraseniaMuySegura'));
// console.log(esValida('abc123'));
// console.log(esValida('abc123jn'));



//Ejercicio 4 Son iguales
// const sonIguales = (a,b) => {
//   if (a.toLowerCase() === b.toLowerCase()){
//       return true
//   } else {
//       return false
//   } 
// };

// console.log(sonIguales('javascript', 'JavaScript'));
// console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace'));
// console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'));
// console.log(sonIguales('casa', 'CASA'));



//Ejercicio 5 Contar Palabras
// const contarPalabras = (str) => {
//     const textoTroceado = str.split(" ");
//     return numeroPalabras = textoTroceado.length;
// };

// console.log(contarPalabras('javascript')); 
// console.log(contarPalabras('ada lovelace'));
// console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));


//Ejercicio 5 contar palabras- Jonh
// const contarPalabras = (str) =>{
//    return str.match(/\S+/g).length; 
// }
// resultado con expresiones regulares
// Match() : devuelve un arreglo que contiene todas las coincidencias o null si no encuentra ninguna coincidencia






//Ejercicio 6 Burlarse
// const burlarse = (str) => {
//     return reemplazo = str.replaceAll('a','i').replaceAll('e','i').replaceAll('o','i').replaceAll('u','i');
// };

// console.log(burlarse('programar es dificil'));




//Ejercicio 7 es fraccion>1
// const esFraccionMayorAUno = (fraccion) =>{
//  const numeros = fraccion.split("/");
//  const resultado = numeros[0]/numeros[1];
//  return resultado > 1;
// };

// console.log(esFraccionMayorAUno('1/2')); 
// console.log(esFraccionMayorAUno('2/2')); 
// console.log(esFraccionMayorAUno('4/2')); 



//Ejercicio 8 Capitalizar

// const capitalizar = (str) =>{
//     const primerLetra = str.charAt(0);
//     const result = primerLetra.toUpperCase();
//     const total = result + str.slice(1);
//     return total;
// }

// console.log(capitalizar('lovelace')); 
// console.log(capitalizar('había una vez...'));



//Ejercicio 9 aHackerSpeak
// const aHackerSpeak = (str) => {
//     return reemplazo = str.replaceAll('i','1').replaceAll('e','3').replaceAll('a','4').replaceAll('s','5').replaceAll('o','0').replaceAll('I','1').replaceAll('E','3').replaceAll('A','4').replaceAll('S','5').replaceAll('O','0');  
// } 

// console.log(aHackerSpeak('javascript')); // 'j4v45cr1pt'
// console.log(aHackerSpeak('soy una hacker')); // '50y un4 h4ck3r'
// console.log(aHackerSpeak('ADA LOVELACE')); // '4D4 L0V3L4C3'



//Ejercicio 10 obtenerPrimeraOracion(str)
// const obtenerPrimeraOracion = (str) => {
// const oracion = str.split(".");
// return primeraOracion = oracion[0];
// }; 

// console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')); // 'A mí no me preguntes, sólo soy una oración'
// console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')); // 'Tengo varias oraciones.'




//Ejercicio 11 Ocultar Contraseña
// const ocultarContraseña = (contraseña) => {
//   return result = contraseña.toString().replace(/[0123456789]/g, '*');  
// }

// console.log(ocultarContraseña('123456')); // '******'
// console.log(ocultarContraseña('111222333')); // '*********'



//Ejercicio 12 espaciarCaracteres(str)
// const espaciarCaracteres = (str) =>{
//     const sinEspacios = str.replace(' ', '');
//     console.log(sinEspacios);
//     const espacio = sinEspacios.split('').join(' ');
//  return espacio;
// };

// console.log(espaciarCaracteres('javascript')) ;// 'j a v a s c r i p t'
// console.log(espaciarCaracteres('ada lovelace')); // 'a d a l o v e l a c e'




//Ejercicio 13 removerVocales(str)
// const removerVocales = (str) =>{
// const vocales = str.replace(/[aeiou]/gi, '');
// return vocales;
// };

// console.log(removerVocales('javascript')); // 'jvscrpt'
// console.log(removerVocales('ada lovelace')); // 'd lvlc'




//Ejercicio 14 obtenerExtension(archivo)
// const obtenerExtension = (archivo) =>{
// const extension = archivo.split('.');
// return extension[1];
// };

// console.log(obtenerExtension('imagen.png')); // 'png'
// console.log(obtenerExtension('index.html')); // 'html'
// console.log(obtenerExtension('notas.txt')); // 'txt' 



//Ejercicio 15 esPuenteSeguro(puente)
// const esPuenteSeguro = (puente) => {
//  const extension = puente.split(' ');
//  return !(extension.length >1);
// };

// console.log(esPuenteSeguro('### ##')); // false
// console.log(esPuenteSeguro('##### ####')); // false
// console.log(esPuenteSeguro('########')); // true



//Ejercicio 16 Reddit 
//  const obtenerSubreddit = (url) => {
//      let subreddit = url.slice(25);
//      return subreddit.slice(0, subreddit.length -1);
//  };

// console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/')); // 'javascript' 
// console.log(obtenerSubreddit('https://www.reddit.com/r/aww/')); // 'aww'



//Ejercicio 17 convertirEnAcronimo(str)
// const convertirEnAcronimo = (str) => {
// return str.split('').join('.').toUpperCase() + '.';
// }; 

// console.log(convertirEnAcronimo('afip')); // 'A.F.I.P.'
// console.log(convertirEnAcronimo('nasa')); // 'N.A.S.A.'




//Ejercicio 18 Año nuevo esAnioNuevo(fecha)
// const esAnioNuevo = (fecha) => {
// const barra = fecha.split('/');
// const año = barra[2];
// console.log(año);
// return año == 2021 ;

// }

// console.log(esAnioNuevo('03/05/2015')); // false
// console.log(esAnioNuevo('22/01/1987')); // false
// console.log(esAnioNuevo('01/01/2021')) // true




//Ejercicio 19 aprueba(nota)
// const aprueba = (nota) => {
// let notaRedondeada = Math.round(nota);

// return notaRedondeada >= 6;
// }

// console.log(aprueba(1)); // false
// console.log(aprueba(5.4)); // false
// console.log(aprueba(5.5)); // true
// console.log(aprueba(5.6)); // true
// console.log(aprueba(8)); // true




//Ejercicio 20 obtenerDuracionEnSegundos(duracion)
// const obtenerDuracionEnSegundos = (duracion) => {
// const minutos = duracion.split(':');
// const segundos = minutos[1];
// const minutosConvertidos = minutos[0]*60;
// const result = Number(segundos) + Number(minutosConvertidos);
// return result;
// } 

// console.log(obtenerDuracionEnSegundos('00:33')); // 33
// console.log(obtenerDuracionEnSegundos('01:05')); // 65
// console.log(obtenerDuracionEnSegundos('10:42')); // 642