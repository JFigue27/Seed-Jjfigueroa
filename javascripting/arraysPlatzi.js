var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa'];

console.log(frutas[1]);
console.log(frutas.length);

// var masFrutas = frutas.push('Uvas');
frutas.push('Pera');
console.log(frutas);
// console.log(masFrutas.length);

var menos = frutas.pop();
console.log(frutas);

frutas.unshift('Sandia');
console.log(frutas);

frutas.shift();
console.log(frutas);

console.log(frutas.indexOf('Plátano'));
console.log(frutas.includes('Plátano')); 
console.log(frutas.includes(1)); 
