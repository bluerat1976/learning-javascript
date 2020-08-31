let btn = document.getElementById('b-1');

// btn.onclick = f1;

// function f1() {
//     let res = ' ';
//     for(let i = 0; i <= 50; i++) {
//         res  += i +' ';
        
//     }
//     let div1 = document.getElementById('out')
//     console.log(div1);
//     div1.innerHTML = res;
// }

// btn.onclick = f2;
// function f2() {
//     let res2 = ' ';
//     for(let i = 0; i <= 122; i+=2) {
//         res2 += i + ' ';
//     }
//     console.log(res2);
//     document.getElementById('out').innerHTML = res2;
// }

btn.onclick = f3;

function f3() {
    let res3 = ' ';
    for(let i = 25; i >= 7; i--) {
        res3 += i + ' ';
    }

    document.getElementById('out').innerHTML = res3;
}

