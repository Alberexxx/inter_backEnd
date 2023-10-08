const signUpButton = document.getElementById('signUp');
const signUp2link = document.getElementById('signUp2');
const signInButton = document.getElementById('signIn');
const signIn2Link = document.getElementById('signIn2');
const container = document.getElementById('container');

signUp2link.addEventListener('click', () =>
    container.classList.add('right-panel-active'));
signIn2Link.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

