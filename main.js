const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
buttonTry.addEventListener('click', handleTryClick)
buttonReset.addEventListener('click', handleResetClick)


// Funções
function handleTryClick (event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2")
        .innerText = `Você acertou em ${xAttempts} tenntativas`
    }

    inputNumber.value = ""
    xAttempts++

}


function handleResetClick() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
}


