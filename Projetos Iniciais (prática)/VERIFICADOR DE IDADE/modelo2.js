function verificar() {
    
    const data = new Date()
    const ano = data.getFullYear()

    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        const gerero = ''
        const img = document.getElementById('foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                img.src = './Imagens/menino.png'
            } else if (idade >=10 && idade < 21) {
                img.src = './Imagens/jovem-m.png'
            } else if (idade >= 21 && idade < 50) {
                img.src = './Imagens/homem.png'   
            } else {
                img.src = './Imagens/idoso.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                img.src = './Imagens/menina.png'
            } else if (idade >=10 && idade < 21) {
                img.src = './Imagens/jovem-f.png'
            } else if (idade >= 21 && idade < 50) {
                img.src = './Imagens/mulher.png'   
            } else {
                img.src = './Imagens/idosa.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}