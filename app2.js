
// Coincidencias Basicas
// .       - Cualquier Caracter, excepto nueva linea
// \d      - Cualquier Digitos (0-9)
// \D      - No es un Digito (0-9) en mayusculas normalmente es lo contrario
// \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
// \W      - No es un Caracter de Palabra.
// \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
// \S      - No es un Espacio, Tab o nueva linea.

// mencionar los simbolos escapados (CASI TODOS LOS SIMBOLOS SE VAN A TENER QUE ESCAPAR)

// .
// /

// buscar los numeros que tenemos pensar en la estructura 3 numeros espacios 3 numeros 

// \d\d\d\s\d\d\d\s\d\d\s\d\d
// \d\d\d.\d\d\d.\d\d.\d\d

// Limites
// \b      - Limite de Palabra
// \B      - No es un Limite de Palabra
// ^       - Inicio de una cadena de texto
// $       - Final de una cadena de texto

// Cuantificadores:
// *       - 0 o Más
// +       - 1 o Más
// ?       - 0 o Uno
// {3}     - Numero Exacto
// {3,4}   - Rango de Numeros (Minimo, Maximo)


// ejemplo de conjuntos de caracteres
// [a-z]+
// [a-zA-Z]+
// \w+
// [a-zA-Z.@_://]+
// [0-5]
// [^a-zA-Z]

// Grupos
// ( )     - Grupo
// |       - Uno u otro