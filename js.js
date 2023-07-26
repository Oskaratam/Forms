const container = document.querySelector('.container'),
      logInBtn = document.getElementById("logInBtn"),
      changeBtn = document.getElementById("changeBtn");
      logInForm = document.getElementById("logIn"),
      signUpForm = document.getElementById("signUp"),
      showPasswordBtn = document.getElementById("showPasswordBtn"),
      showPasswordBtn2 = document.getElementById("showPasswordBtn2"),
      password = document.getElementById("password"),
      name2 = document.getElementById("name2"),
      password2 = document.getElementById("password2"),
      nameError = document.getElementById('nameError'),
      passwordError = document.getElementById("passwordError");



changeBtn.innerText = 'Create account';
changeBtn.addEventListener('click', () => {
    logInForm.classList.toggle('hidden');
    signUpForm.classList.toggle('hidden');
    container.classList.toggle('blackTheme');
    document.querySelectorAll('input').forEach(el => {
        el.classList.toggle('blackInputs')
    })
    changeBtn.classList.toggle('blackTheme');
    if (!changeBtn.matches('.blackTheme')) {
        changeBtn.innerText = "Login to account"
    }else {
        changeBtn.innerText = 'Create account';
    }
})


const showPassword = (passwordTyped) => {
if (passwordTyped.type == 'password'){
    passwordTyped.type = 'text'
} else {
    passwordTyped.type = 'password'
}
}

//validating form
signUpForm.addEventListener('submit', (e) => {
    let messageForName = [],
    messageForPassword = [];
    passwordError.innerHTML = null;
    nameError.innerHTML = null;
    name2.classList.remove('errorInput');
    password2.classList.add('errorInput');


    if (name2.value.length <= 3){
        messageForName.push('Name length must be longer than 3 characters')
    } else if (name2.value.length >= 15) {
        messageForName.push('Name length must be shorter than 15 characters')
    }

    if (password2.value.length <= 5){
        messageForPassword.push("Password can't be shorter than 5")
    }else if (password2.value.length > 20){
        messageForPassword.push("Password can't be longer than 20")
    }
     if (/[0-9]/.test(password.value)) {  //this validation doesn't work now
        messageForPassword.push("")
    }else {
        messageForPassword.push("Password must contain numbers")
    }

    if (messageForName.length > 0) {
        e.preventDefault();
        nameError.append(messageForName.join(' | '));
        name2.classList.add('errorInput');
    }
    if (messageForPassword.length > 0) {
        e.preventDefault();
        passwordError.append(messageForPassword.join(' | '));
        password2.classList.add('errorInput');
    }
})
