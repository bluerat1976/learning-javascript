
let out1 = document.querySelector('.out1');
let btn1 = document.querySelector('.btn1');

let a = [3, 'hello', 25, 'hi'];

btn1.onclick = function() {
    out1.innerHTML = a + '<br>' + 'length =' + ' ' + a.length;  
}

let out2 = document.querySelector('.out2');
let btn2 = document.querySelector('.btn2');

let b = [1, 0, 0, 0, 0];
let k = 0;
function f2() {
    if(k+1 < 5) {

    
    b[k] = 0;
    b[k + 1] = 1;
    k++;
    out2.innerHTML = b;
}
}

btn2.onclick = f2;

// 2)
let out3 = document.querySelector('.out3');
let btn3 = document.querySelector('.btn3');

let c = [45, 66, 33, 88, 'hi'];

function f3() {
    for( let i = 0; i <= c.length; i++) {
        if(c[i] === 77) {
            out3.innerHTML = c[i];
        } 
    }
    
}
btn3.onclick = f3;

