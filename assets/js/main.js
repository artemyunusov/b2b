let fake = document.querySelector('.fake');
let targetHidden = document.querySelector('.hero__item-center #img-hidden');
let targetImg = document.querySelector('.hero__item-center img');
let targetSpan = document.querySelector('#artem-text');

window.onload = function() {
  fake.addEventListener('mouseenter', function(){
    targetImg.style.display = "none";
    targetHidden.style.display = "block";
    targetSpan.style.webkitFilter = "blur(0)";
  })

  fake.addEventListener('mouseleave', function(){
    targetImg.style.display = "block";
    targetHidden.style.display = "none";
    targetSpan.style.webkitFilter = "blur(5px)";
  })
}