
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>

        </ul>
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>
            <li><a href="" class="footer-links">Men</a> </li>

        </ul>
    </div>
</div>
    <p class="footer-title">About Copany</p>
    <p class="info">Address:No. 8, Ton That Thuyet Street, My Dinh Ward, Nam Tu Liem District, Hanoi City </p>
    <p class="info">Support Emails - help@gmail.com</p>
    <p class="info">Telephone - 0123456789-0123456789</p>
    <div class="footer-social-container">
        <div>
            <a href="" class= "social-link"> Terms and Services</a>
            <a href="" class= "social-link">Privacy Page</a>
        </div>
        <div>
            <a href="" class= "social-link">Facebook</a>
            <a href="" class= "social-link">Instagram</a>
            <a href="" class= "social-link">Twitter</a>

        </div>
    </div>
    <p class="footer-credit">©Copyright 2022 - All rights reserved. </p>
    `;

}
createFooter()