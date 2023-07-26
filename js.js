const container = document.querySelector('.container'),
      logInBtn = document.getElementById("logInBtn"),
      changeBtn = document.getElementById("changeBtn");
      logInForm = document.getElementById("logIn"),
      signUpForm = document.getElementById("signUp"),
      showPasswordBtn = document.getElementById("showPasswordBtn"),
      showPasswordBtn2 = document.getElementById("showPasswordBtn2"),
      password = document.getElementById("password")
      password2 = document.getElementById("password2");

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