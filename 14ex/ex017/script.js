function multiplicar(){
    var numero = document.getElementById('numero')
    var n = Number(numero.value)
    if (n == 0){
        window.alert("Por favor, digite um número!")
    } else {
        var t = 1
        var vaga = ""
        while (t <= 10) {
            vaga += t * n + ' | '
            t ++
            tab.innerHTML = ` ${vaga}`
        }
    }
}