// exercício 1
/* algoritimo:
1- criar uma varável com valor 1
2- criar um loop que percorra todos os números de 1 a 10
3- multiplicar o resultado com a variável do item 1
4- usar console log para imprimir resultado */

let multiplica = 1;
for (let i = 2; i <= 10; i += 1){
multiplica *= i;
}
console.log(multiplica)

//exercício 2
/* 1- criar uma variável que recebe a palavra
2- criar uma variável para receber o palavra invertida
3- criar um loop para percorrer a palavra
4- adicionar leta por letra no inicío da variável criada no item 2
*/


let word = 'Pamela';
let wordInvertido = "";
for(let index = word.length -1; index >= 0; index -= 1){
wordInvertido = wordInvertido.concat(word[index]);
}
console.log(wordInvertido);