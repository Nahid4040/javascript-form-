const form = document.getElementById("form");
const username = document.getElementById("username");
const number = document.getElementById("number");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

form.addEventListener('submit',(e)=>{
   e.preventDefault();

   checkInputs();
   
})



function checkInputs(){
    //get the valu from the input

    const usernameValue = username.value.trim();
    const numberValue = number.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();
    const emailValue = email.value.trim();


    if(usernameValue===''){
        //show error
        //add error class
        setErrorFor(username,'Username can not be blank');
    }
        else if(usernameValue.length<4)
    {
        setErrorFor(username,'name must be 5 charecter');
    }
        else if(usernameValue.length>15)
    {
        setErrorFor(username,'name must be below 15 charecters');
    }
        else{ setSuccesFor(username);
    }
    
    if(numberValue===''){
        //show error
        //add error class
        setErrorFor(number,'Number can not be blank');
    }else{
        //add succes class
        setSuccesFor(number);
    }

    if(emailValue===''){
        //show error
        //add error class
        setErrorFor(email,'email can not be blank');
    }else{
        //add succes class
        setSuccesFor(email);
    }

    if(passwordValue===''){
        //show error
        //add error class
        setErrorFor(password,'password can not be blank');
    }else{
        //add succes class
        setSuccesFor(password);
    }
    if(confirmValue===''){
        //show error
        //add error class
        setErrorFor(confirm,'confirm password can not be blank');
    }else if(confirmValue!==passwordValue){
        setErrorFor(confirm,'confirm password does not macth');
    } else {
        //add succes class
        setSuccesFor(confirm);
    }


}


function setErrorFor(input,message){
    const form = input.parentElement;  //from-control
    const smal = form.querySelector("smal");

    smal.innerText = message;

    //error class add
    form.className = 'form-control error';

}


function  setSuccesFor(input){
    const form = input.parentElement;
    form.className = 'form-control succes';
}
