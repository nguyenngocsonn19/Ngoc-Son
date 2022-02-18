

const productName = document.querySelector('#product-name')|null;
const shortLine = document.querySelector('#short-des')||null;
const des = document.querySelector('#des')|null;
const  next = document.querySelector('#next');

next.addEventListener('click', () => {
        if(productName.value.length){
            showAlert('enter product name');
        } else {
            location.href='index.html'
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