

let localParen = document.querySelector(".cart__list");

function displayLocal (arr){
    if (arr.lenght === 0) return;

    arr.forEach(element => {
        localParen.insertAdjacentHTML("beforeend", `
            <li class="cart__item">
                  <span class="cart__item-top">
                    <img
                      width="100px"
                      height="77px"
                      src="${element.img}"
                      alt=""
                      class="cart__item-img"
                    />
                    <h4 class="cart__item-title">${element.foodName}</h4>
                  </span>
                  <p class="cart__item-info">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type
                  </p>
                  <span class="cart__item-bottom">
                    <p class="cart__item-time">2025-07-5/11:07</p>
                    <p class="cart__item-price">${element.price}</p>
                  </span>
                  <button class="cart__delete-btn"><img src="./images/Trash_Full.svg" alt="" class="cart__delete-img"></button>
                </li>
            `)
    });
}

displayLocal(localProductArray)