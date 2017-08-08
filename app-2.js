'use strict';


// var str = `aaaaaaaaa`;
var str = `http://egghead.io
not a web address
http://
https://www.egghead.io`;
// var regex = /a{6}/g;
// var regex = /a{5,}/g;
// var regex = /a{5,6}/g;
// var regex = /a{0,}/g;
// var regex = /b{0,}/g;
// var regex = /b*/g;
// var regex = /a{1,}/g;
// var regex = /a+/g;
// var regex = /a{0,1}/g;
// var regex = /a?/g;
// var regex = /https{0,1}:\/\/.{1,}/g;
var regex = /https?:\/\/.+/g;

/**
 * @param String str
 * @param RegExp regex
 * @param HTMLElement target
 */
const output = (str, regex, target) => {
    target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
}

output(str, regex, document.querySelector('pre'));

