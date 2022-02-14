// Avagyan Arshak

// #3

// function fibonacci(num) {
//     if(num <= 0) {
//         console.log('Please enter a number greater then 0');
//         return
//     };
//     let arr = [0, 1]
//     for(let i = 1; i <= num; i++) {
//         arr.push(arr[i] + arr[i-1])
//     } 
//     console.log(...arr)
// }

// fibonacci(4)


// #4
// function sum(n, a, b) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum - a - b
// }

// function twoNums(n) {
//     for(let i = 1; i <= n; i++) {
//         for(let j = i + 1; j <= n; j++) {
//             if(i * j === sum(n, i, j)) {
//                 console.log(n, i, j)
//             }
//         }
//     }
// }

// console.time('Time');
// for(let i = 0; i<300; i++) {
//     twoNums(i)
// }
// console.timeEnd('Time');


// #5

// console.log('%cWelcome to Tic Tac Toe Game !!!', 'color:#FF5733;font-size:1.6rem'); 
// console.log('%cplease type start() to start the game', 'color:#FFC733;font-size:1rem'); 
// console.log('%cto take a step type go(x,y)', 'color:#FFC733;font-size:1rem'); 
 
// let table = [
//   [null, null, null],  
//   [null, null, null],  
//   [null, null, null],  
// ]
 
// function showTable(f){
//   function drowCell(symbol){
//     if( !symbol ){
//         return ' ';
//     } 
//     return symbol;
//   }
 
//   let result = `     1   2   3 
//    ╔═══╦═══╦═══╗
//  1 ║ ${drowCell(f[0][0])} ║ ${drowCell(f[0][1])} ║ ${drowCell(f[0][2])} ║
//    ╠═══╬═══╬═══╣
//  2 ║ ${drowCell(f[1][0])} ║ ${drowCell(f[1][1])} ║ ${drowCell(f[1][2])} ║
//    ╠═══╬═══╬═══╣
//  3 ║ ${drowCell(f[2][0])} ║ ${drowCell(f[2][1])} ║ ${drowCell(f[2][2])} ║
//    ╚═══╩═══╩═══╝
// `;
//   console.log(`%c${result}`, 'color: #FF5733');
// }
 
// let isX = true;
 
// function chechWinner(){

//   //horizontal checking
//   if( table[0][0] && table[0][0] == table[0][1] && table[0][1] == table[0][2]) return table[0][0];
//   if( table[1][0] && table[1][0] == table[1][1] && table[1][1] == table[1][2]) return table[1][0];
//   if( table[2][0] && table[2][0] == table[2][1] && table[2][1] == table[2][2]) return table[2][0];
 
//   //vertical checking
//   if( table[0][0] && table[0][0] == table[1][0] && table[1][0] == table[2][0]) return table[0][0];
//   if( table[0][1] && table[0][1] == table[1][1] && table[1][1] == table[2][1]) return table[0][1];
//   if( table[0][2] && table[0][2] == table[1][2] && table[1][2] == table[2][2]) return table[0][2];
 
//   //diagonal checking
//   if( table[0][2] && table[0][2] == table[1][1] && table[1][1] == table[2][0]) return table[0][2];
//   if( table[0][0] && table[0][0] == table[1][1] && table[1][1] == table[2][2]) return table[0][0];
 
//   //otherwise
//   return false;
// }
 
// function nextStep(x,y, symbol = 'x'){
//     console.clear();
//     table[y-1][x-1] = symbol;
//     showTable(table);
// }

// function go(x, y){
//     if(x < 1 || x > 3 || y < 1 || y > 3) {
//         console.log('Enter valid cell !');
//         return;
//     }
//     if( !table[y-1][x-1] ){
//         nextStep(x, y, isX ? 'x' : 'o');
//     } else {
//         console.log('Enter right cell !');
//         return;
//     }   
 
//     let winner = chechWinner();
//     if(chechWinner()){
//        console.log(`%cWinner ${winner} ! The game will restart in 5 sec..`,'color:#468a5d;font-size:1.2rem');
//        setTimeout(start, 5000)
//     }
//     isX = !isX;
// }
 
// function start(){
//     console.clear();
//     table = [
//         [null, null, null],  
//         [null, null, null],  
//         [null, null, null],  
//     ]
//     showTable(table);
// }
// // start();

