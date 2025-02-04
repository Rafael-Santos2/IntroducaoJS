const calcular = (operacao) => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Erro: Insira números válidos!";
    } else {
        switch (operacao) {
            case "somar":
                resultado = num1 + num2;
                break;
            case "subtrair":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                resultado = num2 !== 0 ? (num1 / num2).toFixed(2) : "Erro: Divisão por zero!";
                break;
            default:
                resultado = "Operação inválida";
        }
    }

    document.getElementById("resultado").innerText = "O valor é: " + resultado;
};

const converterDolar = () => {
    let num1 = parseFloat(document.getElementById("num3").value);
    let taxaDolar = 5.81;
    let reais = isNaN(num1) ? "Erro: Insira um número válido!" : (num1 * taxaDolar).toFixed(2);
    
    document.getElementById("resultadoDolar").innerText = "O valor em reais é: R$ " + reais;
};
