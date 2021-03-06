/*
Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:

randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
Note: this function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.


 */
//My solution:
// 1.
const randomCase = x =>
    x.split('')
        .map(v => Math.random() < 0.5 ? v.toUpperCase() : v.toLowerCase())
        .join('');

//
// 2.
// function randomCase(x) {
//     let res='';
//     for(let i=0; i<x.length; i++){
//         if (Math.random() > 0.5){
//             res += x[i].toUpperCase();
//         }else{
//             res += x[i].toLowerCase();
//         }
//     }
//     return res;
// }
//
// 3.
// function randomCase(x) {
//   return x.split('')
//           .map(function(e) { return Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase(); })
//           .join('');
// }

 
