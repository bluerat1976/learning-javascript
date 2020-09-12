let box = document.getElementById('wrapper');

let btnNewCounter = document.getElementById('newcount')
let getRes;
let finalRes = [];


btnNewCounter.onclick = () => {
    let inputExpences = document.createElement('input');
    inputExpences.setAttribute('type', 'number');
    inputExpences.setAttribute('class', 'exp');
    box.appendChild(inputExpences);

    let btnNewExpence = document.createElement('button');
    btnNewExpence.setAttribute('class', 'input-expence');
    btnNewExpence.innerHTML = 'Input expences';
    box.appendChild(btnNewExpence);

    let showExpences = document.createElement('div');
    showExpences.setAttribute('class', 'showexp');
    box.appendChild(showExpences);

    let btnRemoveExpence = document.createElement('button');
    btnRemoveExpence.setAttribute('class', 'delete');
    btnRemoveExpence.innerHTML = 'Remove last expence';
    box.appendChild(btnRemoveExpence);

    let result = document.createElement('div');
    result.setAttribute('class', 'res');
    box.appendChild(result);

    let btnResetExp = document.createElement('button');
    btnResetExp.setAttribute('class', 'reset');
    btnResetExp.innerHTML = 'Reset';
    box.appendChild(btnResetExp);

    let oldResult = document.createElement('div');
    oldResult.setAttribute('class', 'old');
    box.appendChild(oldResult);

// let sumOut = document.getElementById('out');
// let btnCalc = document.getElementById('btn');
// let inp = document.getElementById('exp');
// let result = document.getElementById('res');
// let removeFigure = document.getElementById('delete');
// let reset = document.getElementById('reset');
// let old = document.getElementById('old');

//let getNewCounter = document.getElementById('newcount');

let mas = [];
 
btnNewExpence.onclick = function() {
    let a = +inputExpences.value;
    mas.push(a);
    showExpences.innerHTML = mas;
    inputExpences.value = '';
   let sum = 0;
    for(let i = 0; i < mas.length; i++) {
        sum += mas[i];   
    }
   result.innerHTML = sum;
}

function removeLastFigure() {
   mas.pop();
   //console.log(mas)
   
    // for(let i = 0; i < mas.length; i++) {
    //     sum += mas[i];
     
    // }result.innerHTML = sum;
    showExpences.innerHTML = mas;
    let sum = 0;
    for(let i = 0; i < mas.length; i++) {
        sum += mas[i];
    }
   result.innerHTML = sum;
}

btnRemoveExpence.onclick = removeLastFigure;


function clearResult() {
    oldResult.innerHTML = result.innerHTML;
    getRes = result.innerHTML;

    // for(let i = 0; i <= finalRes.length; i++) {
    //     finalRes[i] += getRes;
        
    // }console.log(finalRes);
    
    showExpences.innerHTML = ' ';
    result.innerHTML = ' ';
}

btnResetExp.onclick = clearResult;

}



