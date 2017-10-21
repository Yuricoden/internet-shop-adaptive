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
