

const productImages = document.querySelectorAll(".product-images img");
const  productImagesSlide = document.querySelector(".image-slider");

let activeImagesSlide = 0;

productImages.forEach((item,i) =>{
    item.addEventListener('click',() =>{
        productImages[activeImagesSlide].classList.remove('active');
        item.classList.add('active');
        productImagesSlide.style.backgroundImage = `url('${item.src}')` ;
        activeImagesSlide = i;

    })
})
