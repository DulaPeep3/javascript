function contar() {
    let contador = document.getElementById('inicio')
    let fimcont = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if (contador.value === '' || passo.value === '' || fimcont.value === '' || Number(passo.value) <= 0) {
        res.innerHTML = '<p>Impossível contar</p>'
    } else {
        let i = Number(contador.value)
        let f = Number(fimcont.value)
        let p = Number(passo.value)
        if(i <= f){ // Contagem Crescente
            res.innerHTML = 'Contando...'
            for(let c = i ; c <= f ; c += p) {
                res.innerHTML += ` ${c} &#x1F449; `
            }
        } else { //Contagem Regressiva
            res.innerHTML = 'Contagem regressiva'
            for(let c = i; c >= f ; c -= p) {
                res.innerHTML += ` ${c} &#x1F449; `
            }
        }

        res.innerHTML += '<br> &#127937;'
    
    }


}