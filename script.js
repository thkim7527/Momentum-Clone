const HIDDEN_CLASSNAME = "hidden";

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

const savedUserName = localStorage.getItem("userName");
const USERNAME_KEY = "userName"

const greeting = document.querySelector("#greeting");



function showGreeting() {
    greeting.innerText = `Hello, ${savedUserName}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLoginFormSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    showGreeting();
}



if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginFormSubmit);
} else {
    showGreeting();
}
