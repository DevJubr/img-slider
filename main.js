let flug = 0;

function controler(x) {
    flug = flug + x;
    slidershow (flug);
}

slidershow (flug);
function slidershow (num) {
let slider = document.getElementsByClassName('slider');

if (num == slider.length){
    flug = 0;
    num = 0;
}
if(num < 0) {
    flug = slider.length -1;
    num = slider.length -1;
}

for (let y of slider) {
    y.style.display = 'none';
}

slider[num].style.display = 'block';
}

