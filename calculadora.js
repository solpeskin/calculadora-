// 1 = decimal
// 0 = binario

document.querySelector("select").addEventListener("change", (e) => {
    document.querySelector("p").innerHTML = e.target.value
    document.querySelector("input").value = ""
    document.querySelector("textarea").innerHTML = ""
})

const checkNumber = (e) => {
    if (document.querySelector("select").selectedIndex == 0){

        const teclas = "10BackspaceArrowLeftArrowRight"
        if (!teclas.includes(e.key)){
            e.preventDefault()
        }
    }
}

const convertir = () => {
    if (document.querySelector("select").selectedIndex == 0){
        convertirDecimal()
    }
    
    else {
        convertirBinario()
    }
}

const convertirBinario = () => {
    let divisor = document.querySelector("#convertir-numero").value
    let cociente = divisor;
    let resto;
    let binario = [];

    while (cociente > 0){
        cociente = Math.floor(divisor / 2)
        resto = divisor % 2
        binario = resto + binario 

        divisor = cociente
    }
    
    document.querySelector("#numero-convertido").innerHTML = binario
}

const convertirDecimal = () => {
    const cadena = [...document.querySelector("#convertir-numero").value]
    let resultado = 0;

    cadena.forEach((num, index) => {
        const pos = cadena.length - (index + 1)
        const potencia = Math.pow(2, pos)

        resultado = (potencia * parseInt(num)) + resultado
    })

    document.querySelector("#numero-convertido").innerHTML = resultado

}