
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
    <div class="footer-content">
    <img src="img/light-logo.png"  alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">CLIENT SERVICES</li>
            <li><a href="" class="footer-links">Contact</a> </li>
            <br>
            <li><a href="" class="footer-links">Product Management</a> </li>
            <br>
            <li><a href="" class="footer-links">Take care of customer</a> </li>
            
            

        </ul>
        <ul class="category">
            <li class="category-title">QUALITY BRANDS</li>
            <li><a href="" class="footer-links">Chanel</a> </li>
            <br>
            <li><a href="" class="footer-links">Dior</a> </li>
            <br>
            <li><a href="" class="footer-links">MCM</a> </li>
            <br>
            <li><a href="" class="footer-links">Louis Vuitton</a> </li>
            

        </ul>
    </div>
</div>
    <p class="footer-title">About Company</p>
    <p class="info">Address:No. 8, Ton That Thuyet Street, My Dinh Ward, Nam Tu Liem District, Hanoi City </p>
    <p class="info">Support Emails - help@gmail.com</p>
    <p class="info">Telephone - 0123456789-0123456789</p>
    <div class="footer-social-container">
        <div>
            <a href="" class= "social-link"> Terms and Services</a>
            <a href="" class= "social-link">Privacy Page</a>
        </div>
        <div>
        <style>
        .icon {
        
        }
        </style>
        <a class="icon" style="color: white" href="#"><i class="fa fa-facebook"></i></a>
            <a href="" class= "social-link">Facebook</a>
          
           <a class="icon" style="color:white;" href="#"><i class="fa fa-instagram"></i></a>
            <a href="" class= "social-link">Instagram</a>
            
            <a class="icon" style="color: white;  href="#"><i class="fa fa-twitter"></i></a>
            <a href="" class= "social-link">Twitter</a>

        </div>
    </div>
    <p class="footer-credit">©Copyright 2022 - All rights reserved. </p>
    `;

}
createFooter()