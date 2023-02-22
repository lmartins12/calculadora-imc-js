function calcularIMC(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    let resultado = peso / (altura/100*altura/100)

    if (isNaN(resultado)) {
        document.getElementById("resultado").innerHTML = "Preencha os campos corretamente.";
    } else{
        document.getElementById("resultado").innerHTML = "Seu IMC é " + resultado.toFixed(1) + ".";
    }
}
