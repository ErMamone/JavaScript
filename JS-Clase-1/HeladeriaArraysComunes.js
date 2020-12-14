let monto;
let helado = [20,30,40,10,20,40];
let contador = 0;
let heladoComprar = 0;

monto = parseInt(prompt("Ingrese su monto: "));

if (monto<0 || monto > 999999999){
	monto = parseInt(prompt("Error, reingrese su monto: "));
}

for (var i = helado.length - 1; i >= 0; i--) {
	if (monto >= helado[i]){
		if(helado[i] == heladoComprar){
			contador++
		}else if (helado[i] > heladoComprar){
			contador = 1;
			heladoComprar=helado[i];
		}
	}
}

if(contador >= 2){
	alert("El helado mas caro que compro es de "+heladoComprar+" pesos y "
		+contador+" cantidad de veces ya que no era uno solo con ese precio");
	monto = monto - (heladoComprar*contador);
	alert("El vuelto es de: "+monto);
}else if (contador == 1){
	alert("El helado mas caro que compro vale "+heladoComprar+" pesos");
	monto= monto-heladoCompprar
}else{
	alert("No pudo comprar ningun helado");
}

let boleto=15;

if(monto > (boleto*3)){
	alert("El pobre compra tres boletos y regala el vuelto");
	monto=0;
}else if(monto > (boleto*2)){
	alert("El ciruja este al final compra 2 boletos");
	monto=monto-(boleto*2);
	alert("El vuelto despues de comprar 2 boletos es de: "+monto);
}else if(monto > boleto){
	alert("Compra un boleto el pobre rancio");
	monto = monto-boleto
	alert("El vuelto de 1 boleto es de: "+monto);
}else {
	alert("No le da para 1 boleto al pobre de mierda este");
}
