// run `tsc index.js` to compile it to a js file

// function calculateSum1(
//     a: number, 
//     b: number, 
//     type: 'sum' | 'sub' | 'mul'| 'div'): number {
//     if( type === 'sum') {
//       return a+b
//     } 
//     if (type === 'sub') {
//       return a-b
//     }
//     if ( type === 'mul'){
//       return a*b
//     }
//     if ( type === 'div'){
//       return a/b
//     }
//     return -1
//   }
  
//   const answer = calculateSum1(2,2,'div')
//   console.log(answer);


//types lets you do Unions or Ors

// interface Circle {
//     radius : number
// }

// interface Square {
//     side: number
// }

// interface Reactangle {
//     width : number,
//     height: number
// }

// type Shape = Reactangle | Square | Circle ; // this is Or - '|' and this is And '&'

// function renderShape(shape : Shape){
//     console.log("Rendered");
// }

// function calculateArea (shape: Shape){
//     console.log("Calculated area");
    
// }

// renderShape({
//     radius : 10
// })

enum Arithmetic {
    Add,
    Sub,
    Mul,
    Div
}

 function calculate( a: number, b:number, type :Arithmetic) {
     console.log(type);
     return 1
     
 }

 const ans = calculate(1,2, Arithmetic.Div)
 console.log();
   