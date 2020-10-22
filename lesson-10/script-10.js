
let a = new Set();
a.add(1);
a.add(2);
a.add('hello');
a.add('1');
//a.clear(); // очищает набор от всех элементов
a.delete('hello'); // удаляет элемент
console.log(a);
console.log(a[0]); // no
console.log(a.length); //!!! no
console.log(a.size); // кол-во элементов
console.log(a.has(2)); // true
console.log(a.has('2')); // false
console.log('-------------------------')
for(let item of a) {
    console.log(item);
}

console.log('-----arr turned into set-------')
let arr = [1, 2, 3, 4, 5, 'hello', 2, 3, 5];

let b = new Set(arr);
console.log(b);
console.log(b.size);


console.log(('-----set turned into arr-------'))
let bArt = Array.from(b);
console.log(bArt);
console.log(bArt.length);