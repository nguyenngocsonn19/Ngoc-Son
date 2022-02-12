


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
    let discount = (sellingPrice.value / actualPrice.value) * 100;
    discountPercentage.value = discount;
})

//upload img
let  uploadImages = document.querySelector('.fileupload');
let image =  [];

uploadImages.forEach((fileupload, index) =>{

    fileupload.addEventListener('chage', () =>{
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
  let sizeCheckBox = document.querySelector('.size-checkbox');
  sizeCheckBox.forEach(item =>{
      if(item.checked){
          sizes.push(item.value);
      }
  })
}
addProductBtn.addEventListener('click', () =>{
    storeSizes();
    console.log(sizes);
})


