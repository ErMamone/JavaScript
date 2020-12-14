function sumar (a,b, cb){
	const r = a + b;

	cb(r);
}

function callBack(result){
	console.log('resultado :', result);
}

//sumar(2,3,callBack);

//FatArrowFunciton con return implicito
//Al ser una linea con la suma sin llaves el return se vuelve implicito, es decir retorna sin necesidad de la palabra reservada
const miFatArrowFunction = (a, b) => a + b

//FatArrowFunction con return, para funciones de mas de una linea
const otraFAF = (a, b) => {
	return a+b
}


const r = otraFAF(1,2);
//console.log(r);

sumar(2,3, function (r) { 
	console.log('Soy una funcion anonima, el resultado es: ',r);
})
