let a = 4;


//console.log(b);

const button = document.querySelector('.b-1');
const inputIn = document.querySelector('.i-1');
const divOut = document.querySelector('.out-1');


button.onclick = () => {
    let num = +inputIn.value;
    //console.log(num);
    divOut.innerHTML = num;
    inputIn.value = '';

    if(num < 100) {
        divOut.innerHTML = true;
    } else {
        divOut.innerHTML = false;
    }

}   

const btn2 = document.querySelector('#b-2');
const inp2 = document.querySelector('#i-2');
const inp3 = document.querySelector('#i-3');
let divOut2 = document.querySelector('.out-2');

btn2.onclick = () => {
        let a2 = +inp2.value;
        let a3 = +inp3.value;
        console.log(a2,a3);
    if(a2 > a3) {
        divOut2.innerHTML = a2;
    } else {
        divOut2.innerHTML = a3;
    }
}