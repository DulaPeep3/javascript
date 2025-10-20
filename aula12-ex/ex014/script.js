function carregar(){
    var img = document.getElementById('img');
    var msg = document.getElementById('msg');
    var data = new Date()
    var hora = data.getHours()
    var text = document.querySelectorAll('.text')
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `<p>Agora são ${hora} horas da manhã.</p>`
        img.src = "../images/dia.jpg"
        document.body.style.background = '#B3E5FC'
        text[0].style.color = 'black'
        text[1].style.color = 'black'
        
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML =  `<p>Agora são ${hora} horas da tarde.</p>`
        img.src = "../images/tarde.jpg"
        document.body.style.background = '#FFB74D'
    } else {
        msg.innerHTML = `<p>Agora são ${hora} horas da noite.</p>`
        img.src = "../images/noite.jpg"
        document.body.style.background = '#283593'
    }
}