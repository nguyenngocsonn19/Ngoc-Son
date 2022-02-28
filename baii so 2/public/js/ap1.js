

const  next = document.querySelector('#next');
const productName = document.querySelector('#product-name')|null;
const shortLine = document.querySelector('#short-des')||null;
const des = document.querySelector('#des')|null;

next.addEventListener('click', () =>{
    if(productName){
        if(productName.value.length){
            showAlert('You must enter product name');
        }else if (shortLine.value.length) {
            showAlert('You must enter short line');
        }
        else if (des.value.length) {
            showAlert('You must enter detail description');
        }
        else {
            location.href="addproduct2.htm"
        }
    } else {

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