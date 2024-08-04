let num = [5, 8, 2, 9, 3];
//num.sort();
num.push(10);
console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8);
if (pos == -1) {
    console.log("Valor não encontrado");
} else {
    console.log(`O elemento está no indice ${pos} `);
}
