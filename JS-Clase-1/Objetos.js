let pc = {
	nombre: "Firulais",
	CPU: "I7 7700k",
	ram: "16 Gb",
	disco: "SSD 256GB"
}

let pc2= ["Firulais","I7 7700k","16 GB", "SSD 256GB"];
pc2.disco=20;

//For in devuelve la posicion, es decir en pc2 da 0, 1 ,2 si mostras la variable que seteas
//Si usas esa variable dentro del objeto (es decir) objeto[variable] muestra el dato dentro de esa posicion
for (pcC in pc2){
	console.log(`Caracteristicas de la PC: ${pcC}`);
}

console.log("");

//For of en la variable que itera, obtiene el valor de iteracion del objeto,
//es decir el valor 1 que es Firulais, no el valor 1 como primer valor
for (pcC of pc2){
	console.log(`Caracteristicas de la PC: ${pcC}`);
}

console.log("");


const hero = {
	Altura: "1.80cm", 
	Peso: "68kg", 
	Superpoder: "no procastinar"
};

for (caracteristica in hero) {
        console.log(`Caracteristica: ${caracteristica} = ${hero[caracteristica]}`);
}