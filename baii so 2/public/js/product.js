const productImage = document.querySelectorAll(".product-image img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImage.forEach((item, i) => {
        item.addEventListener('click', () => {
            productImage[activeImageSlide].classList.remove('active');
            item.classList.add('active');
            productImageSlide.style.backgroundImage = `url('${item.src}')`;
            activeImageSlide = i;
})
})



const  sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item,i) => {
item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
})
})

const setData = (data) => {
    let title = document.querySelector('title');
    title.innerHTML += data.name;

    //setup the img
    productImage.forEach((img, i) => {
        if (data.image[0]) {
            img.src = data.image[i];
        } else {
            img.style.display = 'none';
        }
    })
    productImage[0].click();

    //set up size buttons
    sizeBtns.forEach(item => {
        if (!data.sizes.includes(item.innerHTML)){
            item.style.display = 'none';
        }
    })

    const name = document.querySelector('.product-brand');
    const shortDes = document.querySelector('.product-short-des');
    const des - document.querySelector('.des');

    title.innerHTML += name.innerHTML = data.name;
    shortDes.innerHTML = data.shortDes;
    des.innerHTML = data.des;

    // pricing
    const  sellPrice = document.querySelector('.product-price');
    const  actualPrice = document.querySelector('.product-actual-price');
    const  discount = document.querySelector('.product-discount');

    sellPrice.innerHTML = `$${data.sellPrice}`;
    actualPrice.innerHTML = `$${data.actualPrice}`;
    discount.innerHTML = `( ${data.discount}% off`;
}

// fetch data
const  fetchProductData = () => {
    fetch('/get-products'), {
        method : 'post'
        headers : new Headers({'Content-type': 'application/json'}),
        body : JSON.stringify({id:productId})
    })
    .then(res => res.json())
        .then(data => {
            setData(data);
            getProducts(data.tags[1]).then(data => createProductSlider(data, '..container-for-card-slider', 'smilar products'))
        })
        .catch(err => {
            location.replace('/404');
        })
}


let productId = null;
if(location.pathname != '/product'){
    productId = decodeURI(location.pathname.split('/').pop());
    fetchProductData()
