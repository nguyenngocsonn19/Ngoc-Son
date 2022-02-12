

const  productContainer = [...document.querySelectorAll('.product-container')];
const  nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i ) => {
    let  containetDimenstions = item.getBoundingClientRect();
    let containerWidth = containetDimenstions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})