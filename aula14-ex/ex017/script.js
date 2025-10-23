function tabuada(){
    let numero = document.getElementById('txtnumero')
    let tabuada = document.getElementById('tabuada')
    if (numero.value.length == 0) {
        alert('Por favor digite um número!')
    } else {
        let n = Number(numero.value)
        tabuada.innerHTML = ''
        for (let c = 1 ; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n* c} `
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}