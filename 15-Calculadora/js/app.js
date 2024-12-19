let sumarBoton = document.getElementById("sumar");

sumarBoton.addEventListener("click", calcular);

function calcular(evento){
    
    let form = document.getElementById("formulario");
    let opa = form['operandoA'];
    let opb = form['operandoB'];

    let resultado = parseInt(opa.value) + parseInt(opb.value);

    if(isNaN(resultado)){
        resultado = "No se han ingresado valores para calcular.";
    }

    let div = document.createElement("div");
    div.innerText = `El resultado es: ${resultado}`;

    let resultDiv = document.getElementById("resultado");

    
    if (resultDiv) {
        if (resultDiv.firstChild) {
            resultDiv.removeChild(resultDiv.firstChild);
        }
            resultDiv.appendChild(div);
    }
}
