
let arr = [4, 7, 9];
let div = document.getElementsByTagName('div');
let qDiv = document.querySelectorAll('div');

console.log(arr);
console.log(div);
console.log(qDiv);

// 1 =====================================
 
// for(let i = 0; i < qDiv.length; i++) {
//     console.log(qDiv[i]);
// }

// 2 ===========================================

//   for(let key in qDiv) {
//       console.log(qDiv[key]);
//   }

// 3 !!!============================================

  for(let item of qDiv) {
      console.log(item);
  }
