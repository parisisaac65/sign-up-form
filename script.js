function verifyPasswordsMatch(){
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("confirm_password").value; 
    let match = true;
    if (password1 != password2){
        document.getElementById("password").classList.toggle("error");
        document.getElementById("confirm_password").classList.toggle("error"); 
        match = false;
    }
    return match; 
}

verifyPasswordsMatch(); 

