// var days = 1;
// //if else is a conditional statement
// console.log('====================================');
// console.log('if else');
// if (days === 0) {
//     console.log('Hari ini hari libur');
// } else if (days === 1) {
//     console.log('Hari ini hari kerja');
// } else {
//     console.log('Hari ini hari lain');
// }
// // if is a conditional statement 2
// message = days === 0 ? "Hari ini hari libur" : (days === 1) ?
//     "Hari ini hari kerja" : "Hari ini hari lain";
// console.log('====================================');
// console.log(message);

// //switch case is a conditional statement
// console.log('====================================');
// console.log('switch case');
// switch (days) {
//     case 0:
//         console.log('Hari ini hari libur');
//         break;
//     case 1:
//         console.log('Hari ini hari kerja');
//         break;
//     default:
//         console.log('Hari ini hari lain');
//         break;
// }
// console.log('====================================');

// // for is a loop
// for (days = 1; days <= 10; days++) {
//     console.log('Hari ini hari ke-' + days);
// }

// //while is a loop
// while (days <= 10) {
//     console.log('Hari ini hari ke-' + days);
//     days++;
// }

for (var i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}