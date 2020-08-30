let a = 6;
let b = 'Hello';

//console.log(b);

document.querySelector('button').onclick = () => {
    
    document.querySelector('button').style.backgroundColor = document.querySelector('#one').value
};

document.querySelector('#one').oninput = () =>{
    console.log(document.querySelector('#one').value)
    document.querySelector('span').innerHTML = document.querySelector('#one').value 
}

document.querySelector('.btn').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if(myCheckBox.checked) {
        console.log('pushed');

    } else {
        console.log('not pushed');
    }
}

document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.n1.value);
    console.log(form.elements.three.value); 
}



