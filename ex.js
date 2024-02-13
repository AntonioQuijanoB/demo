// 1. Imprime por consola el string 'Hello World'.
console.log('Hola mundo');
// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
let nombre = 'Antonio';
const edad = 28;
console.log(nombre);
console.log(edad);
// 3. Cambia ahora el valor de una de las dos variables e imprime por consola.
nombre = 'Juan';
console.log(nombre);
// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
let num1 = 2;
let num2 = 4;
let resultado = num1 + num2;
console.log(num1 + ' + ' + num2 + ' = ' + resultado);
// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
let cadena1 = 'Me gusta';
let cadena2 = 'en el mar';
console.log(`${cadena1} nadar ${cadena2}`);
// 6. Crea una función que imprima por consola el string 'Hello World'.
function greetings() {
  console.log('Hello world');
}
greetings();

// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
function multiplicacion(n1, n2) {
  console.log(
    'La multiplicacion de los dos numeros introducidos como parametro es: ' +
      n1 * n2
  );
}
multiplicacion(5, 7);
// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function makeCubed(n1) {
  return 'El resultado es: ' + n1 ** 3;
}
makeCubed(4);
// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro.
function calcrectangle(n1, n2, res) {
  return 'El area del rectangulo es: ' + n1 * n2;
}
calcrectangle(6, 3);

// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.

// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
const random = () => {
  const n = Math.random();
  const result = Math.trunc(n * 11);
  console.log(result);
};
for (let i = 0; i < 10; i++) {
  random();
}

// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
function par(n1) {
  if (n1 % 2 == 0) {
    console.log('El numero es par');
  } else {
    console.log('El numero es impar');
  }
}
par(4);
// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
function invertido(word) {
  for (let i = word.length; i >= 0; i--) {
    console.log(word[i]);
  }
}
invertido('ejecutar');
// 14. Crea una función que devuelva la tabla de multiplicar de un número introducido como parámetro.
// LLama a la función desde console.log() para que el resultado se imprima por consola
const multiplication = (num) => {
  let result = [];
  for (let i = 0; i < 11; i++) {
    result.push(num * i);
  }
  return result;
};
console.log(multiplication(5));
// 15. Crea una función que reciba un número por parámetros y retorne si el número recibido es un número primo.
// LLama a la función desde console.log() para que el resultado se imprima por consola
