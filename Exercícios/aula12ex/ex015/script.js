function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 4) {
                // Bebê
                img.setAttribute('src', 'bebem.jpg')
            } else if (idade < 11) {
                // Criança
                img.setAttribute('src', 'criancam.jpg')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'adolescentem.jpg')
            } else if (idade < 35) {
                // Jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 60) {
                // Maduro
                img.setAttribute('src', 'madurom.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosom.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                // Bebê
                img.setAttribute('src', 'bebef.jpg')
            } else if (idade < 11) {
                // Criança
                img.setAttribute('src', 'criancaf.jpg')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'adolescentef.jpg')
            } else if (idade < 35) {
                // Jovem
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 60) {
                // Maduro
                img.setAttribute('src', 'madurof.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosof.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img)
    }
}