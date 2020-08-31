
// let div = document.getElementsByClassName('one');
// //let div2 = document.querySelectorAll('.one');
// let box = document.querySelector('#res');
// for(let i = 0; i < div.length; i++) { 
//     div[i].style.backgroundColor = 'red';
//     console.log(div[i]);
//     div[i].onclick = two;
//     div[i].style.border = '2px solid black';
// }
 
// function two() {
//     console.log('works!!!!!')
// }

let btn = document.querySelector('button') ;
btn.onclick = () => {
    let div3 = document.querySelectorAll('input[type="radio"]');
    console.log(div3);
    for(let i = 0; i < div3.length; i++) {
    if(div3[i].checked) {
        console.log(div3[i].value)
    };
    }
}

let a = ' ';
for(let i = 0; i < 10; i++){
    console.log(i);
    if(i == 6) continue;
    a += i +' ';    
}

document.querySelector('#out').innerHTML = a;

