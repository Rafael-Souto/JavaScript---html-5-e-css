let num = [5, 8, 2, 9, 3]
num.push(1) // coloca a variavel que está dentro do () na última posição dos vetores
num.sort() // coloca os vetores em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor no vetor é ${num[0]}`)

let pos = num.indexOf(8) // Imprime em qual indice o valor solicitado no () está
if(pos == -1){
    console.log('O valor não foi encontrado! ')
} else{
    console.log(`O valor está na posição ${pos}`)
}