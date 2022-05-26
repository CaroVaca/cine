//Diseñar un algoritmo que recorra
//las butacas de una sala de cine
//y determine cuantas butacas desocupadas hay
let cantDeButacas: number = Number(
  prompt("Ingrese la cantidad de butacas que hay en el cine:")
);

let cine: boolean[] = new Array(cantDeButacas);
let butacasDesocupadas: number = 0;

for (let i: number = 0; i < cantDeButacas; i++) {
  cine[i] = Boolean(
    prompt("La butaca esta ocupada? (true si es si y false si es no)")
  );
  if (cine[i] === false) {
    butacasDesocupadas++;
  }
}
console.log("La cantidad de butacas desocupadas son:" + butacasDesocupadas);
