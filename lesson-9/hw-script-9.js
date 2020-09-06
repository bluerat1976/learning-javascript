
let out1 = document.querySelector('.out1');
let btn1 = document.querySelector('.btn1');

let a1 = {
    "one" : 15,
    "two" : 16,
    "five" : 20
    };

 function f1() {
   out1.innerHTML = a1.two;
 }
 
 btn1.onclick = f1;

// 2)

let out2 = document.querySelector('.out2');
let btn2 = document.querySelector('.btn2');

 let a4 = {
    "one" : "hello",
    "two" : "mahai",
    "five" : "hi"
    };
console.log(a4);

function f2() {
    let z = ' ';
    a4.for = "Tania";
    delete a4.two;
        for(let key in a4) {
            z += key + '---' + a4[key] + '<br>';
            
                out2.innerHTML = z;
    
               }
    return z;   
}

   
btn2.onclick = f2;


