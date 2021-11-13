let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let mobileNo = document.getElementById("mobileNo");
function validate(){
    let regexp1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    let regexp2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let regexp3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
        if(regexp1.test(email.value)){
            // return true;
        }
        else{
            alert("Please enter email id in correct format");
            return false;
            
        } 
        if(mobileNo.value.match(regexp3)){
	        // return true;      
	    }
        else{
	        alert("Not a valid Phone Number");
	        return false;
        }

        if(pwd.value.match(regexp2)){
            // return true;

        }
        else{
            alert("Password must be minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
            return false;
        }
    
}