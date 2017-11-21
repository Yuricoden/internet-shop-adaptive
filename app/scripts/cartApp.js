import Product from './productMethods';
const products = bag.getProduct();
const cartCheck = document.querySelector('.goods h3');
const productParent = document.querySelector('.goods');
if (products.length) {
	cartCheck.remove();
}

window.addEventListener('load',function () {
	$('.sum_price').html('$' + bag.getProductSum() + ':' + bag.getProductCount())
	console.log('work')
})


for (let i = 0; i < products.length; i++) {
	const block = document.createElement('div');
	const prod = products[i].goods;
	const count = products[i].count;
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
            '<span>' + count + '</span>' +
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
		const productCreate = Product.createFromData(data,productName);
		bag.addProduct(productCreate);
	});
}


let removeIcon = document.querySelectorAll('.remove_item');
removeIcon.forEach( function (item) {
	item.addEventListener('click', function (event) {
		event.preventDefault()
		let elemName = this.parentNode.querySelector('.goods__name h4')
		console.log(elemName.innerHTML)
		bag.removeProduct(elemName.innerHTML)
		this.parentNode.remove()
	})
})


	document.addEventListener('update-cart', function (e) {
		$('.sum_price').html('$' + bag.getProductSum() + ':' + bag.getProductCount())
	})

