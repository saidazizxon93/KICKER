let setBtn = document.querySelector(".detail__btn");

let localProductArray = JSON.parse(localStorage.getItem("product")) || [];

setBtn.addEventListener("click", function(){
    let obj = {
        foodName: findProduct.foodname,
        img: findProduct.img,
        price: findProduct.price,
    }

    localProductArray.push(obj);
    localStorage.setItem("product", JSON.stringify(localProductArray));

})