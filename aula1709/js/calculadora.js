// Captura os valores do usuário
var a = parseFloat(prompt("Digite o valor de A: "));
var b = parseFloat(prompt("Digite o valor de B: "));

// Declara a função
function somar(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function areaquadrado(a) {
    return a * 2;
}

function areatriangulo(a, b) {
    return a * b / 2;
}

function arearetangulo(a, b) {
    return a * b;
}

var opcao = parseInt(prompt("1 - somar 2 - subtracao 3 - multiplicacao 4 - divisao 5 - areaquadrado 6 - areatriangulo 7 - arearetangulo"));

if (opcao == 1) {
    console.log(somar(a, b));
}
else if (opcao == 2) {
    console.log(subtracao(a, b));
}
else if (opcao == 3) {
    console.log(multiplicacao(a, b));
}
else if (opcao == 4) {
    console.log(divisao(a, b));
}
else if (opcao == 5) {
    console.log(areaquadrado(a, b));
}
else if (opcao == 6) {
    console.log(areatriangulo(a, b));
}
else if (opcao == 7) {
    console.log(arearetangulo(a, b));
}