let img = document.querySelector('.img');
let container = document.querySelector('.container');
let textd = document.querySelector('.textd');
function phones(phone){
    img.src = phone;
};
function colors(color){
    container.style.background = color;
}

function texts(text){
textd.innerHTML = text; 
}