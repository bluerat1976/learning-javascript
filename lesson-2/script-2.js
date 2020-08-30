let a = 6;
let b = 'Hello';

//console.log(b);

const button = document.querySelector('button');
const inputIn = document.querySelector('.age');


button.onclick = () => {
    let num = +inputIn.value

    if(num >= 18 && num < 70) {
        console.log('wellcome')
    } else if(num > 70) {
        console.log('Are you sure?')
    }
    
    else {
        console.log('No')
    }
}

switch(num) {
    case 15:
        console.log('No');
        break;

    case 16:
        console.log('yes');
        break;
    default:
        console.log('ooook')
}

