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