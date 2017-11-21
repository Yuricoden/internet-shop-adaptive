export default function Product() {
}


// Product.prototype.validate = function () {
//     return this.url != undefined && this.name != undefined && this.price != undefined
// }

Product.createEmpty = function () {
	const product = new Product();
	product.price = 100;
	product.name = 'nothing';
	product.url = '';
	return product;
};

Product.createFromData = function (data, productName) {
	const product = new Product();
	product.style = data.style;
	product.dress = data.dress;
	product.color = data.color;
	product.url = data.url;
	product.price = data.price;
	product.name = productName;
	product.brand = data.brand;
	product.size = data.size;
	return product;
};

