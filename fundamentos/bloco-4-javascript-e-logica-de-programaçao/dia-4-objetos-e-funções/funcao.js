// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(palavra) {
    let inverso = '';
    let palindrome = palavra;
    for (let index = palindrome.length - 1; index >= 0; index -= 1) {
        inverso = inverso + palindrome[index];
    }
    if (palindrome === inverso) {
        console.log(true);
    } else {
        console.log(false);
    }
}
verificaPalindrome('arara');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorIndice(array) {
    let maior = Math.max(...array);
    let indice = array.indexOf(maior, 0);
    console.log(indice);
}

maiorIndice([2, 3, 6, 7, 10, 1]);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function menorIndice(array1) {
    let menor = Math.min(...array1);
    let indice = array1.indexOf(menor, 0);
    console.log(indice);
}
menorIndice([2, 4, 6, 7, 10, 0, -3]);


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function maiorNome(nomes) {

    let todosTamanhos = [];

    for (i = 0; i < nomes.length; i += 1) {
        let convert = nomes[i];
        let tamanho = convert.length;
        todosTamanhos.push(tamanho);
    }

    let maiorTodosTamanhos = Math.max(...todosTamanhos);
    let indicemaior = todosTamanhos.indexOf(maiorTodosTamanhos, 0);
    let indicenome = indicemaior;
    console.log(nomes[indicenome]);

}
maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
