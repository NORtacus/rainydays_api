const url = "https://cors.noroff.dev/https://rainydays.varmeopplevelser.no/wp-json/wc/store/products?per_page=14";
const productContainer = document.querySelector(".products")
async function getProducts(url){
    try {
    const response = await fetch(url);
    const products = await response.json();

    console.log(products);

    products.forEach(function(product){
        productContainer.innerHTML += 
        `<div class="product"><h3><a href="products.html?id=${product.id}">${product.name}</a></h3>
         <div class="product-image" style="background-image:url('${product.images[0].src}')"></div>
         <div class="description">${product.description}</div>
         <div class="price"><h4>${product.price_html}</h4></div>
         <div class="cart">${product.add_to_cart.text}&nbsp;<a href="?${product.add_to_cart.url}">
         <img src="img/cart-arrow-down-solid.svg" class="cartimg"></a></div>
         </div>`; 
    });
}
catch(error) {
    console.log(error);
    productContainer.innerHTML = message("error", error);
}}
    
getProducts(url);

function message(messageType="success", message = "") {
    return `An unexpected error occured when displyaing the API: <div class="alert ${messageType}">${message}</div>`;
}




