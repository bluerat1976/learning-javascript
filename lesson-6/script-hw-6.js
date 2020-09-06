let out = document.querySelector('.out');

// for(let i = 0; i < 5; i++) {
//     for(let k = 0; k < 10; k++) {
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

for(let i = 1; i <= 3; i++) {
    //out.innerHTML +='3*' + i + '=' + ( i*3 ) + '<br>';
   
    for(let k = 1; k <= 3; k++) {
         out.innerHTML += '*';
    }
    out.innerHTML += '_';
}

let out2 = document.querySelector('.out2');

for(let i = 1; i<=3; i++) {

    out2.innerHTML += '<br>' + i + '<br>';
    for(let k = 0; k < 3; k++) {
        out2.innerHTML += '*_';
    }
    
}

let out3 = document.querySelector('.out3');

for(let i = 0; i<=3; i++) {
    out3.innerHTML += '<br>';
    for(let k = 0; k <= 3; k++) {
        out3.innerHTML += '*_'
    }
}