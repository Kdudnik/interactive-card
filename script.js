const inputName = document.getElementById('name')
const showName = document.getElementById('showName')

inputName.addEventListener('keyup', () => {
    const errorEl = inputName.closest('.form__row').querySelector('.error')
    const pattern = /^[A-Za-z\s\-]*$/

    errorEl.style.visibility = "hidden"
    errorEl.innerHTML = 'Error'
    inputName.dataset.error = "false"
    if (inputName.value === "") {
        errorEl.style.visibility = "visible"
        errorEl.innerHTML = "Can't be blank"
        inputName.dataset.error = "true"
    }
    else if (pattern.test(inputName.value)) showName.innerHTML = inputName.value
    else {
        errorEl.style.visibility = "visible"
        errorEl.innerHTML = 'Wrong format, only letters, spaces and "-"'
        inputName.dataset.error = "true"
    }
})

const inputNumber = document.getElementById('number')
const showNumber = document.getElementById('showNumber')

let numberArr = []
showNumber.innerHTML.split('').forEach((el) => {if (el !== " ") numberArr.push(el)})

inputNumber.addEventListener('keyup', (caller) => {
    numberArr.unshift(caller.key)
    numberArr.pop()
    console.log(numberArr)
})

const inputCvs = document.getElementById('cvs')
const showCvs = document.getElementById('showCvs')
let csvArr = []

showCvs.innerHTML.split('').forEach((el) => csvArr.push(el))

inputCvs.addEventListener('keyup', (caller) => {
    
})
