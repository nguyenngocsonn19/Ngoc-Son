const setupSlidingEffect = () => {
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
}


// fetch product cards
const  getProducts = (tag) => {
    return fetch('/get-products',{
        method : "post",
        headers : new Headers({"Content-Type": "application"}),
        body : JSON.stringify({tag: tag})
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
}

//creat product slider
const crateProductSlider = (data, parent, title) => {
    let slideContainer = document.querySelector(`${parent}`);

    slideContainer.innerHTML +=`
    <section class ="product">
        <h2 class="product-category">${title}</h2>
        <button class="pre-btn"><img src="../img/arrow.png" alt=""></button>
        <button class="nxt-btn"><img src="../img/arrow.png" alt=""></button>
        ${createProductCards(data)}
</section>
    `
    setupSlidingEffect();
}

const  createProductCards = (data, parent) => {
    // here parent is for search product
    let start = '<div class="product-container">';
    let middle = ''; //this will contain card HTML
    let end = '</div>';

    for(let i = 0; i < data.length; i++ ){
   if (data[i].id != decodeURI(location.pathname.split('/').pop()) ){
       middle += `
        <div class="product-card">
    <div class="product-image">
        <span class="discount-tag">${data[i].discount}% off</span>
        <img src="${data[i].images[0]}" class="product-thumb" alt="">
    </div>
        <div class="product-info"> onclick="location.href = '/products/${data[i].id}">
            <h2 class="product-brand">${data[i].name}</h2>
            <p class="product-short-des"${data[i].shortDes}</p>
            <span class="price">$${data[i].sellPrice}</span>
            class="actual-price">$${data[i].actualPrice</span>
       </div>
       </div>
       `
    }

   }
  }

    return start + middle + end;
}