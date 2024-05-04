let http = new XMLHttpRequest();
http.open('get', './products.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output = "";
        for (let item of products) {
            output += `
           
               

                    <div class="pro" onclick="window.location.href='product.html'">
                        <img src="${item.img}" alt="${item.img}">
                        <div class="des">
                            <span>${item.prand}</span>
                            <h5>${item.name}</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>${item.price}</h4>

                        </div>
                        <a href="#"><i class="fas fa-cart-plus cart"></i></a>
                    
                    </div>
                
            
            `;

        }
        document.querySelector('.pro-cont').innerHTML = output;
    }
}