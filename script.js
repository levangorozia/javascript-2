
// davaleba #1 - შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამი

// function cifrebi (...numbers) {

//     let numbers_cifrebi = 0;
//      for (let item of numbers){
//         if (item > 0){
//             numbers_cifrebi = numbers_cifrebi + item;
//         }
//     } 
        
//    return numbers_cifrebi;
// }
// let result = cifrebi (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// console.log(result);


// davaleba #2
// function ricxvebi (...numbers){

//     let numbers_ricxvebi = 0;

// for (let item of numbers){

//     numbers_ricxvebi += item
// }
//     console.log( numbers_ricxvebi);
// }

// ricxvebi (10, 50, 6, 7, 8, 11, 6, 3, 9);




// davaleba #3 

//   varianti #1

//    let user = {
//       firstname: 'giorgi',
//       lastname: 'saakadze',
//       age: 32,
//       isloggedin: true
//   }

//   function printsaakadze () {
     
//      if (user.isloggedin == true) {

//         return 'giorgi saakadze';

//       } else if (user.isloggedin == false) 
//         return false
 
// } 

// let result = printsaakadze()
// console.log(result);



// varianti #2

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
// }

// function printsaakadze (obj) {
   
//    if (obj.isloggedin) {
//       return obj.firstname + ' ' + obj.lastname ;

//     } 
//         return false
// } 

// let result = printsaakadze(user);
// console.log(result);



// davaleba #4 - შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

// function getmaxvalue (numbers){

//     let maxvalue = 0;

//     for (let item of numbers){
//         if (item > maxvalue){
//             maxvalue = item;
//         }
//     }

//  return maxvalue;
// }

// console.log(getmaxvalue ([25, 35, 300, 45, 34, 12]));



// davaleba #5 - გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;

// #varianti #1

// let array = [1,2,4,10,34,5,7,87]

// for (let item of array) {
//         if ( item > 0 && item < 10){
//         console.log(item);
//          }
//      }

    //  #varianti #2


    // let numbers = [1,2,4,10,34,5,7,87]

    // for (let item of numbers) {
    //         if ( item ==5){
    //             break;
    //         }
    
    // console.log(item);

    //   }

         


// davaleba #6

// let numbers = [ 1,2,3,4,6,7,8,5,9,10 ]

//    for (let item of numbers) {
//     if (item <=5) {
//         console.log(item);
//     }
// }

