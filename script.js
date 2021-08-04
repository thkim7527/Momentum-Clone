const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

function handleLoginFormSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    console.log(userName);
    loginForm.classList.add("hidden");
}

loginForm.addEventListener("submit", handleLoginFormSubmit);