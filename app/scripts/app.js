import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import fontObserver from 'fontfaceobserver'

$(() => {
	svg4everybody();
});


var font = new fontObserver('FuturaPT-Light')

font.load().then(function () {
    console.log('Font is available');
}, function () {
    console.log('Font is not available');
});