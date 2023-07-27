const minusOneBtn = document.querySelector('[data-action="decrement"]')
const counterValue = document.querySelector('#value')
counterValue.textContent = Number(0);
const x = 1;
const minus= () => {
    counterValue.textContent = Number(counterValue.textContent) - Number(x);
     
}
minusOneBtn.addEventListener('click', minus);
console.log()



const plusOneBtn = document.querySelector('[data-action="increment"]')

const plus= () => {
    counterValue.textContent = Number(counterValue.textContent) + Number(x);
}
plusOneBtn.addEventListener('click', plus);