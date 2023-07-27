const inputName = document.querySelector('#name-input');
const output= document.querySelector('#name-output');
const defaultName = output.textContent;


inputName.addEventListener("input", (event) => {
    if (inputName.value === "") {
        output.textContent = defaultName;
    } else {
        output.textContent = event.currentTarget.value;
    }
  }); 