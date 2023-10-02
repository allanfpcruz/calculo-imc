//declaração de variáveis
const button = document.querySelector('button#submit')
const weight = document.querySelector('input#iweight')
const height = document.querySelector('input#iheight')
const value = document.querySelector('span#value')
const description = document.querySelector('div#description')
const infos = document.querySelector('div#infos')

//funções
function calcular () {
    let imc = (weight.value / (height.value * height.value)).toFixed(2)
    value.textContent = imc.replace('.',',')
    if (imc < 18.5) {
        description.textContent = "Cuidado! Você está abaixo do peso ideal"
    } else if (imc >= 18.5 && imc < 25) {
        description.textContent = "Você está no peso ideal"
    } else if (imc >= 25 && imc < 30) {
        description.textContent = "Cuidado! Você está com sobrepeso"
    } else if (imc >= 30 && imc < 35) {
        description.textContent = "Cuidado! Você está está com obesidade leve"
    } else if (imc >= 35 && imc < 40) {
        description.textContent = "Cuidado! Você está está com obesidade moderada"
    } else {
        description.textContent = "Cuidado! Você está está com obesidade mórbida"
    }
}

//eventos
button.addEventListener('click', (e) => {
    e.preventDefault()
    infos.classList.remove('hide')
    calcular()
})