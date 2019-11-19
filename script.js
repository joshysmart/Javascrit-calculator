const inputDisplay = document.querySelector('.input')
const clearAll = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')
const expressionDisplay = document.querySelector('.expression')
const buttons = document.querySelectorAll('.button')

let inputedValue = ''

function calcDisplay(e) {
 let {value} = e.target
 const isNum = Number(value)
 
 const isNumber = value === '√' || value === '.' || !isNaN(isNum)
 const isEmpty = inputedValue.length < 1

 if (inputDisplay.innerText.length < 18) {
  if (!isNumber && isEmpty) return
  if (value === '=') {
   runCalc()
   return
  }

  if (isNaN(Number(inputedValue.slice(inputedValue.length - 1))) && !isNumber) return
  if (!isEmpty && !isNaN(inputedValue.slice(inputedValue.length - 1)) && value === '√') return
  if (inputedValue.slice(inputedValue.length - 1) === '√' && value === '√') return
  inputedValue += value
  inputDisplay.innerText = inputedValue
 }

 inputDisplay.classList.remove('animate')
}
// /\+|\-|\x|\÷|\^|\√/g
function runCalc() {
 let inputedNumbers = inputedValue

 if (inputedValue.includes('+')) inputedNumbers = inputedNumbers.replace(/\+/g, ' + ')
 if (inputedValue.includes('-')) inputedNumbers = inputedNumbers.replace(/\-/g, ' - ')
 if (inputedValue.includes('x')) inputedNumbers = inputedNumbers.replace(/\x/g, ' x ')
 if (inputedValue.includes('÷')) inputedNumbers = inputedNumbers.replace(/\÷/g, ' ÷ ')
 if (inputedValue.includes('√')) inputedNumbers = inputedNumbers.replace(/\√/g, ' √ ')
 if (inputedValue.includes('^')) inputedNumbers = inputedNumbers.replace(/\^/g, ' ^ ')

 const inputedArray = inputedNumbers.split(' ')

 while (inputedArray.includes('^')) {
  inputedArray.splice(inputedArray.indexOf('^')-1, 3, Math.pow(inputedArray[inputedArray.indexOf('^')-1], inputedArray[inputedArray.indexOf('^')+1]))
  
  console.log(inputedArray)
 }

 while (inputedArray.includes('√')) {
  inputedArray.splice(inputedArray.indexOf('√')-1, 3, Math.sqrt(inputedArray[inputedArray.indexOf('√')+1]))
  
  console.log(inputedArray)
 }

 while (inputedArray.includes('÷')) {
  inputedArray.splice(inputedArray.indexOf('÷')-1, 3, inputedArray[inputedArray.indexOf('÷')-1] / inputedArray[inputedArray.indexOf('÷')+1])
  
  console.log(inputedArray)
 }

 while (inputedArray.includes('x')) {
  inputedArray.splice(inputedArray.indexOf('x')-1, 3, inputedArray[inputedArray.indexOf('x')-1] * inputedArray[inputedArray.indexOf('x')+1])
  
  console.log(inputedArray)
 }

 while (inputedArray.includes('+')) {
  inputedArray.splice(inputedArray.indexOf('+')-1, 3, Number(inputedArray[inputedArray.indexOf('+')-1]) + Number(inputedArray[inputedArray.indexOf('+')+1]))

  console.log(inputedArray)
 }

  while (inputedArray.includes('-')) {
  inputedArray.splice(inputedArray.indexOf('-')-1, 3, Number(inputedArray[inputedArray.indexOf('-')-1]) - Number(inputedArray[inputedArray.indexOf('-')+1]))
 
  console.log(inputedArray)
  }
  
  const answer = inputedArray.join(',')

 expressionDisplay.innerText = inputedNumbers
 inputDisplay.innerText = Math.round(answer * Math.pow(10,8)) / Math.pow(10,8)
 inputedValue = `${Math.round(answer * Math.pow(10,8)) / Math.pow(10,8)}`
}

backspace.addEventListener('click', () => {
 let display = '|'

 let newDisplay = inputDisplay.innerText.slice(0, inputedValue.length-1)
 inputedValue = newDisplay
 inputDisplay.innerText = inputedValue

 if (inputDisplay.innerText.length === 0) {
  inputDisplay.innerText = display
  inputDisplay.classList.add('animate')
 }
})

clearAll.addEventListener('click', () => {
 let display = '|'
 inputedValue = ''
 inputDisplay.innerText = display
 inputDisplay.classList.add('animate')
})

buttons.forEach(button => button.addEventListener('click', calcDisplay))

// keyDown support

document.addEventListener('keydown', (e) => {
 const AC = document.querySelector('[data-AC]')
 const del = document.querySelector('[data-del]')
 const zero = document.querySelector('[data-zero]')
 const one = document.querySelector('[data-one]')
 const two = document.querySelector('[data-two]')
 const three = document.querySelector('[data-three]')
 const four = document.querySelector('[data-four]')
 const five = document.querySelector('[data-five]')
 const six = document.querySelector('[data-six]')
 const sev = document.querySelector('[data-sev]')
 const eight = document.querySelector('[data-eight]')
 const nine = document.querySelector('[data-nine]')
 const dot = document.querySelector('[data-dot]')
 const plus = document.querySelector('[data-plus]')
 const minus = document.querySelector('[data-minus]')
 const times = document.querySelector('[data-times]')
 const div = document.querySelector('[data-div]')
 const sqrt = document.querySelector('[data-sqrt]')
 const pow = document.querySelector('[data-pow]')
 const equal = document.querySelector('[data-equal]')

 if (inputDisplay.innerText.length < 18) {
  if (e.keyCode === 46) AC.click()
  if (e.keyCode === 8) del.click()
  if (e.keyCode === 190) dot.click()
  if (e.keyCode === 48) zero.click()
  if (e.keyCode === 49) one.click()
  if (e.keyCode === 50) two.click() 
  if (e.keyCode === 51) three.click()
  if (e.keyCode === 52) four.click() 
  if (e.keyCode === 53) five.click() 
  if (e.keyCode === 54) six.click() 
  if (e.keyCode === 55) sev.click() 
  if (e.keyCode === 56) eight.click()
  if (e.keyCode === 57) nine.click() 
  if (e.keyCode === 43) plus.click() 
  if (e.keyCode === 189) minus.click() 
  if (e.keyCode === 42) times.click() 
  if (e.keyCode === 191) div.click() 
  if (e.keyCode === 83) sqrt.click() 
  if (e.keyCode === 80) pow.click() 
  if (e.keyCode === 187) equal.click() 
 }

})

