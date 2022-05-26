//Diseñar un algoritmoque recorra
//las butacas de una sala de cine
//y determine cuantas butacas desocupadas hay
let cantDeButacas: number= Number(prompt("Ingrese la cantidad de butacas que hay en el cine:"));

let cine: string[] = new Array(cantDeButacas);
let i: number;
let butacasDesocupadas: number = 0;

for (i= 0; i<cantDeButacas; i++){
  cine[i]= Number (prompt("Ingrese true si esta ocupada o  false si no esta ocupada:" + i));
  } if (cine[i] === "false") {
       butacasDesocupadas++;
    }
}
console.log(cine);
console.log("La cantidad de butacas desocupadas son:" + butacasDesocupadas);

