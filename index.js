/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

var curIndex = 0;  //圖片現在所在索引
var timeInterval = 5000;  //時間間隔，單位毫秒
var arr1 = new Array();
    arr1[0] ="otherFiles/basketballshoes2.jpg";
    arr1[1] ="otherFiles/basketballshoes3.jpg";
    arr1[2] ="otherFiles/soccershoes3.jpg";
    arr1[3] ="otherFiles/golfshoes2.jpg";
    arr1[4] ="otherFiles/golfshoes3.jpg";
    arr1[5] ="otherFiles/jogshoes2.jpg";
    arr1[6] ="otherFiles/fashionshoes3.jpg";
    setInterval(changeImg,timeInterval);
            
    function changeImg(){
        if(curIndex === arr1.length){   //當超出陣列索引長度，回到第一張圖片
            curIndex = 0;
        }else{
            curIndex++;
        }
        document.getElementById("mainImg").src = arr1[curIndex];
        }
            
        function nextImg(){
            curIndex++;
            if(curIndex === arr1.length){
                curIndex = 0;
            }
            document.getElementById("mainImg").src = arr1[curIndex];
        }
            
        function prevImg(){
            curIndex--;
            if(curIndex < 0){
                curIndex = arr1.length -1;
            }
            document.getElementById("mainImg").src = arr1[curIndex];
        }

