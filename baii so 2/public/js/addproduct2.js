
const productName = document.querySelector('#product-name');
const shortLine = document.querySelector('#short-des');
const des = document.querySelector('#des');
const stock = document.querySelector('#stock');
const tags = document.querySelector('#tags');
const tac =document.querySelector('#tac');
const safe = document.querySelector('#safe');
const  addProductBtn = document.querySelector('#add-btn');
const saveDraft = document.querySelector('#save-btn');

addProductBtn.addEventListener('click',()=>{
    if(productName != null) {
        if(productName.value.length){
            return showAlert('enter product name');
        }else if(shortLine.value.length >100 || shortLine.value.length<10){
            return showAlert('Short description must be between 10 to 100 letters long');
        }else if(des.value.length ) {
            return showAlert('enter detail description about the product');
        }else if(imagePaths.length ) {
            return showAlert('Upload at least one product image');
        } else if(sizes.length ) {
            return showAlert('select at color');
        }else if(actualPrice.value.length || !discountPercentage.value.length ||!sellingPrice.value.length ) {
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

    }
})

const  showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg =document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() =>{
        alertBox.classList.remove('show')
    }, 3000)

}
saveDraft.addEventListener('click', () =>{
    storeSizes();
    //check for product name
    if(!productName.value.length){
        showAlert('enter product name');
    }else {
        let data = productData();
        data.draft = true;
        sendData('/add-product', data);
    }
})