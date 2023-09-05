// NAME


const nameInput = document.getElementById('nameInput')
const nameField = document.getElementById('nameField')

nameInput.addEventListener('keypress', (event) => {
    const allowedChars = [' ','-','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
    allowedChars.forEach(char => allowedChars.push(char.toUpperCase())) // to make both registers in
    const errorEl = nameInput.closest('.form__row').querySelector('.error')
    errorEl.style.visibility = "hidden"
    nameInput.dataset.error = "false"
    if(!allowedChars.includes(event.key)) {
        event.preventDefault()
        throwError(errorEl, nameInput, 'Wrong format, only letters, spaces and "-"')
        return;
    }
})

nameInput.addEventListener('keyup', () => {
    const errorEl = nameInput.closest('.form__row').querySelector('.error')
    if(nameInput.dataset.error === "true") return

    if(!nameInput.value) {
        throwError(errorEl, nameInput, "Can't be blank")
    }

    nameField.innerHTML = nameInput.value
})


// CARD NUMBER


const cardNumberInput = document.getElementById('cardNumberInput')
const cardNumberField = document.getElementById('cardNumberField')
let numbers = cardNumberField.innerHTML.split('').filter(char => char !== " ")

// HINT: change, blur, click, input

cardNumberInput.addEventListener('keypress', (event) => {
    const allowedChars = ['0','1','2','3','4','5','6','7','8','9',]
    const errorEl = cardNumberInput.closest('.form__row').querySelector('.error')
    errorEl.style.visibility = "hidden"
    cardNumberInput.dataset.error = "false"
    if(!allowedChars.includes(event.key)) {
        event.preventDefault()
        throwError(errorEl, cardNumberInput, "Wrong format, only numbers")
        return;
    }

    numbers.shift()
    numbers.push(event.key)
    if(cardNumberInput.value.length < 16) {
        cardNumberField.innerHTML = numbers.join("")
    }
    else {
        cardNumberField.innerHTML = cardNumberInput.value
    }
})

cardNumberInput.addEventListener('keyup', () => {
    const errorEl = cardNumberInput.closest('.form__row').querySelector('.error')
    if(cardNumberInput.dataset.error === "true") return

    if(!cardNumberInput.value) {
        throwError(errorEl, cardNumberInput, "Can't be blank")
        cardNumberField.innerHTML = "0000 0000 0000 0000"
    }
})


// DATE


const date = document.getElementById('dateWrapper')
const monthInput = document.querySelector('[data-date="month"]')
const dateField = document.getElementById('dateField')

date.addEventListener('keypress', (event) => {
    const errorEl = date.closest('.form__row').querySelector('.error')
    if(event.target.nodeName !== "INPUT") return;

    errorEl.style.visibility = "hidden"
    event.target.dataset.error = "false"

    if(!+event.key && event.key !== "0") {
        event.preventDefault()
        throwError(errorEl, event.target, "Wrong format, only numbers")
    }
})

date.addEventListener('keyup', (event) => {
    const errorEl = date.closest('.form__row').querySelector('.error')
    if(event.target.dataset.error === "true") return;

    if(!event.target.value) throwError(errorEl, event.target, "Can't be blank")

    const currentField = dateField.querySelector(`[data-date="${event.target.dataset.date}"]`)
    currentField.innerHTML = event.target.value
    if(currentField.innerHTML.length === 1) {
        currentField.insertAdjacentText('afterbegin', "0")
    }
})

monthInput.addEventListener('focusout', (event) => {
    const errorEl = date.closest('.form__row').querySelector('.error')
    if(+monthInput.value > 12) {
        event.preventDefault()
        throwError(errorEl, monthInput, "Please, put the right date")
        return
    }
})


// UTILS


function throwError(el, input, errorText) {
    el.style.visibility = "visible"
    input.dataset.error = "true"
    el.innerHTML = errorText
}