/// gerar um numero aleatorio entre 0 e 1

document.querySelector("#div").addEventListener("click", function(){
    let id =  Math.floor((Math.random() * (2) + 1))
    
})

// colocar o valor

let valorAleatorio =  Math.floor((Math.random() * (2) + 1))

let colocarValorDiv = document.querySelector("#div-2").attributes[0]
let colocarValor = colocarValorDiv.value
colocarValorDiv.value = valorAleatorio
console.log(colocarValor)



/// pegar o valor

let pegarValorDiv = document.querySelector("#div-2").attributes[1]
let value = pegarValorDiv.value;

console.log()