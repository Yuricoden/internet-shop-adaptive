(function () {

	const Bag = function () {
		let products = [];

		this.getProduct = function () {
			return products;
		};

		this.addProduct = function (product, count) {
			count = count || 1;

			const item = getProductByName(product.name);

			if (item) {
				item.count += 1;
			}else {
				products.push({goods: product, count});
			}
			localStorage.setItem('bag', JSON.stringify(products));
		};

		this.removeProduct = function () {

		};

		function getProductByName(productName) {
			for (let i = 0; i < products.length; i++) {
				if (products[i].goods.name == productName)
				{return products[i];}
			}
		}

		Number(function () {
			const bag = JSON.parse(localStorage.getItem('bag'));
			if (bag) {
				products = bag;
			}
		}());

	};

	window.bag = new Bag();

})();
