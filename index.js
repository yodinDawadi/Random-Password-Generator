const passwordlen = 12;
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols ="!@#$%^&*()+_-[]{}~";
let pass =document.querySelector("#Pass");
let allChar=upperCase+lowerCase+numbers+symbols;
let genebtn= document.querySelector(".button2");
let cpyBtn = document.querySelector(".button1");


function generatePassword(){
    let password =""
    while(passwordlen>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
    }
 pass.value = password;
}
function copyPassword(){
    pass.select();
    document.execCommand("copy");
}

genebtn.addEventListener("click",generatePassword);
cpyBtn.addEventListener("click",copyPassword);