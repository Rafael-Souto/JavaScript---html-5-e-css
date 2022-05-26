// Função para contar números 
function contar () {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

// Condição para que a contagem seja inicializada 
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando: </br>`
        var i = Number(inicio.value)    
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

// Condição para contagem crescente
        if (i < f) {
            for (var cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} \u{1f449}`
            }
        } else {

// Condição para contagem regressiva            
            for (var cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}