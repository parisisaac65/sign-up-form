
let password1 = document.getElementById("password");
let password2 = document.getElementById("confirm_password"); 
let pwError = document.getElementById("password-error")

password2.addEventListener("keyup",verifyPasswordsMatch);

function verifyPasswordsMatch(){
    let match = true;
    if (password1.value != password2.value){
        password1.classList.toggle("error");
        password2.classList.toggle("error");
        pwError.textContent = "Passwords do not match";
        match = false;
    }
    return match; 
}


