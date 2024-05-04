const mostPop = document.querySelector(".section-p1")
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// const jf = "./data.json";
// fetch(jf).then((res) => {
//     return res.json();
// }).then((data) => {
//     data.map(product => {
//         const { id, name, price, images } = product.data;
//         mostPop.innerHTML = `
//         <div class="pro" onclick="window.location.href='product.html'" id=${id}>
//                 <img src="${images[0].url}" alt="">
//                 <div class="des">
//                     <span>Eagle</span>
//                     <h5>Cartoon T-shirt</h5>
//                     <div class="star">
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                     </div>
//                     <h4>200LE</h4>

//                 </div>
//                 <a href="#"><i class="fas fa-cart-plus cart"></i></a>
//             </div>
//             `
//     })
// })