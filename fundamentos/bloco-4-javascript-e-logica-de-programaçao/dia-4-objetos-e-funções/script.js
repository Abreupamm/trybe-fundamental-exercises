let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// //   1 - Imprima no console uma mensagem de 
// boas-vindas para a personagem acima, incluindo 
// seu nome. 
    console.log("Boas Vindas, " + info.personagem + "!")



// 2 - Insira no objeto uma nova propriedade com o 
// nome de chave 'recorrente' e o valor 'Sim' e, em
//  seguida, imprima o objeto no console. 

info['recorrente'] = 'sim';
console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto.
for (dadosPerson in info) {
    console.log(dadosPerson);
}

// 4 - Faça um novo for/in , 
// mas agora mostre todos os valores das chaves do objeto. 
for (valor in info) {
    console.log(info[valor]);
}
// 5 - Agora, defina um segundo objeto com a mesma estrutura
//  (as mesmas chaves) do primeiro e os seguintes valores: 
//  'Tio Patinhas', 'Christmas on Bear Mountain, Dell's 
//  Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
//  Então, imprima os valores de cada objeto juntos de acordo 
//  com cada uma das chaves

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

/* como os 2 objetos possuem o mesmo número de chaves e os nomes das chaves são iguais,
 vc pode usar as chaves de 1 pra acessar os dados nos dois */

    for (valores in info) {
        console.log(info[valores] + ' e '+ info2[valores]);
    }
    
   
    // 6 - Acesse as chaves nome , sobrenome e titulo , que 
    // está dentro da chave livrosFavoritos , e faça um  
    // console.log no seguinte formato: "O livro favorito de Julia 
    // Pessoa se chama 'O Pior Dia de Todos'".
    // lastIndex     
    
    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
            {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
      };

    console.log('O livro favorito de ' + leitor.nome + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

    // 7 - Adicione um novo livro favorito na chave livrosFavoritos , 
    // que é um array . Atribua a esta chave um objeto contendo as 
    // seguintes informações:


novoLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };

    leitor.livrosFavoritos.push(novoLivro);
    console.log(leitor);

    // 8 - Acesse as chaves nome e livrosFavoritos e faça um 
    // console.log no seguinte formato: "Julia tem 2 livros favoritos".

    console.log(leitor.nome + ' tem 2 livros favoritos: ' + leitor.livrosFavoritos[0].titulo + ' e ' + leitor.livrosFavoritos[1].titulo);
    