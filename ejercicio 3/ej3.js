

let nombre=window.prompt("Escribe tu nombre")
let edad=parseInt(window.prompt("Escribe tu edad"));
let mensaje = edad<= 18 ? document.getElementById("resultado").innerHTML=` <h1>Hola, ${nombre} eres menor de edad</h1>` : document.getElementById("resultado").innerHTML=`<h1>Hola, ${nombre} eres mayor de edad</h1>`
if(edad<18){
    document.getElementById("resultado").innerHTML=`
    <h1>Hola, ${nombre} eres menor de edad</h1>
    `
}
else{    document.getElementById("resultado").innerHTML=`
<h1>Hola, ${nombre} eres mayor de edad</h1>
`
}
switch(edad){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        document.getElementById("resultado").innerHTML=`
        <h1>Hola, ${nombre} eres menor de edad</h1>
        `;
        break;
    default:
        document.getElementById("resultado").innerHTML=`
        <h1>Hola, ${nombre} eres mayor de edad</h1>
        `;
  
}
