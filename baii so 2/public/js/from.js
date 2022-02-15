

window.onload =()=>{
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/')
        }
    }
}



const  loader = document.querySelector('.loader');

// select input
const  submitBtn = document.querySelector('.submit-btn');
const  name = document.querySelector('#name')|| null;
const  email = document.querySelector('#email');
const  password = document.querySelector('#password')|| null;
const  number = document.querySelector('#number')|| null;
const  tac = document.querySelector('#terms-and-cond')|| null;
const  notification = document.querySelector('#notification')|| null;

submitBtn.addEventListener('click', () =>{
  if(name != null) {
      if (name.value.length < 3) {
          showAlert('Name must be 3 letters long');
      } else if (!email.value.length) {
          showAlert('Enter your email');
      } else if (password.value.length < 8) {
          showAlert('Enter your password');
      } else if (!number.value.length) {
          showAlert('Enter your phone number');
      } else if (!Number(number.value) || number.value.length < 10) {
          showAlert('Invalid number, please enter valid one');
      } else if (!tac.checked) {
          showAlert('You must agree to our terms and conditions');
      } else {

          location.href="login.html"

          sendData('/signup', {
              name: name.value,
              email: email.value,
              password: password.value,
              number: number.value,
              tec: tac.checked,
              notification: notification.checked,
              seller: false


          })
      }
  }
  else {
      if (!email.value.length || !password.value.length) {
          showAlert('Fill all the inputs');
      }
      else {
          location.href="index.html"


          sendData('/login', {

              email: email.value,
              password: password.value,

          })
      }
  }
})

const  sendData = (path, data) => {
    fetch(path,{
        method: 'post',
        headers: new  Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}
const processData = (data) =>{
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
    else if (data.name){

        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/')

    }
}



const  showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg =document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() =>{
        alertBox.classList.remove('show')
    }, 3000)

}
