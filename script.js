const loginInput = document.querySelector("#loginForm input");
const loginButton = document.querySelector("#loginForm button");

function onLoginButtonClick() {
    const userName = loginInput.value;
    console.log(userName);
}

loginButton.addEventListener("click", onLoginButtonClick);