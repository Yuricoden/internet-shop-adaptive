import Product from './productMethods';
import card from './cart';
const products = bag.getProduct();
const cartCheck = document.querySelector('.goods h3');
const productParent = document.querySelector('.goods');
if (products.length) {
	cartCheck.remove();
}

window.addEventListener('load', function () {
	$('.sum_price').html('$' + bag.getProductSum() + ':' + bag.getProductCount());
	console.log('work');
});

const but = document.querySelector('.market-bag');
but.addEventListener('click', function (event) {
	// document.addEventListener('update-cart', function (e) {
		$('.goods').empty();
		const bag = JSON.parse(localStorage.getItem('bag'));
		for (let i = 0; i < bag.length; i++) {
			const prod = bag[i].goods;
			const count = bag[i].count;
			const block = document.createElement('div');
			block.className += 'block__cart';
			block.insertAdjacentHTML('beforeEnd',
			  '<div class="right__block">' +
			  '<div class="img__goods">' +
			  '<img src=" ' + prod.url + ' ">' +
			  '</div>' +
			  '<div class="price__goods"> ' + prod.price + ' </div>' +
			  '</div>' +
			  '<div class="left__block">' +
			  '<div class="goods__name">' +
			  '<h4>' + prod.name + '</h4>' +
			  '</div>' +
			  '<div class="goods__options">' +
			  '<ul>' +
			  '<li>' +
			  '<a>Color:' +
			  '<span>' + prod.color + '</span>' +
			  '</a>' +
			  '</li>' +
			  '<li>' +
			  '<a>Size:' +
			  '<span>' + prod.size + '</span>' +
			  '</a>' +
			  '</li>' +
			  '<li>' +
			  '<a>Quantity:' +
			  '<span class="con">' + count + '</span>' +
			  '</a>' +
			  '</li>' +
			  '</ul>' +
			  '</div>' +
			  '<div class="change__options">' +
			  '<a href="#">Change details</a>' +
			  '</div>' +
			  '</div>' +
			  '<div class="icon__close remove_item"></div>');
			productParent.appendChild(block);
		}
		document.dispatchEvent(new Event('remove-cart'));
	// });
});

document.addEventListener('remove-cart', function (e) {
	const removeIcon = document.querySelectorAll('.remove_item');
	removeIcon.forEach(function (item) {
		item.addEventListener('click', function (event) {
			const elemName = this.parentNode.querySelector('.goods__name h4');
			console.log(elemName.innerHTML);
			bag.removeProduct(elemName.innerHTML);
			this.parentNode.remove();
		});
	});
});

function productsRender() {
	const produ = document.querySelector('.catalog__items').children;
	Array.prototype.forEach.call(produ, function (item, index) {
		return clickProduct(item);
	});
}
setTimeout(productsRender, 1000);

function clickProduct(product) {
	product.addEventListener('click', function () {
		const data = $(this).data();
		const productName = this.lastChild.firstChild.textContent;
		const productCreate = Product.createFromData(data, productName);
		bag.addProduct(productCreate);
	});
}


document.addEventListener('update-cart', function (e) {
	$('.sum_price').html('$' + bag.getProductSum() + ':' + bag.getProductCount());
});

