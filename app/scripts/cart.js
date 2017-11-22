(function () {

	var Bag = function() {
		var products = [];

		this.getProduct = function () {
			return products;
		}

		this.addProduct = function (product, count) {

			count = count || 1

			var item = getProductByName(product.name)

			if (item) {
				item.count += count;
			} else {
				products.push({goods: product, count: count})
			}
			localStorage.setItem('bag', JSON.stringify(products))
			//
			document.dispatchEvent(new Event('update-cart'))
		}

		this.getProductPrice = function (productName) {
			var item = getProductByName(productName),
			  discount = getDiscount(item) / item.count //30

			return item.goods.price - discount;

		}

		this.getProductSum = function (productName) {
			if (productName) {
				var item = getProductByName(productName);
				return this.getProductPrice(productName) * item.count;

			} else {
				var fillSum = 0;
				for (var i = 0; i < products.length; i++) {
					fillSum += this.getProductPrice(products[i].goods.name) * products[i].count
				}
				return fillSum
			}
		}

		this.getProductCount = function (productName) {
			if (productName) {
				var item = getProductByName(productName);
				return item.count;

			} else {
				var fillCount = 0;
				for (var i = 0; i < products.length; i++) {
					fillCount += products[i].count
				}
				return fillCount

			}
		}

		this.getProductDiscount = function (productName) {
			if (productName) {
				var item = getProductByName(productName)

				return getDiscount(item);
			} else {
				var fullDiscount = 0;

				for (var i = 0; i < products.length; i++) {
					fullDiscount += getDiscount(products[i])
				}
				return fullDiscount
			}
		};

		this.removeProduct = function (productName, count) {

			var item = getProductByName(productName)
			if (count) {
				item.count -= count
			} else {
				products.splice(products.indexOf(item), 1)
			}

			localStorage.setItem('bag', JSON.stringify(products))
			document.dispatchEvent(new Event('update-cart'))
		}

		function getDiscount (item) {
			var count = item.count
			var disc = item.goods.price * 10 / 100 * count;

			if (count > 5) {
				return disc
			} else if (count > 3) {
				return item.goods.price * 5 / 100 * count
			} else {
				return 0;
			}

		}

		function getProductByName (productName) {
			for (var i = 0; i < products.length; i++) {
				if (products[i].goods.name == productName) {
					return products[i];
				}
			}
		}

		+function () {
			var bag = JSON.parse(localStorage.getItem('bag'))
			if (bag) {
				products = bag;
				console.log('add')
			}
		}()
	}
	window.bag = new Bag()
	//експорт переменной
	// setTimeout(document.dispatchEvent(new Event ('update-cart')))
})()


