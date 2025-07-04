let Ism = document.querySelector("#Ism");
let tel = document.querySelector("#tel");
let savebtn = document.querySelector("#savebtn");
let user1 = document.querySelector("#user1");
let user2 = document.querySelector("#user2");
let usertel = document.querySelector("#usertell")

savebtn.addEventListener("click", function(){
    let IsmValue = Ism.value;
    let TelValue = tel.value;
    let NewIsm = localStorage.setItem("username", IsmValue);
    let NewTel = localStorage.setItem("usertel", TelValue);

 
})

user2.innerHTML = localStorage.getItem("username");
usertel.innerHTML = localStorage.getItem("usertel")