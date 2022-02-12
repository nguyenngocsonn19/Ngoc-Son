


 const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/dark-logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Search brand, product">
            <button class="search-btn">Search</button>
        </div>
        <a href="#">
            <img src="img/user.png" id="user-img" alt="">
            <div class="login-logout-popup hide">
                <p class="account-info" >Login as,name</p>
               <button class="btn" id="user-btn" >Log out</button>
            
            </div>
        </a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
    <ul class="links-container">
        <li class="link-item"><a href="" class="link">Home</a></li>
        <li class="link-item"><a href="" class="link">Products</a></li>
        <li class="link-item"><a href="" class="link">About</a></li>
        <li class="link-item"><a href="" class="link">Contact</a></li>
        <li class="link-item"><a href="" class="link">Brands</a></li>
        <li class="link-item"><a href="" class="link">Login</a></li>
    </ul>
    `;
 }

 createNav();
//nav popup
 const userImageButton = document.querySelector('#user-img');
 const userPopup = document.querySelector('.login-logout-popup');
 const popupText= document.querySelector('.account-info');
 const actionBtn = document.querySelector('#user-btn');

 userImageButton.addEventListener('click',() => {
     userPopup.classList.toggle('hide');
 })

 window.onload = () => {
     let user = JSON.parse(sessionStorage.user || null);
     if (user != null){
         popupText.innerHTML =`Log in as, ${user.name};`
         actionBtn.innerHTML =`log out`;
         actionBtn.addEventListener('click', () =>{
             sessionStorage.clear();
             location.reload();
         })
     }else {
         popupText.innerHTML = 'Login to place oder';
         actionBtn.innerHTML =' Login';
         actionBtn.addEventListener('click', () =>{
             location.href =`login.html`;// toi thay doi dau ''bang dau `` co the them file.html vao
         })
     }
 }