
let sumOut = document.getElementById('out');
let btnCalc = document.getElementById('btn');
let inp = document.getElementById('exp');
let result = document.getElementById('res')
let mas = [];

btnCalc.onclick = function() {
    let a = +inp.value;
    mas.push(a);
    sumOut.innerHTML = mas;
    inp.value = ' ';
    //console.log(typeof(a))
    

}
