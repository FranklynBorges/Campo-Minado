let quad = document.querySelectorAll(".quadrado")

quad.forEach(quadrado => {
    
    const numRandom = Math.floor(Math.random() * (3) + 1) - 1
    
    quadrado.setAttribute('value', numRandom);
    
})



quad.forEach(quadrado => {
    quadrado.addEventListener("click", () => {
        let valorBomba = parseInt(quadrado.getAttribute("value"))

        if (valorBomba === 2){
            quadrado.style.backgroundColor = "red"
        } else {
            quadrado.style.backgroundColor = "green"
        }

        
    })
})
