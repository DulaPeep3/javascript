function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value > 2025 || fano.value == 0) {
        res.innerHTML = '<strong>[ERRO]</strong> Ano inválido'
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.querySelector('img')
        img.style.display = 'block'
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade < 10) {
                img.src = 'images/bebe-m.jpg'
            } else if (idade > 10 && idade < 22) {
                img.src = 'images/jovem-m.jpg'
            } else if (idade < 60 && idade > 21) {
                img.src = 'images/adulto-m.jpg'
            } else if (idade >= 60) {
                img.src = 'images/idoso-m.jpg'
            }
        } else {
            genero = 'mulher'
            if (idade < 10) {
                img.src = 'images/bebe-f.jpg'
            } else if (idade > 10 && idade < 22) {
                img.src = 'images/jovem-f.jpg'
            } else if (fano.value == 1995) {
                img.src = 'images/future-nostalgia.png'
                res.innerHTML = `<p>Você tem a idade da Dua Lipa! ${idade} anos </p>`
            } else if (idade < 60 && idade > 21) {
                img.src = 'images/adulto-f.jpg'
            } else if (idade >= 60) {
                img.src = 'images/idoso-f.jpg'
            }
        }
       if (fano.value != 1995) {
           res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>` 
       }
    }
    
}