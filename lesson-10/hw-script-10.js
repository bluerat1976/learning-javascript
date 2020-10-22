let a1 = new Set();

a1.add('h');
a1.add('b');
a1.add('o');
a1.add('h');

console.log(a1);


let s2 = new Set();

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn-2');
let div = document.getElementById('out2');

btn.onclick = function() {
    s2.add(inp.value);
    console.log(s2);
    div.innerHTML = s2;
    inp.value = ' ';
    return s2;
}

btn2.onclick = () => {
    s2.delete(inp.value);
    console.log(s2);
    return s2;
}