// Declarativas

function miFunction() {
  return 3;
}

miFunction(); // Asi se manda llamar una funcion.

console.log(miFunction());

// Expresiva

var miFunction2 = function (a, b) {
  return a + b;
};

miFunction2();

console.log(miFunction2(1, 5));
