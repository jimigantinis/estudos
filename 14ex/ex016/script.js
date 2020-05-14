function contagem(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (i == 0) {
        contar.innerHTML = `Impossível contar!`
    } else if (p == 0){ 
        p = 1   
        window.alert("passo invalido considerando o passo 1")
        
        var r = i
        var vaga = ""
        while (r <= f) {
            vaga += r + " "
            r += p
            contar.innerHTML = `Passo ${vaga}`
        }
    } else{
        var r = i
        var vaga = ""
        while (r <= f) {
            vaga += r + " 👉"
            r += p
            contar.innerHTML = `Passo ${vaga}`
        }
    }
} 