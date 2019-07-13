const registrationForm = document.getElementsByClassName("registration-form");
const logIn = document.getElementById("email");
const passWord = document.getElementById("password");

const checkInfo = () =>{
    event.preventDefault();
    if(logIn.value !== "" && passWord.value !== ""){ 
        document.location.href = "public/planing.html"
    }
};

