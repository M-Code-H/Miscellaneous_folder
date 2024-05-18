let stars = document.getElementById('stars1');
let moon = document.getElementById('moon2');
let g1 = document.getElementById('g1');
let g2 = document.getElementById('g2');
let b6 = document.getElementById('b6');
let r5 = document.getElementById('r5');

let idc =document.querySelector('.idc');


window.onscroll = function(){
let value = scrollY;
stars.style.left =  value + 'px'; 
moon .style.top = value * 4 + 'px';
g1.style.top = value * 2 + 'px' ;
g1.style.top = value * 1.5 + 'px' ;
r5.style.top = value  + 'px' ;
b6.style.top = value  + 'px' ;
b6.style.left = value * 3 + 'px' ;
idc.style.fontSize = value  + 'px' ;

if( scrollY >= 67){
    idc.style.fontSize = 67 + 'px' ;
    idc.style.position = 'fixed';
    if(scrollY >=  313){
        idc.style.display = 'none';

    }
    else{
        idc.style.display = 'block';

    }
    if( scrollY >= 85){
    document.querySelector('.main').style.background =
    ' linear-gradient( #376281 , #10001f)';
    }
    else{
        document.querySelector('.main').style.background ='  linear-gradient(#200016 ,#10001f)';
    }
}
};
