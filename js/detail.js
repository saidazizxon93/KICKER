let Ism = document.querySelector("#Ism");
let tel = document.querySelector("#tel");
let savebtn = document.querySelector("#savebtn");
let user1 = document.querySelector("#user1");
let user2 = document.querySelector("#user2");
let usertel = document.querySelector("#usertell");
let parametrs = new URLSearchParams(window.location.search)
let detail = document.querySelector(".detail__inner");
let id = parametrs.get("id");


savebtn.addEventListener("click", function () {
  let IsmValue = Ism.value;
  let TelValue = tel.value;
  let NewIsm = localStorage.setItem("username", IsmValue);
  let NewTel = localStorage.setItem("usertel", TelValue);
});

user2.innerHTML = localStorage.getItem("username");
usertel.innerHTML = localStorage.getItem("usertel");


let findProduct = foods.find(function (el){
    return el.id === id;
});

console.log(findProduct);


detail.innerHTML = `
             <img
                width="350px"
                height="350px"
                src="${findProduct.img}"
                alt=""
                class="detail__img"
              />
              <h1 class="detail__title">${findProduct.foodname}</h1>
              <p class="detail__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type
              </p>
              <span class="detail__span">
                <h3 class="detail__price">${findProduct.price}</h3>
                <button class="detail__btn">Olish</button>
              </span>
`;



