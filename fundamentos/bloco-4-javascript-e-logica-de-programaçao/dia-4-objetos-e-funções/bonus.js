// 1 - (Difícil) Faça um programa que receba uma string em algarismos
//  romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo
//  de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do 
// array é uma letra.

// Que tal criar um objeto que associe cada letra a um numeral para fácil 
// consulta?
// Atenção! Quando você tem um número pequeno à direita de um número
//  grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto,
//   se o número pequeno está à esquerda de um número maior que ele, ele 
//   deve ser subtraído. Exemplo: IX = 10 - 1 = 9.


let ValorRomanos = {
I: 1,
V: 5,
X: 10,
L: 50,
C: 100,
D: 500,
M: 1000
};

function valor(letra){
    let somaRomanos;
for( let i = 0; i < letra.length; i += 1){
    if(letra[i] == ValorRomanos[i]){
        somaRomanos = ValorRomanos.letra[i];
    }
}
}
valor("I")