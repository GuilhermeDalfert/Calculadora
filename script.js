let clearT = document.getElementById("C");
let clearUm = document.getElementById("CE");
let ponto = document.getElementById("ponto");
let porcentagem = document.getElementById("porcentagem");
let igual = document.getElementById("igual");
let maismenos = document.getElementById("maismenos");

let calculoPassado = document.getElementById("passada");
let calculoAtual = document.getElementById("resultadoAtual");

//Botões
//Numeros

document.querySelectorAll(".numero").forEach(botao => {
    botao.addEventListener("click", () => {
    calculoPassado.textContent = "";
    calculoAtual.textContent += botao.textContent;
});
})

ponto.addEventListener("click", () => {
    calculoPassado.textContent = "";
    calculoAtual.textContent += ponto.textContent;
})

//Operadores

document.querySelectorAll(".operadores").forEach(botao => {
    botao.addEventListener("click", () => {
    calculoPassado.textContent = "";
    calculoAtual.textContent += botao.textContent;
});
});

porcentagem.addEventListener("click", () => {
    calculoPassado.textContent = "";
    calculoAtual.textContent += porcentagem.textContent;
})

maismenos.addEventListener("click", () => {
    calculoPassado.textContent = "";
    if (calculoAtual.textContent != ""){
        if(calculoAtual.textContent.includes("+") || calculoAtual.textContent.includes("-")){
            for (let i = calculoAtual.textContent.length - 1; i >= 0; i--){
                if(calculoAtual.textContent[i]=="+"){
                    calculoAtual.textContent = calculoAtual.textContent.substring(0, i) + "-" + calculoAtual.textContent.substring(i+1);
                    break;
                }
                else if(calculoAtual.textContent[i]=="-"){
                    calculoAtual.textContent = calculoAtual.textContent.substring(0, i) + "+" + calculoAtual.textContent.substring(i+1);
                    break;
                }
            }
        }
        else{
            calculoAtual.textContent = "-" + calculoAtual.textContent;
        }
    }
})

//Outros
clearT.addEventListener("click", () => {
    calculoPassado.textContent = "";
    calculoAtual.textContent = "";
});
clearUm.addEventListener("click", () => {
    calculoPassado.textContent = "";
    calculoAtual.textContent = calculoAtual.textContent.slice(0, -1);
});

//Envia
igual.addEventListener("click", () => {
    let aux = calculoAtual.textContent;
    let resultado = math.evaluate(calculoAtual.textContent);
    calculoPassado.textContent = aux + "=";
    calculoAtual.textContent = resultado;
});


