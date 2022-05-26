var idade = 66

if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
        console.log(`Vota opcional`)
    } else {
        console.log(`Vota Obrigatório`)
}