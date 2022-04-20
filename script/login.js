
function fnSubmitForm(){
    //console.log('fnIsValidEmail');
    var errEmail= document.getElementById('emailValidator'); 
    errEmail.innerText = "";
    errEmail.style.display='none';

    var errPwd= document.getElementById('pwdValidator'); 
    errPwd.innerText = "";
    errPwd.style.display='none';

    var userID = document.getElementById('txtEmail').value;
    var pwd= document.getElementById('txtPwd').value;
    var emailRegExp =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   

    var isValid = emailRegExp.test(userID);
    //console.log(isValid);

    if(isValid && pwd.trim() !='')
        window.location.href = "index.html";
    else{
            if(!isValid)
            {
                errEmail.innerText = "* Please enter a valid email id";
                errEmail.style.display='block';
                return false;
            }
            else if(pwd.trim() =='')
            {
                errPwd.innerText = "* Please enter password";
                errPwd.style.display='block';
                return false;
            }
       
    }
  
}