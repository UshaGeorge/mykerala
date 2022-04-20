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
    
    // /^\d{3}-\d{3}-\d{4}$/;

    var isValidEmail = emailRegExp.test(userID);
    //console.log(isValidEmail);
    
    var isValidPhone = phoneRegExp.test(phoneNum);
    //console.log(isValidPhone);

    if(!isValidEmail)
    {
        errEmail.innerText = "* Please enter a valid email id";
        errEmail.style.display='block';
        isValid =false;
    }

    if(pwd.trim() =='')
    {
        errPwd.innerText = "* Please enter password";
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