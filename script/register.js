const form= document.getElementById('formvalidate'); 
////console.log(form);
form.addEventListener('submit',function(event){
    if(!validate()){
        event.preventDefault();
    }
})

function validate(){
    //console.log('validate');

    var isValid=true;
    
    var errEmail= document.getElementById('emailValidator'); 
    errEmail.innerText = "";
    errEmail.style.display='none';

    var errPwd= document.getElementById('pwdValidator'); 
    errPwd.innerText = "";
    errPwd.style.display='none';

    var errPwd2= document.getElementById('pwd2Validator'); 
    errPwd2.innerText = "";
    errPwd2.style.display='none';

    
    var errPhone= document.getElementById('phoneValidator'); 
    errPhone.innerText = "";
    errPhone.style.display='none';

    var userID = document.getElementById('txtEmail').value;
    var pwd= document.getElementById('txtPwd').value;
    var pwd2= document.getElementById('txtPwd2').value;
    var phoneNum = document.getElementById('txtPhone').value;
   

    var emailRegExp =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneRegExp = /^\d{3}[-. ]\d{3}[-. ]\d{4}$/;
    var pwdRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    // /^\d{3}-\d{3}-\d{4}$/;

    var isValidEmail = emailRegExp.test(userID);
    //console.log(isValidEmail);
    
    var isValidPhone = phoneRegExp.test(phoneNum);
    //console.log(isValidPhone);

    var isValidPwd = pwdRegExp.test(pwd);

    if(!isValidEmail)
    {
        errEmail.innerText = "* Please enter a valid email id";
        errEmail.style.display='block';
        isValid =false;
    }

    if(pwd.trim() =='' || !isValidPwd)
    {
        errPwd.innerText = "*  Password should contain minimum 8 characters, at least one uppercase, and one lower case and at least one number. Allowed alphabets and numbers only";
        errPwd.style.display='block';
        isValid =false;
    }

    
    if(pwd2.trim() =='')
    {
        errPwd2.innerText = "* Please confirm password";
        errPwd2.style.display='block';
        isValid =false;
    }

    if(pwd.trim() !=pwd2.trim())
    {
        errPwd2.innerText = "* Password mismatch";
        errPwd2.style.display='block';
        isValid =false;

        document.getElementById('txtPwd').value='';
        document.getElementById('txtPwd2').value='';
    }

    if(!isValidPhone)
    {
        errPhone.innerText = "* Please enter a valid phone number";
        errPhone.style.display='block';
        isValid =false;
    }
    //validate phone number
    return isValid;
    //return false;
}


var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }

 

var password = document.getElementById('txtPwd');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
    
    switch(result.score){
        case 1:
            //meter.style.color='red';
            console.log('red');
            meter.classList.add("redMeter");
            break;
        case 2:
            meter.style.color='yellow';
            console.log('yellow');
            break;
        case 3:
            meter.style.color='orange';
            console.log('orange');
            break;
        case 4:
            meter.style.color='green';
            console.log('green');
            break;
        default:
            meter.style.color='blue';
            console.log('blue');
            break;
    }
  } else {
    text.innerHTML = "";
  }
});