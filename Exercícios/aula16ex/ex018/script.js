var num = document.getElementById('fnum')
var ad = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

// Função para garantir que seja digitado um número entre 1 e 100 pelo usuário
function inNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

// Função para que o usuário entre com valores entre um e 100 
function adicionar(){
        if(inNumero(num.value) && ! inLista(num.value, valores)){
            valores.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            ad.appendChild(item)
            res.innerHTML = ''
    } else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

// Função para calcular a soma e média dos valores e o maior e menor valor informado
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
    for(var pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }
        media = soma / tot

 // Impressão dos resultados de soma, média, maior e menor valor informado       
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media.toFixed(1)}</p>`
    }
}