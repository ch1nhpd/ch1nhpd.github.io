var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
btnLogin.onclick = function(){

var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
const pass = username + password + username;
const h1 = CryptoJS.SHA512(pass).toString(); 
var path = h1.substring(h1.length / 2 - 5, h1.length / 2 + 5);// + pass.substring(pass.length / 2 - 5, pass.length / 2 + 5);

const h2 = CryptoJS.SHA512(h1+path+pass).toString();
  // vào đến đây rồi thì xem đi :)
  if (h2=="080b97e4af032faf262d218dc09016a46c3c90442dce37d1efd72fa18241df0f320b730bbd0b88e599151ff01bdb7edcdb1235c4c751b415ba849135dde4d446") { 
     location="https://ch1nhpd.github.io/"+path ;
    } 
    else { alert("Đã bảo không cho xem mà!") } 
}
