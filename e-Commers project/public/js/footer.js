const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="img/yellow logo.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">shorts</a></li>
                    <li><a href="#" class="footer-link">tracks</a></li>
                    <li><a href="#" class="footer-link">gym wear</a></li>
                    <li><a href="#" class="footer-link">sweat shirts</a></li>
                    <li><a href="#" class="footer-link">hoodies</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                </ul>
        
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">shorts</a></li>
                    <li><a href="#" class="footer-link">tracks</a></li>
                    <li><a href="#" class="footer-link">gym wear</a></li>
                    <li><a href="#" class="footer-link">sweat shirts</a></li>
                    <li><a href="#" class="footer-link">hoodies</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                </ul>
            </div>
            
         </div>
        <p class="footer-title">about company</p>
        
            <p class="info">When starting a clothing company, you will likely be dealing with either bank loans, investment from friends, family, or your own savings, crowdfunding, and generally bootstrapping your business. Crowdfunding can be a great, non-traditional avenue to consider if you have a product that fits a certain niche or solves a problem.</p>
            <p class="info">Support emails - help@fashionhub.com, costomersupport@fashionhub.com </p>
            <p class="info">
                telephone - 1800 00 001, 7677238278.
            </p>
            <div class="footer-social-container">
                <div>
                  <a href="" class="social-link">tearms& services</a>  
                  <a href="" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="" class="social-link">instagram</a>  
                    <a href="" class="social-link">facebook</a>
                    <a href="" class="social-link">twitter</a>
                  </div>
            </div>
        <p class="footer-credit"><i>FASHION HUB</i>, Best apparels online store</p>
    
    `;
}
createFooter();