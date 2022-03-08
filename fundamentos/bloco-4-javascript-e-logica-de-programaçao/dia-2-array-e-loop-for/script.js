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