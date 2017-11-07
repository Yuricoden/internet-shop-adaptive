import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import fontObserver from 'fontfaceobserver'
import coreslider from 'coreslider'

$(() => {
	svg4everybody();
});


var font = new fontObserver('FuturaPT-Light')
           new fontObserver('HelveticaNeueCyr-Light')
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
    slideshow:false
})

const togglePop = document.getElementsByClassName('share_number')[0]
const sharelink = document.getElementsByClassName('share_link')[0]
sharelink.onclick = function toggleShow() {
    togglePop.classList.toggle('show')
}


function getParam(callback) {
    var xhr = new XMLHttpRequest()
    var method = 'GET'
    var url = 'https://morning-ridge-20000.herokuapp.com/product'

    xhr.open(method,url,true)
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var respData = JSON.parse(xhr.responseText)
            callback(respData)

        };
    };
    xhr.send();
}

getParam(createData)
var catalog = document.getElementsByClassName('catalog__items')[0]
function createData(data) {
        for (var key in data) {
            var product = document.createElement('div')
            product.className = 'product'
            var descriptionProduct = document.createElement('div')
                descriptionProduct.className = 'description__product'
            var dataImg = document.createElement('img')
                dataImg.src = data[key].img
            var dataName = document.createElement('div')
                 dataName.innerHTML = data[key].name
                dataName.className = 'name__product'
            var dataPrice = document.createElement('div')
                dataPrice.innerHTML = data[key].price
                dataPrice.className = 'price__product'
            product.appendChild(dataImg)
            product.appendChild(descriptionProduct)
            descriptionProduct.appendChild(dataName)
            descriptionProduct.appendChild(dataPrice)
            catalog.appendChild(product)
    }
}









