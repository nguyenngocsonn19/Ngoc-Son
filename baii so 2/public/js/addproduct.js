


let user =JSON.parse(sessionStorage.user ||null);
let loader = document.querySelector('.loader');

window.onload = () =>{
    if(user){
        if(!compareToken(user.authToken,user.email)){
            location.replace('/login'/* /login */);
        }
    } else {
        location.replace('/login.html'
        )
    }

}

//price input
const actualPrice = document.querySelector('#actual-price');
const discountPercentage = document.querySelector('#discount');
const sellingPrice = document.querySelector('#sell-price');

discountPercentage.addEventListener('input', () => {
    if(discountPercentage.value > 100){
        discountPercentage.value = 90;
    }
    else {
        let discount = actualPrice.value * discountPercentage.value / 100;
        sellingPrice.value = actualPrice.value - discount;
    }
})

sellingPrice.addEventListener('input' , () => {
    let
        discount = (sellingPrice.value / actualPrice.value) * 100;
    discountPercentage.value = discount;
})

//upload img
let  uploadImages = document.querySelector('.fileupload');
let imagePaths =  [];

uploadImages.forEach((fileupload, index) =>{

    fileupload.addEventListener('change', () =>{
        const file = fileupload.files[0];
        let imageUrl;

        if(file.type.includes('image')){
          fetch('/s3url').then(res => res.json())
              .then(url =>{
                  fetch(url,{
                      method: 'PUT',
                      headers:  new Headers({'Content-Type': 'multipart/form-data'}),
                      body:file
                  })
                      .then(res => {
                          imageUrl = url.split("?")[0];
                          imagePaths[index] = imageUrl;
                          let label = document.querySelector(`label[for=${fileupload.id}]`);
                          label.style.backgroundImage =`url(${imageUrl}`;
                          let productImage = document.querySelector('.product-image') ;
                          productImage.style.backgroundImage =  `url(${imageUrl}`;
                      })
              })
        }else {
            showAlert('upload image only')
        }

    })
})


//from submit
const productName = document.querySelector('#product-name');
const shortLine = document.querySelector('#short-des');
const des = document.querySelector('#des');
let sizes = [];
const stock = document.querySelector('#stock');
const tags = document.querySelector('#tags');
const tac =document.querySelector('#tac');
const safe = document.querySelector('#safe');
//buttons
const  addProductBtn = document.querySelector('#add-btn');
const saveDraft = document.querySelector('#save-btn');

//store size
const storeSizes = () => {
    sizes = [];
  let sizeCheckBox = document.querySelectorAll('.size-checkbox');
  sizeCheckBox.forEach(item => {
      if(item.checked){
          sizes.push(item.value);
      }
  })
}

const  validateFrom = () => {
    if(!productName.value.length){
        return showAlert('enter product name');
    }else if(shortLine.value.length >100 || shortLine.value.length<10){
        return showAlert('Short description must be between 10 to 100 letters long');
    }else if(!des.value.length ) {
        return showAlert('enter detail description about the product');
    }else if(!imagePaths.length ) {
        return showAlert('Upload at least one product image');
    } else if(!sizes.length ) {
        return showAlert('select at color');
    }else if(!actualPrice.value.length || !discountPercentage.value.length ||!sellingPrice.value.length ) {
        return showAlert('You must add pricing');
    }else if(stock.value.length ) {
    return showAlert('You must should have at 10 item in stock');
    }else if(!tags.value.length ) {
        return showAlert('enter few tag to helps ranking your product in search');
    }else if(!tac.checked ) {
        return showAlert('you must agree to our terms and conditions');
    }else if(!safe.checked) {
        return showAlert('you must agree not sell prohibited items ');
    }
    return true;
}
const productData = () => {
    return data = {
        name: productName.value,
        shortDes: shortLine.value,
        des: des.value,
    image: imagePaths.value,
        sizes: sizes,
        actualPrice: actualPrice.value,
        discount: discountPercentage.value,
        sellPrice: sellingPrice.value,
        tags: tags.value,
        tac: tac.checked,
        safe: safe.checked,
        email: user.email


    }
}

addProductBtn.addEventListener('click', () =>{
    storeSizes();

    if (validateFrom()){
  loader.style.display ='block';
        let data = productData();
        sendData('/add-product', data );
    }
})

