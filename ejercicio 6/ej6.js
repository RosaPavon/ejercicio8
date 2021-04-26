

let preg=window.prompt("¿Qué operación deseas realizar? \nSumar \nRestar \nMultiplicar \nDividir \nResto");
let num1=parseInt(window.prompt("Escribe un número"));
let num2=parseInt(window.prompt("Escribe un número"));

if(preg==="sumar"){
    document.getElementById("resultado").innerHTML=`
    <h1>El resultado de sumar ${num1} y ${num2} es de ${num1+num2}</h1>
    `
}
else if(preg==="restar"){
    document.getElementById("resultado").innerHTML=`
    <h1>El resultado de restar ${num1} y ${num2} es de ${num1-num2}</h1>
    `
}
else if(preg==="multiplicar"){
    document.getElementById("resultado").innerHTML=`
    <h1>El resultado de multiplicar ${num1} y ${num2} es de ${num1*num2}</h1>
    `
}
else if(preg==="dividir"){
    document.getElementById("resultado").innerHTML=`
    <h1>El resultado de dividir ${num1} y ${num2} es de ${num1/num2}</h1>
    `
}
else if(preg==="resto"){
    document.getElementById("resultado").innerHTML=`
    <h1>El resultado del resto ${num1} y ${num2} es de ${num1%num2}</h1>
    `
}
else{    document.getElementById("resultado").innerHTML=`
<h1>Por favor introduzca una palabra correcta</h1>
`

}

