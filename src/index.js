require("babel-register")
import config from './config/setting.json'
import images from './images/image.png'
console.log('111', images)
console.log(config)

let a = 111;
let b = 222;

var xxx = (c,d) => c*d;

console.log(xxx(a,b));

window.onload = function (){  
    var bigImg = document.createElement("img");		//创建一个img元素
    bigImg.src = images;   //给img元素的src属性赋值
    bigImg.width = "320";  //320个像素 不用加px
    var myDiv = document.getElementById('app'); //获得dom对象
    myDiv.appendChild(bigImg);  	//为dom添加子元素img
};