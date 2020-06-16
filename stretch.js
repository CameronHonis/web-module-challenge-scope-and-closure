// Problem 1
//Output will be:
//a defined? false
//b defined? false
//Reason: functions block all types of variables from being called outside of its lexical scope

// Problem 2
function createBase(num){
    return function(num2){
        return num + num2;
    }
}
let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

// Problem 3
//OOP allows data to be stored in objects and the data is mutable
//functional programming requires data to be transfered and stored by functions and the data is immutable
//OOP is optimal for situations where there are many things with few operations
//functional programming is optimal for situations where there are few things with many operations