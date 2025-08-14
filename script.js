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
    //*calculoAtual.textContent = calculoAtual.textContent.replace(/%/g, "/100");*//
    let resultado = eval(calculoAtual.textContent);
    calculoPassado.textContent = calculoAtual.textContent + "=";
    calculoAtual.textContent = resultado;
});