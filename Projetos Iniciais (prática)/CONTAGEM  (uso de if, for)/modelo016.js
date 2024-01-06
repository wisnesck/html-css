function contar() {
  const ini = document.getElementById('txti')
  const fim = document.getElementById('txtf')
  const passo = document.getElementById('txtp')
  const res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    //alert('[ERRO] digite um número')
  } else {
      res.innerHTML = 'Contando: <br> '
      const i = Number(ini.value)
      const f = Number(fim.value)
      const p = Number(passo.value)

      if (p <= 0) {
        alert('Passo inválido! Coloque um número em PASSO')
      }
      
      if(i < f) {
        //contagem crescente
        for (var c = i; c <= f; c += p) {
          res.innerHTML += `${c} \u{1F449}`
        }
      } else {
        //contagem regressiva
        for (var c = i; c >= f; c -= p)  {
          res.innerHTML += `${c}\u{1F449}`
        }
      }
      res.innerHTML += `\u{D83D}\u{DEA9}`
  }
}
