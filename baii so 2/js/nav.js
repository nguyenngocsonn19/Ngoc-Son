


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
        <a href="#"><img src="img/user.png" alt=""></a>
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