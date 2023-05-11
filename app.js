document.getElementsByTagName("form")[0].addEventListener('submit',(e)=>{
    e.preventDefault();
    //Store username,email id and phone number
    let userName = document.getElementById("inputUsername").value;
    let userEmail = document.getElementById("inputEmail").value;
    let userPhoneNumber = document.getElementById("inputPhone").value;
    // Invoking validation method
    validateInput(userName,userEmail,userPhoneNumber);
    
});


const validateInput = (userName,email,phoneNumber)=>{
    //Allow 6-digit username with atmost 2 numbers and 5 lowercase characters
    const expUsername = new RegExp("^[a-z0-9][0-9]{1}[a-z]{4}$");
    if (!expUsername.test(userName)){
        document.getElementById("usernameError").innerHTML = "Invalid Username, try 6 digit alphanumeric characters."
        document.getElementById("inputUsername").value="";
    }
    //Allow email which starts with character,can have single "." before @ and ending with .com/.org/.net
    const expEmail = new RegExp("^[a-z]\\w+\\.?\\w{2,}@[a-z]{2,}\\.?[a-z]{2,}(.com|.org|.net)$");
    if(!expEmail.test(email)){
        document.getElementById("emailError").innerHTML = "Invalid Email Id, please enter a valid email."
        document.getElementById("inputEmail").value = "";
    }
    //Allow 10-digit phone numbers starting with numbers and having only digits
    const expPhone = new RegExp("^[0-9][\\d+]{9}$");
    if(!expPhone.test(phoneNumber)){
        document.getElementById("phoneError").innerHTML = "Invalid phone number, please enter a valid phone number";
        document.getElementById("inputPhone").value = "";
    }

}