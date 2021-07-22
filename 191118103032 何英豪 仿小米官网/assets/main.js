
'use strict';

const prButtons = document.querySelectorAll('.promote .pr_op .pr_link');
const prContents = document.querySelectorAll('.promote .pr_box .pr_item');
const prBox = document.querySelector('.promote .pr_box');
prButtons.forEach((node, index) => {
  node.addEventListener('mouseenter', () => {
    prBox.setAttribute('style', 'display: block;');
    prContents[index] && prContents[index].setAttribute('style', 'display: block;');
  });
  node.addEventListener('mouseleave', () => {
    prBox.removeAttribute('style');
    prContents[index] && prContents[index].removeAttribute('style');
  });
});