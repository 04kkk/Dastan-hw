//              1st task

// let numbers = [1, 2, 3, 4, 5, 6];
// let even = [];

// numbers.forEach((item) => {
//     if(item % 2 === 0){
//         even.push(item)
//     }
// })

// console.log(even);





//              2st task


// let strings = ["apple", "banana", "cherry", "date"];
// let evenStr = [];

// strings.forEach(item => item.length > 5 && evenStr.push(item))

// console.log(evenStr);






//              3rd task 

// let words = ["apple", "pear", "orange", "grape", "apricot"];
// let glass = ['a', 'o'];
// const result = [];

// 1 variant
// words.forEach(item => glass.includes(item[0]) && result.push(item))


// 2 variant

// words.forEach(item => {
//     if (glass.includes(item[0])){
//         result.push(item)
//     }
// })


// 3 variant

// words.forEach(item => {return glass.includes(item[0]) && result.push(item) })

// console.log(result);




//              4nd task

// let numbers = [-5, 3, -2, 8, 0, -1, 7];
// let result = [];
// let result2 = [];

// numbers.forEach((item) => {
//     if( item > 0){
//         result.push(item);
//     }
//     else if (item < 0){
//         result2.push(item);
//     }

// })
// console.log(result);
// console.log(result2);






//              5ty task

// let numbers = [1, 2, 3, 2, 4, 1, 5];
// let dublicat = [];
// let funNumT = [];

// numbers.forEach((item) => {
//     if(funNumT.includes(item)){
//         if(dublicat.includes(item) === false){

//             dublicat.push(item)
//         }
//     }
//     else{
//         funNumT.push(item)
//     }
// })


// console.log(funNumT);
// console.log(dublicat);





//                   6 TASK

// let strings = ["hello", "world1", "test", "abc123", "example"];
// let noNum = [];

// strings.forEach((item, xz) => {
//     if( item.includes(xz) == Number())
//         noNum.push(item);
// }, "")
// console.log(noNum);






//                  7 task

// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie" },
//     { name: "Dave", age: 22 }
//   ];
// newUser = [{}];



// users.forEach((item) => {
//     if( item.age){
//         newUser.push(item);
//     }
// })
// console.log(newUser);





//              8 task

// let movies = [
//     { title: "Movie 1", rating: 6.5 },
//     { title: "Movie 2", rating: 8.3 },
//     { title: "Movie 3", rating: 7.2 },
//     { title: "Movie 4", rating: 5.8 },
//   ];

// let newMovies = [];


// movies.forEach(item => {
//     if (item.rating > 7){

//         newMovies.push(item);
//     }
// })
// console.log(newMovies)





//                  9 task 


// let words = ["one", "two", "three", "four", "five"];
// let evenWords = [];

// words.forEach(( item) => {
//     if (item.length % 2 === 1 ){
//             evenWords.push(item);
//     }

// })
// console.log(evenWords);



//              10 task

// let numbers = [4, 12, 7, 19, 3, 10];
// let newNum = [];
// let newNum2 = [];

// numbers.forEach((item) => {
//     if(item < 10){
//         newNum.push(item)
//     }
//     else if(item >= 10) {
//         newNum2.push(item);
//     }
// })
// console.log(newNum);
// console.log(newNum2);
