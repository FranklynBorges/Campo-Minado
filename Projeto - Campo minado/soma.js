const ValueSoma = (id) => parseInt(c(id).getAttribute("value"))



document.getElementById("1").addEventListener("click" , () => {   
    if (ValueSoma(02) === 2) {somaT2 = 1}  
    if (ValueSoma(06) === 2) {somaT6 = 1} 
    if (ValueSoma(07) === 2) {somaT7 = 1} 
    let total =  somaTotal()
    document.getElementById(1).querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("2").addEventListener("click" , () => { 
    if (ValueSoma(01) === 2) {somaT1 = 1}   
    if (ValueSoma(03) === 2) {somaT3 = 1} 
    if (ValueSoma(06) === 2) {somaT6 = 1}
    if (ValueSoma(07) === 2) {somaT7 = 1} 
    if (ValueSoma(08) === 2) {somaT6 = 1} 

    let total =  somaTotal()
    document.getElementById(2).querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("3").addEventListener("click" , () => {
    if (ValueSoma(02) === 2) {somaT2 = 1}
    if (ValueSoma(04) === 2) {somaT4 = 1}
    if (ValueSoma(07) === 2) {somaT7 = 1}
    if (ValueSoma(08) === 2) {somaT8 = 1}
    if (ValueSoma(09) === 2) {somaT9 = 1}
    
    let total =  somaTotal()
    document.getElementById(3).querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("4").addEventListener("click" , () => {
    if (ValueSoma(3) === 2) {somaT3 = 1;}
    if (ValueSoma(5) === 2) {somaT5 = 1;}
    if (ValueSoma(8) === 2) {somaT8 = 1;}
    if (ValueSoma(9) === 2) {somaT9 = 1;}
    if (ValueSoma(10) === 2) {somaT10 = 1;}

    let total =  somaTotal()
    document.getElementById(4).querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("5").addEventListener("click" , () => {
    if (ValueSoma(4) === 2) {somaT4 = 1;}
    if (ValueSoma(9) === 2) {somaT9 = 1;}
    if (ValueSoma(10) === 2) {somaT10 = 1;}

    let total =  somaTotal()
    document.getElementById(5).querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("6").addEventListener("click", () => {
    if (ValueSoma(1) === 2) {somaT1 = 1}
    if (ValueSoma(2) === 2) {somaT2 = 1}
    if (ValueSoma(7) === 2) {somaT7 = 1}
    if (ValueSoma(11) === 2) {somaT11 = 1}
    if (ValueSoma(12) === 2) {somaT12 = 1} 

    let total = somaTotal()
    document.getElementById("6").querySelector("h1").innerHTML = total
    zeraSoma()
})

document.getElementById("7").addEventListener("click", () => {
    if (ValueSoma(1) === 2) {somaT1 = 1} 
    if (ValueSoma(2) === 2) {somaT2 = 1} 
    if (ValueSoma(3) === 2) {somaT3 = 1}
    if (ValueSoma(6) === 2) {somaT6 = 1} 
    if (ValueSoma(8) === 2) {somaT8 = 1} 
    if (ValueSoma(11) === 2) {somaT11 = 1}
    if (ValueSoma(12) === 2) {somaT12 = 1}
    if (ValueSoma(13) === 2) {somaT13 = 1}

    let total = somaTotal()
    document.getElementById("7").querySelector("h1").innerHTML = total
    zeraSoma()
})

document.getElementById("8").addEventListener("click" , () => {
    if (ValueSoma(2) === 2) {somaT2 = 1;}
    if (ValueSoma(3) === 2) {somaT3 = 1;}
    if (ValueSoma(4) === 2) {somaT4 = 1;}
    if (ValueSoma(7) === 2) {somaT7 = 1;}
    if (ValueSoma(9) === 2) {somaT9 = 1;}
    if (ValueSoma(12) === 2) {somaT12 = 1;}
    if (ValueSoma(13) === 2) {somaT13 = 1;}
    if (ValueSoma(14) === 2) {somaT14 = 1;}
    
    let total =  somaTotal()
    document.getElementById(8).querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("9").addEventListener("click" , () => {
    if (ValueSoma(3) === 2) {somaT3 = 1} 
    if (ValueSoma(4) === 2) {somaT4 = 1} 
    if (ValueSoma(5) === 2) {somaT5 = 1}
    if (ValueSoma(8) === 2) {somaT8 = 1} 
    if (ValueSoma(10) === 2) {somaT10 = 1} 
    if (ValueSoma(13) === 2) {somaT13 = 1}
    if (ValueSoma(14) === 2) {somaT14 = 1}
    if (ValueSoma(15) === 2) {somaT15 = 1} 

    let total =  somaTotal()
    document.getElementById("9").querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("10").addEventListener("click" , () => {
    if (ValueSoma(4) === 2) {somaT4 = 1} 
    if (ValueSoma(5) === 2) {somaT5 = 1} 
    if (ValueSoma(9) === 2) {somaT9 = 1}
    if (ValueSoma(14) === 2) {somaT14 = 1} 
    if (ValueSoma(15) === 2) {somaT15 = 1}     

    let total =  somaTotal()
    document.getElementById("10").querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("11").addEventListener("click" , () => {
    if (ValueSoma(6) === 2) {somaT6 = 1} 
    if (ValueSoma(7) === 2) {somaT7 = 1} 
    if (ValueSoma(12) === 2) {somaT12 = 1}
    if (ValueSoma(16) === 2) {somaT16 = 1} 
    if (ValueSoma(17) === 2) {somaT17 = 1}

    let total =  somaTotal()
    document.getElementById("11").querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("12").addEventListener("click", () => {
    if (ValueSoma(6) === 2) {somaT6 = 1;}
    if (ValueSoma(7) === 2) {somaT7 = 1;}
    if (ValueSoma(8) === 2) {somaT8 = 1;}
    if (ValueSoma(11) === 2) {somaT11 = 1;}
    if (ValueSoma(13) === 2) {somaT13 = 1;} 
    if (ValueSoma(16) === 2) {somaT16 = 1;}
    if (ValueSoma(17) === 2) {somaT17 = 1;}
    if (ValueSoma(18) === 2) {somaT18 = 1;}
  
    let total = somaTotal();
    document.getElementById("12").querySelector("h1").innerHTML = total;
    zeraSoma();
  });

document.getElementById("13").addEventListener("click" , () => {
    if (ValueSoma(7) === 2) {somaT7 = 1} 
    if (ValueSoma(8) === 2) {somaT8 = 1} if (ValueSoma(9) === 2) {somaT9 = 1}
    if (ValueSoma(12) === 2) {somaT12 = 1} 
    if (ValueSoma(14) === 2) {somaT14 = 1} 
    if (ValueSoma(17) === 2) {somaT17 = 1} 
    if (ValueSoma(18) === 2) {somaT18 = 1} 
    if (ValueSoma(19) === 2) {somaT19 = 1} 

    let total =  somaTotal()
    document.getElementById("13").querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("14").addEventListener("click" , () => {
    if (ValueSoma(8) === 2) {somaT8 = 1} 
    if (ValueSoma(9) === 2) {somaT9 = 1}
    if (ValueSoma(10) === 2) {somaT10 = 1} 
    if (ValueSoma(12) === 2) {somaT12 = 1} 
    if (ValueSoma(15) === 2) {somaT15 = 1} 
    if (ValueSoma(17) === 2) {somaT17 = 1} 
    if (ValueSoma(18) === 2) {somaT18 = 1} 
    if (ValueSoma(19) === 2) {somaT19 = 1} 

    let total =  somaTotal()
    document.getElementById("14").querySelector("h1").innerHTML = total
    zeraSoma()
})

document.getElementById("15").addEventListener("click", () => {
    if (ValueSoma(9) === 2) {somaT9 = 1}
    if (ValueSoma(10) === 2) {somaT10 = 1}
    if (ValueSoma(14) === 2) {somaT14 = 1}
    if (ValueSoma(19) === 2) {somaT19 = 1}
    if (ValueSoma(20) === 2) {somaT20 = 1}
  
    let total = somaTotal();
    document.getElementById("15").querySelector("h1").innerHTML = total;
    zeraSoma();
});

document.getElementById("16").addEventListener("click", () => {
    if (ValueSoma(11) === 2) {somaT11 = 1}
    if (ValueSoma(12) === 2) {somaT12 = 1}
    if (ValueSoma(17) === 2) {somaT17 = 1}
    if (ValueSoma(21) === 2) {somaT21 = 1}
    if (ValueSoma(22) === 2) {somaT22 = 1}
  
    let total = somaTotal();
    document.getElementById("16").querySelector("h1").innerHTML = total;
    zeraSoma();
});
  
document.getElementById("17").addEventListener("click", () => {
    if (ValueSoma(11) === 2) {somaT11 = 1}
    if (ValueSoma(12) === 2) {somaT12 = 1}
    if (ValueSoma(13) === 2) {somaT13 = 1}
    if (ValueSoma(16) === 2) {somaT16 = 1}
    if (ValueSoma(17) === 2) {somaT17 = 1}
    if (ValueSoma(21) === 2) {somaT21 = 1}
    if (ValueSoma(22) === 2) {somaT22 = 1}
    if (ValueSoma(23) === 2) {somaT23 = 1}
  
    let total = somaTotal();
    document.getElementById("17").querySelector("h1").innerHTML = total;
    zeraSoma();  
});

document.getElementById("18").addEventListener("click", () => {
    if (ValueSoma(12) === 2) { somaT12 = 1 }
    if (ValueSoma(13) === 2) { somaT13 = 1 }
    if (ValueSoma(14) === 2) { somaT14 = 1 }
    if (ValueSoma(17) === 2) { somaT17 = 1 }
    if (ValueSoma(19) === 2) { somaT19 = 1 }
    if (ValueSoma(22) === 2) { somaT22 = 1 }
    if (ValueSoma(23) === 2) { somaT23 = 1 }
    if (ValueSoma(24) === 2) { somaT24 = 1 }
    
    let total = somaTotal();
    document.getElementById("18").querySelector("h1").innerHTML = total;
    zeraSoma();
});

document.getElementById("19").addEventListener("click", () => {
    if (ValueSoma(13) === 2) { somaT13 = 1 }
    if (ValueSoma(14) === 2) { somaT14 = 1 }
    if (ValueSoma(15) === 2) { somaT15 = 1 }
    if (ValueSoma(18) === 2) { somaT18 = 1 }
    if (ValueSoma(20) === 2) { somaT20 = 1 }
    if (ValueSoma(23) === 2) { somaT23 = 1 }
    if (ValueSoma(24) === 2) { somaT24 = 1 }
    if (ValueSoma(25) === 2) { somaT25 = 1 }
  
    let total = somaTotal();
    document.getElementById("19").querySelector("h1").innerHTML = total;
    zeraSoma();
});
  
document.getElementById("20").addEventListener("click", () => {
    if (ValueSoma(14) === 2) {somaT14 = 1}
    if (ValueSoma(15) === 2) {somaT15 = 1}
    if (ValueSoma(19) === 2) {somaT19 = 1}
    if (ValueSoma(24) === 2) {somaT24 = 1}
    if (ValueSoma(25) === 2) {somaT25 = 1}

    let total = somaTotal();
    document.getElementById("20").querySelector("h1").innerHTML = total;
    zeraSoma();
});

document.getElementById("21").addEventListener("click", () => {
    if (ValueSoma(16) === 2) {somaT16 = 1}
    if (ValueSoma(17) === 2) {somaT17 = 1}
    if (ValueSoma(22) === 2) {somaT22 = 1}

    let total = somaTotal();
    document.getElementById("21").querySelector("h1").innerHTML = total;
    zeraSoma();
});

document.getElementById("22").addEventListener("click" , () => {
    if (ValueSoma(21) === 2) {somaT21 = 1} 
    if (ValueSoma(16) === 2) {somaT16 = 1} 
    if (ValueSoma(17) === 2) {somaT17 = 1}
    if (ValueSoma(18) === 2) {somaT18 = 1} 
    if (ValueSoma(23) === 2) {somaT23 = 1} 

    let total =  somaTotal()
    document.getElementById("22").querySelector("h1").innerHTML = total
    zeraSoma ()
})

document.getElementById("23").addEventListener("click" , () => {
    if (ValueSoma(22) === 2) {somaT22 = 1} 
    if (ValueSoma(17) === 2) {somaT17 = 1} 
    if (ValueSoma(18) === 2) {somaT18 = 1}
    if (ValueSoma(19) === 2) {somaT19 = 1} 
    if (ValueSoma(24) === 2) {somaT24 = 1} 

    let total =  somaTotal()
    document.getElementById("23").querySelector("h1").innerHTML = total
    zeraSoma ()
})


document.getElementById("24").addEventListener("click" , () => {
    if (ValueSoma(23) === 2) {somaT23 = 1}
    if (ValueSoma(25) === 2) {somaT25 = 1}
    if (ValueSoma(18) === 2) {somaT18 = 1}
    if (ValueSoma(19) === 2) {somaT19 = 1} 
    if (ValueSoma(20) === 2) {somaT20 = 1} 

    let total =  somaTotal()
    document.getElementById("24").querySelector("h1").innerHTML = total
    zeraSoma ()
})


document.getElementById("25").addEventListener("click" , () => {
    if (ValueSoma(24) === 2) {somaT23 = 1} 
    if (ValueSoma(19) === 2) {somaT19 = 1} 
    if (ValueSoma(20) === 2) {somaT20 = 1} 

    let total =  somaTotal()
    document.getElementById("25").querySelector("h1").innerHTML = total
    zeraSoma ()
})
