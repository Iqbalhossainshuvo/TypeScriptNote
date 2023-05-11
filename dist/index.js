"use strict";
const course = "next laval courses";
console.log(course);
let tsfile = "from ts file";
// Primitive types 
// string
// number
// boolean
// null
// undefined
let course2 = "string type";
let courseNo = 1200;
let students = true;
// Reference type 
//  Array []
let allStudent = ["iqbal", "somon", "sojib"];
let studentsNo = [23, 24, 29, 30];
studentsNo.push(50);
// union type
let allStudentUnion = ["iqbal", "somon", "sojib", 20, true, null];
//  union type য়ে সব type একসাথে use করা যায়, 
// Traple type
// আর traple type য়ে ও সেম , just সুধু এখানে কোন type টা আগে পরে out put করতে চান সেটা 
// করতে পারবেন  , তবে সর্ত হল type গুলো বলে দিতে হবে
let allStudentTraple = ["iqbal", 20, true];
// object {}
const user = {
    name: "Iqbal",
    courseNo: 201,
    isLearning: true,
    id: "yes"
};
// litaral type 
//  জদি নিযে কোন type তৈরি করতে চাও তাহলে সুধু type এর জায়গায় তোমার নিজের type টা বসিয়ে দাও 
//     conpany: "My home" এখানে my home টা আমার নিজের তৈরি করা type
const user1 = {
    conpany: "My home",
    name: "Iqbal",
    courseNo: 201,
    isLearning: true,
    id: "yes"
};
// function type
// normal function
// const function name = (paramiter):return value => output value;
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
// callback function
const arr = [2, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const newArray = arr.map((elem) => elem * elem);
// const newArray= arr.map((elem:number)=>elem*elem (this is call back function))
// function method
//  কোন ১ টা function কে যদি অন্য ১ টা Function য়ে function ব্যবহার করে তখন সেটা কে method বলে , আর এই method 
// কে মাজে মাজে this keyword নিতে পারে তখন তা normal function করতে হবে arrow function য়ে কাজ করবে না 
const person = {
    name: "John",
    balance: 5,
    addBlalance(money) {
        return this.balance + money;
    }
};
// function perameter 
// default parameter
function add2(num1, num2 = 10) {
    return num1 + num2;
}
add2(20, 30);
// এখানে প্যারামিটারে value দিয়ে দিলে সেটাকে বলে default parameter ,আর default parameter সব সময় প্রথম টার পর থেকে যেই কোন টাতে দিতে পারে, তবে default value দেওয়া আর না দেওয়া সমান , না দেওয়া ভালো,
function add3(num1, num2 = 10, num3 = 20) {
    return num1 + num2 + num3;
}
add3(5);
// spread operator mins 3 dot , এটা মূলত যেকোনো array বা object এর value গুলো কপি করে  পুরা array ta টা না 
const operatorArray = ["iqbal", "iq", "iqbal", "iqbal", "iqbal", "iqbal", "iqbal"];
const newOperatorArray = ["iqbal", "iq", "iqbal", "iqbal", "iqbal", "iqbal", "iqbal"];
// operatorArray.push(newOperatorArray); এভাবে লিখলে সে পুরা array টাকে কপি করে বসিয়ে দিবে। এটা value কে কপি করে,গুলো কে আলাদা আলাদা করে 
operatorArray.push(...newOperatorArray); // spread operator ব্যবহার করে value কে কপি করবে,
// rest oprator এটা value গুলো কে array তে একসাত  করে 
const restFriend = (...restArrayFriend) => console.log(restArrayFriend);
restFriend("sojib", "iq", "sojib", "sojib", "sojib", "sojib", "sojib");

