
let a1 = 8;
function f1() {
    let out1 = document.querySelector('.out1');
    console.log('hello')
    out1.innerHTML = a1;
    
}
document.querySelector('.btn1').onclick = f1;

// 2-d 
function f2(a, b) {
    return (a*b);
}

document.querySelector('.btn2').onclick = function() {
    document.querySelector('.out2').textContent = f2(5, 4);
}