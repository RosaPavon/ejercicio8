

let num1=parseInt(window.prompt("Escribe un número"));
let num2=parseInt(window.prompt("Escribe un número"));

let suma
{document.getElementById("resultado").innerHTML=`
<h1>El resultado de la suma es ${num1+num2}</h1>
`
document.getElementById("resultado").style.color="white"
document.getElementById("resultado").style.backgroundColor="red"

}
let resta
{document.getElementById("resultado2").innerHTML=`
<h1>El resultado de la resta es ${num1-num2}</h1>
`
document.getElementById("resultado2").style.color="black"
document.getElementById("resultado2").style.backgroundColor="green"

}
let multiplicacion
{document.getElementById("resultado3").innerHTML=`
<h1>El resultado de la multiplicación es ${num1*num2}</h1>
`
document.getElementById("resultado3").style.color="white"
document.getElementById("resultado3").style.backgroundColor="violet"

}
let division
{document.getElementById("resultado4").innerHTML=`
<h1>El resultado de la división es ${num1/num2}</h1>
`
document.getElementById("resultado4").style.color="black"
document.getElementById("resultado4").style.backgroundColor="orange"

}
let resto
{document.getElementById("resultado5").innerHTML=`
<h1>El resultado del resto es ${num1%num2}</h1>
`
document.getElementById("resultado5").style.color="white"
document.getElementById("resultado5").style.backgroundColor="yellow"

}




