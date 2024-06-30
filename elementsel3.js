
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

let body = document.getElementById("container").addEventListener('load',popHandler());

function popHandler(){
    fetch(`web.json`)
        .then(data => {
            return data.json();
        })
        .then(obj =>{
            let list = document.getElementById(`container`);
            str = ``;
            for (key in obj){
                str +=`       
                <div class="box" id="box">
                <span></span>
                <div class="content">
                <h2 class="con">${obj[key].name}</h2>
                <p>${obj[key].content}</p>
                <button type="button" id="Rbutton" class="Rbutton">Read more »</button>
                </div>
                </div>`;
            }
            list.innerHTML = str;
        })
        .catch(_error => console.error(`ERROR `+ _error))
}

window.addEventListener('scroll' , function(){
    let value = window.scrollY;
    moon.style.top = value * 0.89 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 1.5 + 'px';
    header.style.top = value * 1.00 + 'px';
    btn.style.top = value * 1.00 + 'px';
});


btn.addEventListener("click",() => {
    if (no === 1) {
    sec.style.background = '#f3e3f3';
    footer.style.background = '#FFC3EF';
    maintext.style.color = '#3a0366';
    sectext.style.color = '#8d0799';
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    no = 2;
    }
    else{
    sec.style.background = '#1c0522';
    footer.style.background = '#000000';
    maintext.style.color = '#ae4bff';
    sectext.style.color = '#fff';
    btn.innerHTML = '<i class="fa-regular fa-moon"></i>';
    no = 1;
    }});




setTimeout(function() { starter()}, 300);

function starter() {
    const textButtonPairs = document.querySelectorAll('.box');

    textButtonPairs.forEach(pair => {
        const textElement = pair.querySelector('.con');
        const button = pair.querySelector(".Rbutton");
        button.addEventListener("click", function() {
            const text = textElement.textContent;
            alert(text);
        });
    });
};
