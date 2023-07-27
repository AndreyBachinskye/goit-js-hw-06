function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector('span');
const body = document.querySelector("body")
const button = document.querySelector('.change-color')
button.addEventListener('click', ()=>{
  span.textContent = getRandomHexColor()
  body.style.backgroundColor = getRandomHexColor()
})