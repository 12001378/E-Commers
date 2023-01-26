const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML=`
    <div class="nav">
    <img src="img/Fashion hub Logo.png" class = "brand-logo" alt="logo">
    <div class="nav-items">
    <div class="search">
        <input type="text" class="search-box" placeholder="search brand, products">
        <button class="search-btn">search</button>
    </div><a href="" class="kart"><span class="material-symbols-outlined">
    shopping_cart
    </span></a>
    <a href="" class="user"><span class="material-symbols-outlined">
    account_circle
    </span></a>
    
</div>
</div>
<ul class="links-container">
   <li class="link-items"><a href="index.html" class="link"><i class="fa-solid fa-house"></i>Home</a></li>
   <li class="link-items"><a href="women.html"class="link">Women</a></li>
   <li class="link-items"><a href="men.html"class="link">Men</a></li>
   <li class="link-items"><a href="kids.html"class="link">Kids</a></li>
   <li class="link-items"><a href="accessories.html"class="link">Accessories</a></li>
</ul>
    `;

}

createNav();