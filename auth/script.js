var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
var password = document.getElementById('password');


const pass = username + password + username;
const h1 = CryptoJS.SHA512(pass).toString();
var path = h1.substring(h1.length / 2 - 8, h1.length / 2 + 8) + pass.substring(pass.length / 2 - 5, pass.length / 2 + 5);

const h2 = CryptoJS.SHA512(h1+path+pass).toString();
console.log('h1:', h1);
console.log('h2:', h2);
console.log('path:', path);
//

btnLogin.onclick = function(){
  // vào đến đây rồi thì xem đi :)
  if (h2=="d22fb96c1cfd877301aa696074e16c20bac950982c77c3c11766dc5c9c687b3e3cdc6f1a6be84adb2552e14d62a249019ebf53823110ef7d5bcad927c67ffc12") { 
     location="https://ch1nhpd.github.io/"+path ;
    } 
    else { alert("Đã bảo không cho xem mà!") } 
}
