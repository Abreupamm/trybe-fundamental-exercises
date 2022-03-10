// exercício 1
/* algoritimo:
1- criar uma varável com valor 1
2- criar um loop que percorra todos os números de 1 a 10
3- multiplicar o resultado com a variável do item 1
4- usar console log para imprimir resultado */

let multiplica = 1;
for (let i = 2; i <= 10; i += 1) {
    multiplica *= i;
}
console.log(multiplica)

//exercício 2
/* 1- criar uma variável que recebe a palavra
2- criar uma variável para receber o palavra invertida
3- criar um loop para percorrer a palavra
4- adicionar leta por letra ao final da variável criada no item 2
*/

let word = 'Pamela';
let wordInvertido = "";
for (let index = word.length - 1; index >= 0; index -= 1) {
    wordInvertido = wordInvertido.concat(word[index]);
}
console.log(wordInvertido);

/*3- Considere o array de strings abaixo:
Copiar

Escreva dois algoritmos: um que retorne a maior palavra deste
 array e outro que retorne a menor. Considere o número de
  caracteres de cada palavra. */
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior;
let menor;

for (i = 0; i <= array.length; i += 1) {

}

/*4- Um número primo é aquele divisível apenas por 1 e por ele
 mesmo. 
Sabendo disso, escreva um algoritmo que retorne o maior número
 primo entre 0 e 50. */

let numeros;
let inicio = 0;
let final = 50;
for(let index1 = inicio; index1 <= final; index1 += 1){
    if(index1 / 1 && index1 / index1)
}