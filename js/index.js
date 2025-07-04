let Ism = document.querySelector("#Ism");
let tel = document.querySelector("#tel");
let savebtn = document.querySelector("#savebtn");
let user1 = document.querySelector("#user1");
let user2 = document.querySelector("#user2");
let usertel = document.querySelector("#usertell");
let lavashParent = document.querySelector("#lavashlist");
let burgerParnt = document.querySelector("#burgerlist");
let hotdogParnt = document.querySelector("#hotdoglist");
let danarParnt = document.querySelector("#danarlist");
let pizzaParnt = document.querySelector("#pizzalist");
let ichimliklarParnt = document.querySelector("#ichimliklarlist");




let findLavash = foods.filter((product) => product.type === "lavash");
console.log(findLavash);
let findBurger = foods.filter((product) => product.type === "burger");
console.log(findBurger);
let findhotdog = foods.filter((product) => product.type === "hotdog");
console.log(findhotdog);
let findDanar = foods.filter((product) => product.type === "danar");
console.log(findDanar);
let findPizza = foods.filter((product) => product.type === "pizza");
console.log(findPizza);
let findIchimliklar = foods.filter((product) => product.type === "ichimliklar");
console.log(findIchimliklar);


savebtn.addEventListener("click", function () {
  let IsmValue = Ism.value;
  let TelValue = tel.value;
  let NewIsm = localStorage.setItem("username", IsmValue);
  let NewTel = localStorage.setItem("usertel", TelValue);
});

user2.innerHTML = localStorage.getItem("username");
usertel.innerHTML = localStorage.getItem("usertel");

function displayLavash(arr, type) {
  if (type === "lavash") {
    arr.forEach((el) => {
      lavashParent.insertAdjacentHTML(
        "beforeend",
        `
           <li class="product__item">
                     <img width="144px" height="117px" src="${el.img}" alt="" class="product__img">
                     <a href="/detail.html?id=${el.id}" class="product__price">${el.price}</a>
                  </li>
        `
      );
    });
  }
  if (type === "burger") {
    arr.forEach((el) => {
      burgerParnt.insertAdjacentHTML(
        "beforeend",
        `
           <li class="product__item">
                     <img width="144px" height="117px" src="${el.img}" alt="" class="product__img">
                     <a href="/detail.html?id=${el.id}" class="product__price">${el.price}</a>
                  </li>
        `
      );
    });
  }
    if (type === "hotdog") {
    arr.forEach((el) => {
      hotdogParnt.insertAdjacentHTML(
        "beforeend",
        `
           <li class="product__item">
                     <img width="144px" height="117px" src="${el.img}" alt="" class="product__img">
                     <a href="/detail.html?id=${el.id}" class="product__price">${el.price}</a>
                  </li>
        `
      );
    });
  }
      if (type === "danar") {
    arr.forEach((el) => {
      danarParnt.insertAdjacentHTML(
        "beforeend",
        `
           <li class="product__item">
                     <img width="144px" height="117px" src="${el.img}" alt="" class="product__img">
                     <a href="/detail.html?id=${el.id}" class="product__price">${el.price}</a>
                  </li>
        `
      );
    });
  }
        if (type === "pizza") {
    arr.forEach((el) => {
      pizzaParnt.insertAdjacentHTML(
        "beforeend",
        `
           <li class="product__item">
                     <img width="150px" height="127px" src="${el.img}" alt="" class="product__img">
                     <a href="/detail.html?id=${el.id}" class="product__price">${el.price}</a>
                  </li>
        `
      );
    });
  }
   if (type === "ichimliklar") {
    arr.forEach((el) => {
      ichimliklarParnt.insertAdjacentHTML(
        "beforeend",
        `
           <li class="product__item">
                     <img width="150px" height="127px" src="${el.img}" alt="" class="product__img">
                     <a href="/detail.html?id=${el.id}" class="product__price">${el.price}</a>
                  </li>
        `
      );
    });
  }
}

displayLavash(findLavash, "lavash");
displayLavash(findBurger, "burger");
displayLavash(findhotdog, "hotdog");
displayLavash(findDanar, "danar");
displayLavash(findPizza, "pizza");
displayLavash(findIchimliklar, "ichimliklar");




