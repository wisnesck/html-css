function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')

    const data = new Date()
    const hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = './Imagens/manha.png'
        document.body.style.background = '#deb894'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
       img.src = './Imagens/tarde.png'
       document.body.style.background = '#429f70'
    } else {
        // BOA NOITE!
       img.src = './Imagens/noite.png'
       document.body.style.background = '#041819'
    }
}