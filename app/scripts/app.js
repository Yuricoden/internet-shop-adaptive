import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import fontObserver from 'fontfaceobserver';
import coreslider from 'coreslider';
import cartApp from './cartApp';
import Product from './productMethods';





$(() => {
	svg4everybody();
});

const font = new fontObserver('FuturaPT-Light');
new fontObserver('HelveticaNeueCyr-Light');
font.load().then(function () {
	console.log('Font is available');
}, function () {
	console.log('Font is not available');
});

$('.core-slider').coreSlider({
	resize: true,
	pauseOnHover: false,
	startOnHover: false,
	sliderSelector: '.core-slider_list',
	viewportSelector: '.core-slider_viewport',
	itemSelector: '.core-slider_item',
	navEnabled: true,
	navSelector: '.core-slider_nav',
	navItemNextSelector: '.core-slider_arrow__right',
	navItemPrevSelector: '.core-slider_arrow__left',
	controlNavEnabled: true,
	controlNavSelector: '.core-slider_control-nav',
	controlNavItemSelector: 'core-slider_control-nav-item',
	loadedClass: 'is-loaded',
	clonedClass: 'is-cloned',
	disabledClass: 'is-disabled',
	activeClass: 'is-active',
	reloadGif: false,
	clone: false,
	items: 1,
	slideshow: false
});

const togglePop = document.getElementsByClassName('share_number')[0];
const sharelink = document.getElementsByClassName('share_link')[0];
sharelink.onclick = function toggleShow() {
	togglePop.classList.toggle('show');
};


function getParam(callback) {
	const xhr = new XMLHttpRequest();
	const method = 'GET';
	const url = 'https://morning-ridge-20000.herokuapp.com/product';
	xhr.open(method, url, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			const respData = JSON.parse(xhr.responseText);
			callback(respData);
			selecters(respData)
		}
	};

	xhr.send();
}
getParam(createData);


const catalog = document.getElementsByClassName('catalog__items')[0]
let newarr = []
let col = [];
var select = document.getElementsByTagName('select');
function selecters (selData) {
	for (var i = 0; i < select.length; i++) {
		select[i].addEventListener('change', function (event) {
			let el = this.options[this.selectedIndex].value
			console.log(el)
			$('.catalog__items').empty();
			var parentSelect = this.getAttribute('data-select')
			var allSelect = this.getAttribute('data-all')
			for(var key in selData) {
				if(selData[key].hasOwnProperty('data_category')) {
					newarr.push(selData[key])
					console.log(newarr)
				}
			}
			newarr.map(function (item) {
					item.data_category.filter(function (elem) {
						if(elem[parentSelect] == el) {
							console.log(item)
							return console.log(col.push(item))
						} else if(elem[allSelect] == el) {
							console.log(item)
							return console.log(col.push(item))
						}
						console.log(elem[parentSelect])

					})
			})
			for(var i = 0; i < col.length;i++) {
				creators()
				function creators () {
					const product = document.createElement('div');
					product.className = 'product';
					const dataImg = document.createElement('img');
					dataImg.src = col[i].img;
					product.appendChild(dataImg);
					catalog.appendChild(product);
					}
				}
				newarr = []
				col = []
			})
		}
	}
selecters()




function createData(data) {
	for (const key in data) {
		const product = document.createElement('div');
		product.className = 'product';
		const descriptionProduct = document.createElement('div');
		descriptionProduct.className = 'description__product';
		const dataImg = document.createElement('img');
		dataImg.src = data[key].img;
		const dataName = document.createElement('div');
		dataName.innerHTML = data[key].name;
		dataName.className = 'name__product';
		const dataPrice = document.createElement('div');
		dataPrice.innerHTML = data[key].price;
		product.setAttribute('data-price', data[key].price.substring(1))
		dataPrice.className = 'price__product';
		product.appendChild(dataImg);
		product.appendChild(descriptionProduct);
		descriptionProduct.appendChild(dataName);
		descriptionProduct.appendChild(dataPrice);
		catalog.appendChild(product);
		for (const category in data[key].data_category) {
			product.setAttribute('data-url', data[key].img);
			product.setAttribute('data-style', data[key].data_category[category].style);
			product.setAttribute('data-dress', data[key].data_category[category].dress);
			product.setAttribute('data-color', data[key].data_category[category].color);
			product.setAttribute('data-brand', data[key].data_category[category].brand);
			product.setAttribute('data-size', data[key].data_category[category].size);
		}
	}
}



const search = document.querySelector('.search_holder');

search.addEventListener('keyup', function (event) {
	const term = event.target.value.toLowerCase();
	const tasks = document.getElementsByClassName('catalog__items')[0].children;
	Array.from(tasks).forEach(function (task) {
		const title = task.lastElementChild.firstElementChild.textContent;
		if (title.toLowerCase().indexOf(term) != -1) {
			task.style.display = 'block';
		}else {
			task.style.display = 'none';
		}
	});
});


const cart = document.querySelector('.view__cart');
const bag = document.querySelector('.market-bag');
const close = document.querySelector('.icon__close');

bag.addEventListener('click', function (event) {
	cart.classList.toggle('show');
	cart.classList.remove('hide');
});


close.addEventListener('click', function (event) {
	setTimeout(function () {
		cart.classList.remove('show');
	}, 200);
});




$('.nav-toggle').click(function (){
	$(this).toggleClass('open');
});


const checkbox = document.getElementById('nav-toggle');
const content = document.getElementsByClassName('content')[0];
checkbox.addEventListener('change', function (event) {
	if (this.checked == true) {
		content.classList.add('content__fixed');
	}else {
		content.classList.remove('content__fixed');
	}
});











