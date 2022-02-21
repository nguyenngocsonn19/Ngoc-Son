/*window.onload = () => {
    if(!sessionStorage.user){
        location.replace('/login')
    }
}

const placeOrderBtn = document.querySelector('.place-order-btn');
placeOrderBtn.addEventListener('click', () => {
    let address = getAddress();
})

const getAddress = () => {
    // validation
    let address = document.querySelector('#address').value;
    let number = document.querySelector('#number').value;
    let bNumber = document.querySelector('#bNumber').value;
    let message = document.querySelector('#message').value;
    let shipping = document.querySelector('#shipping').value;


    if (!address.length || !number.length || !bNumber.length ){
        return showAlert('fill all the inputs first');
    } else {
        return { address, number, bNumber,};
    }
} */
const  oderBtn = document.querySelector('.place-order-btn');
const address = document.querySelector('#address');
const number = document.querySelector('#number');
const bNumber = document.querySelector('#bNumber')
const message = document.querySelector('#message');
const shipping = document.querySelector('#shipping');

oderBtn.addEventListener('click', () =>{
    if(address.value.length) {
        showAlert('you must enter your address');
    }else if(number.value.length){
        showAlert('you must enter your number');
    }else if(bNumber.value.length) {
        showAlert('you must enter your backup phone number');
    }else if(message.value.length){
        showAlert('you must enter your message');
    }
     else {
      location.href='index.html';
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





