var cars = [
  { serial: 1, make: 'BMW', model: '545', year: 2004 },
  { serial: 2, make: 'Ford', model: 'Expedition EL', year: 2007 },
  { serial: 3, make: 'BMW', model: '7 Series', year: 2010 },
  { serial: 4, make: 'Audi', model: '90', year: 1989 },
  { serial: 5, make: 'Maybach', model: '62', year: 2012 },
  { serial: 6, make: 'Ford', model: 'Taurus', year: 1998 },
  { serial: 7, make: 'Infiniti', model: 'G', year: 1992 },
  { serial: 8, make: 'Bentley', model: 'Continental Flying Spur', year: 2008 },
  { serial: 9, make: 'Bentley', model: 'Continental', year: 2005 },
  { serial: 10, make: 'Chevrolet', model: 'Express 1500', year: 2003 },
];

var autosFiltrados = cars.filter((auto) => {
  return auto.make === 'Bentley';
});

// console.log(autosFiltrados);

var autosMarcas = cars.map((car) => {
  return car.make;
});

// console.log(autosMarcas);

var autoEncontrado = cars.find((car) => {
  return car.model === '545';
});

// console.log(autoEncontrado);

// console.log(cars.forEach((car) => console.log(car.model)));

var autosViejos = cars.some((car) => {
  return car.year === 1993;
});

console.log(autosViejos);

var nombre = 'Jaime';

var fun = function() {

    
}

