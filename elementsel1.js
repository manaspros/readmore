
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('movetext');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');
let btn = document.getElementById('btn');

let sec = document.getElementById('sec');
let sectext = document.getElementById('sectext');
let maintext =  document.getElementById('maintext');
let footer = document.getElementById('the-footer');
let no = 1;

window.addEventListener('scroll' , function(){
    let value = window.scrollY;
    moon.style.top = value * 0.89 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 1.5 + 'px';
    header.style.top = value * 1.00 + 'px';
    btn.style.top = value * 1.00 + 'px';
});
let button = document.getElementById("Rbutton");

function alerter(x){
    if (x===1){
        let h1 = document.getElementById("1").textContent;
        alert(h1);
    }else {
        let h2 = document.getElementById("2").textContent;
        alert(h2);
}}