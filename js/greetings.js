// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "hello " + username;
    localStorage.setItem(USERNAME_KEY, username);
    paindGreetings(username);
}

function paindGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form - 로그인전이면 로그인 폼을 show
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    //show the greetings - 로그인 된 상태면(local storage에 저장된 상태) 인삿말 show
    greeting.innerText = `hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}