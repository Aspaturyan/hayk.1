//task 1

function myArr(arr, number) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++){
    
    if(arr[i] > number){
      arr1[i] = arr[i];
      console.log (arr1[i]);
      } else{
       console.log ("Such values do not exist");
      }
  }
} 
let arr = [10, 25, 16, -5, 30, 15, 24];
//let arr = [1, 1, 2, -3, 0, 8, 4, 0];
myArr(arr, 16);
//myArr(arr, 9)

// task 2 

function numberRange(a, b){
  let arr = [];
  for(let i = a; i <= b; i++){
    if(i % 2 === 0 ){
     arr.push(i);
     console.log(i);
    } 
  }
  return arr;
} 
 numberRange(19, 42)

// task 3

function violatedIndex(arr) {
  for (let i = 0; i <= arr.length - 1; i++){
    if(arr[i] > arr[i+1]) console.log(i+1);
  }
  return arr;
} 
let arr = [-9, -4, -4, 3, 12, 4, 5];
violatedIndex(arr);
//[2, 12, 15, 48, 64]
//[-9, -4, -4, 3, 12, 4, 5]


//Task  4 ogtvel em inetic ))

function elementsProduct(array) {
  let arr = [];
  for(let i = 1; i < array.length; i++) {
      arr.push(array[i] * array[i - 1]);
  }
  function compareNum(a,b) {
    return a - b;
  }
  console.log(arr)
  return arr;
}
let array = [4, 5, 8, 1, 6, 3];
elementsProduct(array)

//Task  5

function uniqueNum(min, max){
  let arr = [];
  for (let i = min; i <= max; i++ ){
    if(arr[i] === i)
    arr.push(i);
    console.log(i)
  }return arr;
} 
uniqueNum(1, 10)

//Task 7 

let arr = [5, 4, 78, 0, -3, 7];
function myArray(arr){
  let newArray = [];
  let res = [];
  for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
      newArray += arr[i];
    } else{
      res.push(arr[i] * arr[i+1]);
      console.log(res);
    }   
  } 
  return res;
}
myArray(arr);