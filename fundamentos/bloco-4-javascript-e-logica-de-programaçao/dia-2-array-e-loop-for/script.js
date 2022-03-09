let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// exercício 2
let soma = 0;
for (let s = 0; s < numbers.length; s += 1) {
    soma += numbers[s];
}
console.log(soma);

//exercício 3
let somaA = soma / numbers.length

console.log(somaA);

// exercício 4

if (somaA > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}

// exercício 5
let valorMax = Math.max(...numbers);

for (let v = 0; v < numbers.length; v += 1) {
    if (numbers[v] === valorMax) {
        console.log(numbers[v])
    }

}

// exercício 6
let impar = [];
for (let r = 0; r < numbers.length; r += 1) {
    if(numbers[r] %2 != 0){
        impar.push(numbers[r]);
    }
}
 if(impar == null){
     console.log("Nenhum valor ímpar encontrado");
 } else {
     console.log(impar);
 }

 // exercício 7
let valorMin = Math.min(...numbers);

for (let m = 0; m < numbers.length; m += 1) {
    if (numbers[m] === valorMin) {
        console.log(numbers[m])
    }

}