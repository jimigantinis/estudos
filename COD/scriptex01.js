function contagem(){

    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")


    var contar = document.getElementById("contar")


    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    

    if(i == 0){
        window.alert("Impossivel contar")


    }else{
        if(p == 0){
            window.alert("passo invalido considerando o passo 1")
            p += 1

        }
    }
     
    //var espaco = ""

    var c = i
    var vaga = " "

     while(c <= f){
         c += p
         vaga += c + " "
         contar.innerHTML =  `contando......${vaga}`
   }


}