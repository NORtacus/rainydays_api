const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://cors.noroff.dev/https://rainydays.varmeopplevelser.no/wp-json/wc/store/products/" + id;

const productContainer = document.querySelector(".clearfix");

async function getProducts() {
	try {
		const response = await fetch(url);
		const result = await response.json();
		console.log(result);
		createHtml(result);
	} catch (error) {
		console.log(error);
		productContainer.innerHTML = error;
	}
}

getProducts();

function createHtml(product) {
	productContainer.innerHTML = `<div class="box">
	   <br>
	   <h3>${product.name} | Unisex | Different colors</h3>
	   <br>
	   <p>${product.description}</p>
	   <p>Lightweight water-resistant fabric provides a comfortable feel, 
	   <p>and the full-length zip allows you to personalise coverage, with 
	   <p>the hood adding complete protection, whilst the inner lining offers 
	   <p>additional warmth.
	   <p>This three-layer material has a tricot lining to wick moisture away from your skin, 
	   <p>a waterproof vapor permeable membrane in the middle, and 7 denier nylon    
	   <p> on the exterior. Perfect for you summer camping or hiking trip.</p>
	   <br>
		 <p>&#x2022;Adjustable ribbed hem
		 <p>&#x2022;Ribbed cuffs
		 <p>&#x2022;Taped seams
		 <p>&#x2022;100% Polyamide
		 <p>&#x2022;Ventilation slits for good air
		 <p>&#x2022;In the host side pocket and them as a hip bag comfortable to wear
		 <p>&#x2022;Comfortable body length and sleeve length for good rain protection over layers
		 <p>&#x2022;Water resistant
		  <br>
		  <br>
		   <div class="price-align"><h3>${product.price_html}</h3></a><a href=# class="hover">
			 Add to favorites&nbsp;&nbsp;<i class="fa-solid fa-heart-circle-check"></i></a></div>    
   <br> 
   <hr>
   <br>
   <div class="price-align">
	   <br>
	   Available Options:&nbsp;
	   <span class="dot1">X</span>
	   <a href="product2.html"><span class="dot2">&nbsp;</span></a>
	   <a href="product1.html"><span class="dot3">&nbsp;</span></a>
	   <span class="dot4">X</span>&nbsp;&nbsp;
	   <div class="dropdown1">
		 <button class="dropbtn1">Choose size</button>
		 <div class="dropdown-content1">
		 <a href="#">S</a>
		 <a href="#">M</a>
		 <a href="#">L</a>
		 </div>
	   </div>
	   &nbsp;<a href="?${product.add_to_cart.url} class="hover"><i class="fa-solid fa-cart-arrow-down"></i>&nbsp;${product.add_to_cart.text}</a>&nbsp;
	   <br>
	   <br>
	   <p>*Free delivery when you buy for minimum 100€*
	 </div>
	 </div>
	 <div class="box">
		 <img src="${product.images[0].src}" alt="product photo" class="responsive-image">
   </div>`;
}
