window.onload = () => {
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
    let street = document.querySelector('#street').value;
    let city = document.querySelector('#city').value;
    let state = document.querySelector('#state').value;
    let pincode = document.querySelector('#pincode').value;
    let landmark = document.querySelector('#landmark').value;

    if (!address.length || !street.length || !city.length || !state.length || !pincode.length || !landmark.length){
        return showAlert('fill all the inputs first');
    } else {
        return { address, street, city, state, pincode, landmark};
    }
}