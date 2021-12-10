/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function checkName(){
    var inputName = document.getElementById("inputName");
    var outputName = document.getElementById("outputName");
    var message ="";
    var name = inputName.value;
    var rules1 = /^[a-zA-Z]/;    //正規表達式，設定搜尋條件(開頭為大小寫英文字母)
    if(name.length < 8){
        message ="The length must more than eight words";
    } 
    if(name.length > 14){
        message ="The length must less than fourteen words";
    }
    if(!rules1.test(name)){
        message ="The first numer must be English character";
    }
    outputName.innerHTML = message;
    outputName.style.color ="red";
    outputName.style.fontsize ="small";
                
    if(message !== ""){
        inputName.focus();
        inputName.select();
    }
}

function checkPw(){
    var inputPs = document.getElementById("inputPw");
    var outputPs = document.getElementById("outputPw");
    var password = inputPs.value;
    var rules2 = /[a-zA-Z]/;
    var message ="";
    if(password.length < 8){
        message ="The length must more than eight words";
    } 
    if(password.length > 14){
        message ="The length must less than fourteen words";
    }
    if(!rules2.test(password)){
        message ="The password must have English alphaet.";
    }
    outputPs.innerHTML = message;
    outputPs.style.color ="red";
    outputPs.style.fontsize ="small";
}

function checkMail(){
    var inputMail = document.getElementById("inputMail");
    var outputMail = document.getElementById("outputMail");
    var message ="";
    var rules3 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([a-z]{2,4})$/;
    /* E-mail稽核
        1.開頭允許大寫字母、小寫英文字母、0~9、底線、減號與.
        2.中間有一個 @
        3.@ 後面允許小寫英文字母、0~9、底線、減號與.
        4.結尾有2個以上、4個以下小寫英文字母
     */
    
    if(rules3.test(inputMail.value)){
        message ="legal e-mail.";
        outputMail.innerHTML = message;
        outputMail.style.color ="green";
        outputMail.style.fontsize ="small";
    }else{
        message ="illegal e-mail.";
        outputMail.innerHTML = message;
        outputMail.style.color ="red";
        outputMail.style.fontsize ="small";
    }
}

/*創建帳號*/
function enrollCheck(){
    const signupName = document.querySelector('#inputName');
    const signupPassword = document.querySelector('#inputPw');
    const signupEmail = document.querySelector('#inputMail');
    const storageKey = signupName.value + signupEmail.value;
    const checkUser = Boolean(localStorage.getItem(storageKey));
    
    function successAction(){
        if(checkUser){
            return alert('Your e-mail was already created,please re-enter.');  
        }
        localStorage.setItem(signupName.value,signupPassword.value);  //使用setItem()方法來儲存資料
        signupName.value ='';
        signupPassword.value ='';
        signupEmail.value ='';
        alert('Created successfull,please go to sign in page.');       
    }
    if(signupName.value === '' || signupPassword.value === ''){
        alert('The input box cannot be empty');
    }else{
        successAction();
        window.location.href ='login.html';
    }
}