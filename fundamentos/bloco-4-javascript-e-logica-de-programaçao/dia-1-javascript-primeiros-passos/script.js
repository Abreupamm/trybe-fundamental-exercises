//exercicio 1

const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// exercicio 2
const valor1 = 30;
const valor2 = 6;

if (valor1 > valor2) {
    console.log(valor1);
} else {
    console.log(valor2)
}

// exercicio 3
const valorA = 100;
const valorB = 400;
const valorC = 500;

if (valorC < valorA > valorB) {
    console.log(valorA);
} if (valorA < valorB > valorC) {
    console.log(valorB);
} else {
    console.log(valorC);
}

// exercicio 4
const teste = -3;

if (teste > 0) {
    console.log("POSITIVE");
} if (teste < 0) {
    console.log("NEGATIVE");
} else {
    console.log("ZERO");
}

// exercicio 5
const angulo1 = 360;
const angulo2 = -90;
const angulo3 = -90;
const soma = angulo1 + angulo2 + angulo3;
const resultado = "Erro";

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (soma == 180) {
        console.log("True");
    } else {
    console.log("False");
} 
}
else {
    console.log(resultado);
}

// exercicio 6
let peça = "PEÃO"

switch (peça.toLowerCase()) {
    case "peão":
        console.log("Os peões se movem somente para frente, uma casa por vez");
        break;
    case "bispo":
        console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro");
        break;
    case "torre":
        console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas");
        break;
    case "cavalo":
        console.log("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto");
        break;
    case "rainha":
        console.log("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
        break;
    case "rei":
        console.log("O rei pode se mover para qualquer casa adjacente");
        break;
    default:
        console.log("Essa peça não existe no jogo de xadrez");

}

// exercicio 7
let nota = 98;
if (nota > 100 || nota < 0) {
    console.log("Erro")
} else {
    if (nota >= 90) {
        console.log("A");
    } else if (nota >= 80) {
        console.log("B");
    } else if (nota >= 70) {
        console.log("C");
    } else if (nota >= 60) {
        console.log("D");
    } else if (nota >= 50) {
        console.log("E");
    } else {
        console.log("F")
    }
}
// exercicio 8
const A = 10;
const B = 20;
const C = 32;

if (A % 2 || B % 2 || C % 2) {
    console.log("True");
} else {
    console.log("False")
}
 
// exercicio 9

const A1 = 10;
const B1 = 20;
const C1 = 32;


if (A1 % 2 || B1 % 2 || C1 % 2) {
    console.log("False");
} else {
    console.log("True")
}