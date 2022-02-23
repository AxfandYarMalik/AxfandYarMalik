//Problem 1
number = 12345;
k = 3;
for(i=0; i<k-1; i++){
     number = parseInt(number/10); 
 }
 temp = parseInt(number%10);
 console.log("Digit: "+ temp);


//Problem 2
// number = 12345;
// sum = 0;
// for(i=0; i<5; i++){
//     sum = sum+parseInt(number%10);
//     number = parseInt(number/10); 
// }
// console.log("Sum: "+ sum);


//Problem 3
// number = 123456
// temp = Array.from(String(number), Number);
// function myfilter(value){
//     return value%2==0;
// }
// temp = temp.filter(myfilter);
// sum = 0;
// for(i=0; i<temp.length; i++){
//     sum = sum + temp[i];

// }
// console.log("Sum: "+ sum);


//Problem 4
// for(i = 0; i<10; i++){
//     console.log("Number: "+ i);
//     console.log("Square: "+ i*i);
//     console.log("Cube: "+ i*i*i);
// }