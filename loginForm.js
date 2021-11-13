let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function validate(){
    let regexp1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexp2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if(regexp1.test(email.value)){
            // return true;
        }
        else{
            alert("Please enter email id in correct format");
            return false;
            
        }
        if(pwd.value.match(regexp2)){
            return true;

        }
        else{
            alert("Password must be minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
            return false;
        }
    
}