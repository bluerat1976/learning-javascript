let btn1 = document.querySelector('button');
let inp1 = document.querySelector('input');
let div = document.querySelector('div');

btn1.onclick = () => {
    let a = +inp1.value;
    alert(a);
    div.innerHTML = a;
    console.log(typeof(a));
}