

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
const  add_product_to_cart_or_wishlist = (type, product) =>{
    let data = JSON.parse(localStorage.getItem(type));
    if(data = null){
        data= [];
    }
    product = {
        item: 1,
        name:product.name,
        sellPrice: product.sellPrice,
        sizes: sizes || null,
        shortDes:  product.shortDes,
        image: product.image[0]
    }
    data.push(product);
    console.log(data);
    return'added'
}