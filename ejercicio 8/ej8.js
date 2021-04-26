

let num1=parseInt(window.prompt("¿Qué edad tienes?"));


if(num1<18){
    document.getElementById("alquiler").innerHTML=`
    <h1>Lo lamentamos pero al ser menor de edad no puede realizar el alquiler</h1>
    `
}
else{
    let carnet=window.prompt("¿Tienes carnet de conducir?SI/NO");

    switch(carnet){
        case 'SI':
            let nombre=window.prompt("Introduce tu nombre")
            let apellidos=window.prompt("Introduzca sus apellidos")
            let ciudad=window.prompt("¿En qué ciudad quiere recoger el vehículo?")
            let dias=parseInt(window.prompt("¿Cuántos días quiere alquilar el vehículo?"))
            switch(dias){
                case 7:
                    document.getElementById("alquiler").innerHTML=`
                    <h1>Datos del cliente</h1>
                    <p>${nombre} ${apellidos}</p>
                    <p>Desea recoger el vehículo en la ciudad de ${ciudad}</p>
                    <p>Durante ${dias} días</p>        
                    <p>El coste del alquiler es de 150 euros</p>
                    `
                    break
                default:
                    document.getElementById("alquiler").innerHTML=`
                    <h1>Datos del cliente</h1>
                    <p>${nombre} ${apellidos}</p>
                    <p>Desea recoger el vehículo en la ciudad de ${ciudad}</p>
                    <p>Durante ${dias} días</p>        
                    <p>El coste del alquiler es de ${dias*25} euros</p>`
                break

            }       
            
            
            break   


        case 'NO':
            document.getElementById("alquiler").innerHTML=`
            <h1>Lo lamentamos pero al no tener el carnet de conducir no puede realizar el alquiler</h1>
            `
            break;

        default:
            document.getElementById("alquiler").innerHTML=`
            <h1>Por favor introduzca SI/NO en mayúsculas</h1>
            `

      
    }    
    

    }

