let padre = document.getElementById('mostrar');
let num = document.querySelectorAll('li');
let suma = 0;

const crearArray = () => {
  let numArray = [];
  for (let i = 0; i < num.length; i++) {
    numArray.push(Number(num[i].textContent));
  }
  return numArray;
};

let nArray = crearArray();

const mostrar = (palabra, variable) => {
  let hijo = document.createElement('h3');
  hijo.innerHTML = `${palabra} : ${variable}`;
  padre.appendChild(hijo);
};

//1
const promedio = (a) => {
  a.forEach((num) => (suma = num + suma));
  let promedio = suma / num.length;
  mostrar('El promedio es', promedio);
};
promedio(nArray);
//2
const menor = (a) => {
  let campeon = a[0];
  a.forEach((num) => (campeon > num ? (campeon = num) : campeon));
  mostrar('El menor es', campeon);
};
menor(nArray);
//3
const mayor = (a) => {
  let campeon = a[0];
  a.forEach((num) => (campeon < num ? (campeon = num) : campeon));
  mostrar('El mayor es', campeon);
};
mayor(nArray);
//4
const repetidor = () => {
  let contador = 0;
  let pos = 0;
  let arrayRepes = [];
  let nArray = crearArray();
  nArray.forEach((num) => {
    for (let i = 0; i < nArray.length; i++) {
      if (num == nArray[i]) {
        contador += 1;
      }
    }
    arrayRepes.push(contador);
    contador = 0;
  });
  let campeon = arrayRepes[0];
  for (let i = 0; i < arrayRepes.length; i++) {
    if (campeon < arrayRepes[i]) {
      campeon = arrayRepes[i];
      pos = i
    }
  }
  mostrar('El que mas se repite es', nArray[pos]);
};
repetidor();

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
