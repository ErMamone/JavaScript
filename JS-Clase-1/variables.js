/*
var = alcance global (lo puede ver todo el mundo) no es necesario el valor
const = constante, no cambia nunca (parecido a enums) se debe dar el valor directamente
let	= limita el alcance al scope donde estas (como variables de funciones) no necesita el valor directamente
*/

recipiente = "Puta";
alert(recipiente);


/*
let numero = null

las variables pueden ser null sin problema, interpretan al null como falta de dato sin romepr

dif null y undefined

null = no tiene valor, es decir que no se lo asignaron y se mantiene asi, se queda vacia
undefined = se le agregara el valor, falta por definirlo
NaN = valor y tipo de dato erroneo (por ejemplo, String * int = NaN)
*/


let numero = 10;

numero += 5;

//funcion de escritura de documento
document.write(numero);