// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(palavra){
    let inverso = '';
    let palindrome = palavra;
    for(let index = palindrome.length -1; index >= 0; index -= 1){
    inverso = inverso + palindrome[index];
    }
    if(palindrome === inverso){
        console.log(true);
    }else {
        console.log(false);
    }
}
verificaPalindrome('arara');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorIndice(array){
   let maior = Math.max(...array);
   let indice = array.indexOf(maior,0);
   console.log(indice);
}

maiorIndice([2, 3, 6, 7, 10, 1]);