
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
            console.log(respData)
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
            for(var category in data[key].data_category) {
                console.log(data[key].data_category[category])
                product.setAttribute('data-style', data[key].data_category[category].style)
                product.setAttribute('data-dress', data[key].data_category[category].dress)
                product.setAttribute('data-color', data[key].data_category[category].color)
                product.setAttribute('data-brand', data[key].data_category[category].brand)
                product.setAttribute('data-size', data[key].data_category[category].size)
            }
    }
}


const search = document.querySelector('.search_holder')

search.addEventListener('keyup',function(event) {
    const term = event.target.value.toLowerCase()
    const tasks = document.getElementsByClassName('catalog__items')[0].children
        Array.from(tasks).forEach(function (task) {
            const title = task.lastElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                task.style.display = 'block'
            } else {
                task.style.display = 'none'
            }
            console.log(title)
        });
    })


const cart = document.querySelector('.view__cart')
const bag = document.querySelector('.market-bag')
const close = document.querySelector('.icon__close')

bag.addEventListener('click',function (event) {
    cart.classList.toggle('show')
    cart.classList.remove('hide')
})


close.addEventListener('click',function (event) {
    setTimeout(function () {
        cart.classList.remove('show')
    },200)
})




$('.nav-toggle').click(function(){
    $(this).toggleClass('open');
})


var checkbox = document.getElementById('nav-toggle')
var  content = document.getElementsByClassName('content')[0]
checkbox.addEventListener('change', function (event) {
    if(this.checked == true) {
        content.classList.add('content__fixed')
    } else {
        content.classList.remove('content__fixed')
    }
})


