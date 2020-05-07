require("babel-register")
import config from './config/setting.json'
import images from './images/image.png'
console.log('111', images)
console.log(config)

let a = 111;
let b = 222;
var xxx = (c,d) => c*d;
console.log(xxx(a,b));