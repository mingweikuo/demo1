/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function loginCheck(){
    const loginName = document.querySelector('#loginName');
    const loginPassword = document.querySelector('#loginPassword');
    const welcomeElement = document.querySelector('#welcomeElement');  //取得登入畫面歡迎標題ID
    const loginBtn = document.querySelector('#loginBtn');
    const logoutBtn = document.querySelector('#logoutBtn');
    function loginAction(){
        loginName.value ='';
        loginPassword.value ='';
        alert('Sign in successfully.');
        welcomeElement.textContent ="Hello,my friend!!"; //改變登入畫面標題字串
        loginBtn.style.display ='none';  //隱藏登入按鈕
        logoutBtn.style.display ='';     //顯示登出按紐
    }
    if(loginName.value === '' || loginPassword.value === ''){
        alert('The input box cannot be empty');
    }else if(localStorage.getItem(loginName.value) === loginPassword.value){
        loginAction();
    }else{
        welcomeElement.textContent ="Incorrect,please input again!";
    }
}


function logoutAcc(){
    const welcomeElement = document.querySelector('#welcomeElement');  //取得登入畫面歡迎標題ID
    const loginBtn = document.querySelector('#loginBtn');
    const logoutBtn = document.querySelector('#logoutBtn');
    welcomeElement.textContent ="Welcome,my friend!";
    localStorage.clear();
    loginBtn.style.display ='';       //顯示登入按鈕
    logoutBtn.style.display ='none';  //隱藏登出按紐
}