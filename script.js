const HIDDEN_CLASSNAME = "hidden";

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

const greeting = document.querySelector("#greeting");

function handleLoginFormSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    greeting.innerText = `Hello, ${userName}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginFormSubmit);