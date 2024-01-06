var num = document.getElementById('txtn')
var lista = document.getElementById('tabsel')
var res = document.getElementById('res')
var valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)

    } else {
        alert('Número inválido ou já existente na lista')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var tot = valores.length
        var maior = 0
        var menor = 0
        var soma = 0 
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML += `Ao todo, temos <strong>${tot}</strong> números cadastrados<br><br>`
        res.innerHTML += `O maior valor informado é <strong>${maior}</strong><br><br>` 
        res.innerHTML += `O menor valor informado é <strong>${menor}</strong><br><br>`
        res.innerHTML += `Somando todos os valores, temos <strong>${soma}</strong><br><br>`
        res.innerHTML += `A média dos valores é <strong>${media}</strong><br>`
    }
}