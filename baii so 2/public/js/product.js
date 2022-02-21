var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function ()
{
    productImg.src = smallImg[0].src;
}

smallImg[1].onclick = function ()
{
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function ()
{
    productImg.src = smallImg[2].src;

}
smallImg[3].onclick = function ()
{
    productImg.src = smallImg[3].src;
}
//btn select size
const sizeBtn = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtn.forEach((item, i) =>{
    item.addEventListener('click', () => {
        sizeBtn[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})

const wishlistBtn = document.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', () =>{
        wishlistBtn.innerHTML = add_product_to_cart_or_wishlist('wishlist',data);

    })
const cartBtn = document.querySelector('.cards-btn');
    cartBtn.addEventListener('click',()=> {
        cartBtn.innerHTML=   add_product_to_cart_or_wishlist('wishlist',data);
    })