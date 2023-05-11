"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
const course = "next laval courses";
// console.log(course);
let tsfile = "from ts file";
// Primitive types ..................................................................
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
// object {} ................................
const user = {
    name: "Iqbal",
    courseNo: 201,
    isLearning: true,
    id: "yes"
};
// litaral type .....................................................................................
//  জদি নিযে কোন type তৈরি করতে চাও তাহলে সুধু type এর জায়গায় তোমার নিজের type টা বসিয়ে দাও 
//     conpany: "My home" এখানে my home টা আমার নিজের তৈরি করা type
const user1 = {
    conpany: "My home",
    name: "Iqbal",
    courseNo: 201,
    isLearning: true,
    id: "yes"
};
// function type ........................................................................
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
// function method ..................................................................
//  কোন ১ টা function কে যদি অন্য ১ টা Function য়ে function ব্যবহার করে তখন সেটা কে method বলে , আর এই method 
// কে মাজে মাজে this keyword নিতে পারে তখন তা normal function করতে হবে arrow function য়ে কাজ করবে না 
const person = {
    name: "John",
    balance: 5,
    addBlalance(money) {
        return this.balance + money;
    }
};
const calculate1 = (number1, number2, operatorFunction // এখানে operatorFunction টাকে ছোট করে লেখার জন্য type elias ব্যবহার করতে পারি এভাবে type operatiorFuntionType = (x:number,y:number)=>number, এখন এই type elias টা operatorFunction: এর type দিতে পারি operatorFunction:operatiorFuntionType
) => {
    return operatorFunction(number1, number2);
};
calculate1(10, 20, (x, y) => x + y); // এবার এখানে জা হচ্ছে তা হল calculate এর ২ টা প্যারামিটার এর value 10,20 নিয়েছি , তারপর সেই ২ টাকে আবার operatorFunction function এর প্যারামিটার এর value করে দিয়েছি, তারপর operatorFunction এর প্যারামিটার কে +,-,*,/ করেছি 
// calculate1(10,20,(x,y)=>x*y)
// calculate1(10,20,(x,y)=>x/y)
// calculate1(10,20,(x,y)=>x-y)
// function perameter ........................................................................
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
const restFriend = (...restArrayFriend) => /* console.log(restArrayFriend) ;*/ //(...restArrayFriend: string[]) এখানে ... এটা হল rest peramiter 
 restFriend("sojib", "iq", "sojib", "sojib", "sojib", "sojib", "sojib");
// Array and object destructuring ........................................................................
const myObject = "iqbal";
const [objectValue] = myObject; //এখানে myObject এর ফলাফল কে objectValue তে ["iqbal"] এভাবে না লিখে , object এর ভিতর লিখা [objectValue] এটাই এটা দারা বুজানো হয়েছে।
const typeAlias = false;
const calculate = (number1, number2, operatorFunction // এখানে operatorFunction টাকে ছোট করে লেখার জন্য type elias ব্যবহার করতে পারি এভাবে type operatiorFuntionType = (x:number,y:number)=>number, এখন এই type elias টা operatorFunction: এর type দিতে পারি operatorFunction:operatiorFuntionType
) => {
    return operatorFunction(number1, number2);
};
calculate(10, 20, (x, y) => x + y); // এবার এখানে জা হচ্ছে তা হল calculate এর ২ টা প্যারামিটার এর value 10,20 নিয়েছি , তারপর সেই ২ টাকে আবার operatorFunction function এর প্যারামিটার এর value করে দিয়েছি, তারপর operatorFunction এর প্যারামিটার কে +,-,*,/ করেছি 
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
calculate(10, 20, (x, y) => x - y);
const ifDeveloper = {
    name: "iqbal",
    place: "Bangladesh",
    payment: 120,
    work: true
};
const ifDeveloper1 = {
    name: "iqbal",
    place: "Bangladesh",
    payment: 120,
    work: true
};
var laval;
(function (laval) {
    laval["jonior"] = "jonior";
    laval["mid"] = "mid";
    laval["sinior"] = "sinior";
})(laval || (laval = {}));
const ifDeveloper2 = {
    name: "iqbal",
    place: "Bangladesh",
    payment: 120,
    work: true,
    exprianceYear: 2
};
//  null type 
const nullType = (peramiter) => {
    if (peramiter === null) {
        // return  or console.log(object);
        // console.log("peramiter in null ");
    }
    else {
        // console.log("peramiter is a not null");
    }
};
nullType(null);
// unknown type
const myCarSpreed = (spreed) => {
    if (typeof spreed === "number") {
        const convertSpreedInHour = (spreed * 1000) / 3600;
        // console.log(`My car sprees per hour is ${convertSpreedInHour}`);
    }
    if (typeof spreed === "string") {
        const [splitValue, unite] = spreed.split(" "); // split একটা array retun করে তাই splitValue কে [] এর মাজে রাখা হয়েছে , আর এখানে ("10 kmh^-1 ") এই string কে ২ টা value হিসেবে দরা হয়েছে , প্রথম টার নাম splitValue আর ২ টার নাম unite দরা হয়েছে , আর যেহেতু splitValue এটা array তাকে number য়ে convert করার জন্য parseFloat করা হয়েছে , ১০০০ হল মিটার এর , এবং ৩৬০০ হল মিনিট convert এর জন্য 
        const convertSpreedInHour2 = (parseFloat(splitValue) * 1000) / 3600;
        // console.log(`My Second car sprees per hour is ${convertSpreedInHour2}`);
    }
    else {
        // console.log('type is unknown');
    }
};
myCarSpreed(10);
myCarSpreed("10 kmh^-1 ");
// never type কখন ও কোন কিছু return করে না 
function errorThrow(error) {
    throw new Error(error);
}
// errorThrow("error is unknown")
// operator ..................................................................
// Ternary operator 
const myAge = 20;
if (myAge >= 18) {
    // console.log("yes");
}
else {
    // console.log("no");
}
// এই if else কে ternary তে লিখলে এভাবে লিখতে হয় myAge >= 18 ? "yes" : "no"
const myAgeTernary = myAge >= 18 ? "yes" : "no"; // this is called Ternary operator 
//  console.log(myAgeTernary); 
//  Nullish coselancing 
// its just work on null and undefined value
const nullCoselancing = "value1";
const nullCoselancingOperator = nullCoselancing !== null && nullCoselancing !== void 0 ? nullCoselancing : "give this value"; // এখানে ?? এটা হল Nullish coselancing চিহ্ন 
const man1 = {
    name: "man",
    job: "yes",
    age: 21,
    adress: {
        city: "dhaka",
        road: "no road"
    }
};
const home = (_b = (_a = man1 === null || man1 === void 0 ? void 0 : man1.adress) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "give thier name "; // এখানে ?? এটা হল Nullish coselancing চিহ্ন 
// Type Assertions that means আমি typeScript থেকে আমি typeScript এর type বেশি বুজি 
let typeAssertion;
// (typeAssertion as string).concat ;
// (typeAssertion as number).toFixed ;
// (typeAssertion as boolean).valueOf ;
// এটা কাজ করে type টা ১ টা () বেকেট এর ভিতর রাখতে হবে তারপর as ব্যবহার করে তারপর string number boolean যেটা দিতে চায় সেটা দিবে তারপর dot এর পর ঐ type কে জা করতে চায় টা suggetion করবে তা দিবে 
function kmTogrm(prakmTogrm) {
    if (typeof prakmTogrm === "string") {
        const convertKmToGram = parseFloat(prakmTogrm) * 1000;
        return `The kilogram  to gram  ${convertKmToGram}`;
    }
    if (typeof prakmTogrm === "number") {
        const kmlotogram = prakmTogrm * 1000;
        return kmlotogram;
    }
}
const kmlotogramString = kmTogrm("540");
const kmlotogramNumber = kmTogrm(400); // এখানে type assertion এর as এর মাধ্মে এটার type তাকে সিউর করে দিলাম যে এটা number টাইপই হবে। 
const interfaceExample = {
    name: "Example",
    address: "Address",
    job: true,
};
const secondExampleInterface = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondExampleInterface2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// generic ...................  ................................
//  generic type এটা any type এর মত এটাকে লিখা হয় <T> এই ভাবে এবং T দারা বুজানো হয় type , এখন এটা যেখানে ব্যবহার করবে সেখানে type এর নাম ব্যবহার করে তারপর string, number, boolean যেটা হয় সেটা দিবে আর কি । 
const genericTypeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const genericTypeArray22 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // এখানে Array না লিখে geneicType টা লিখে দিলে হবে
const genericTypeArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const genericTypeArray3 = ["1", "2", '3'];
const genericTypeArray4 = [true, false];
const genericTypeArray5 = [
    { name: "iqbal", roll: 1 },
    { name: "iqbal2", roll: 10 }
];
const genericTypeArray6 = ["iqbal", 20];
const genericTypeArray7 = [{ name: "iqbal" }, 20];
// example in function ....................
// const myName:string= "iqbal"
// const sobDetails={
//     job:"yes",
//     work:"daily",
//     time:24
// }
const myAlldetails = (details) => {
    const myName = "iqbal";
    const allDetails = Object.assign(Object.assign({}, details), { myName });
    return allDetails;
};
// now convert the function in generic type just only use here generic type  myAlldetails=<T>(details:T) => 
const sobDetails = {
    job: "yes",
    work: "daily",
    time: 24,
};
const details = myAlldetails(sobDetails);
// generic in extended mode ....................................................................
// <T> এখানে T লেখার পর যদি extend লিখে কোন value দিয়ে দেই তাহলে ঐ object য়ে extende এর value গুলো থাকতে হবে , আর নয় ত error দিবে , যেমন আমি যদি এখানে myAlldetails=<T extend{name:string, sallay:number, job:boolean}> (details:T) => এখন এই extend এর value যদি const sobDetails={job:"yes", work:"daily", time:24, } এর ভিতর না থাকে তাহলে error দেখাবে । যদি extends ব্যবহার না করতাম তাহলে sobDetails ছাড়াও অন্য কোন কিছু myAlldetails2( এর ভিতর দিলে কোন error দেখাত না )
const myAlldetails2 = (details2) => {
    const myName = "iqbal";
    const allDetails = Object.assign(Object.assign({}, details2), { myName });
    return allDetails;
};
// now convert the function in generic type just only use here generic type  myAlldetails=<T>(details:T) => 
const sobDetails2 = {
    job: "yes",
    work: "daily",
    time: 24,
};
// ({name:"iqbal", age:20}, "age")
// const a={
//     name:"iqbal", age:100
// }
// a["age"]
function constExample(obj, key) {
    obj[key];
}
const propertyConstrain = constExample({ name: "iqbal", age: 20 }, "age"); //({name:"iqbal", age:20}, "age") এখানে obj য়ে age আছে , তারপর obj এর বাহিরে আবার age লিখে তার value না দিয়ে  function নে keyof এর মাধ্মে obj য়ে age এর value কে বাহিরের age এর value দেওয়া হয়েছে   function constExample <X,Y extends keyof X>(obj:X, key:Y) => XY Type নাম দেওয়া হয়েছে. Y extends keyof X => এখানে x থেকে age এর value কে Y কে দিয়েছে keyof এর মাধ্মে , (obj:X, key:Y) => প্যারামিটার obj and key and type X and Y
const asyncAwaitFatchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return yield response.json();
});
const asyncAwaitGetData = () => __awaiter(void 0, void 0, void 0, function* () {
    const getData = yield asyncAwaitFatchData();
    // console.log(getData);
});
asyncAwaitGetData();
// conditional 
// Mapcondition Type 
const arrayofNumber = [1, 2, 3];
const convertNumbertoString = arrayofNumber.map(num => num.toString());
console.log(convertNumbertoString);
// Object oriented programming in typescript  ....................................................................
// class Object
// class এর নাম { } এর ভিতর poperty থাকবে , poperty কে access করার জন্য constructor function থাকবে এবং সে this keyword ব্যবহার করবে , তারপর ১ টা normal function (জাকে আমরা method বলি) থাকবে সেও this keyword ব্যবহার করে কাজ করবে । তারপর class এর বাহিরে instance তৈরি করে new keyword ব্যবহার করে  class কে call করবে তারপর ঐ class এর ভিতরের method কে call করে দিবে ,  
// class classParameter { class Poperty ; constructor(){this.name}, normal function / method => function(){ this.}, } instance; instance. call now out put 
class classParameter {
    constructor(name, job, worker) {
        this.name = "iqbal";
        this.job = "ini";
        this.worker = 'raning';
    }
    detailsFunction() {
        // console.log(`This name is ${this.name} this job is ${this.job} thre work is ${this.worker}`);
    }
}
const userAllDetails = new classParameter('name', 'job', 'raning'); // (this is instance) class parameter এর যত টা poperty থাকবে এখানে ততটা value দিতে হবে । তার পর এটাকে userAllDetails call করে classPrameter এর normal function কে call করতে হবে 
userAllDetails.detailsFunction();
// inharitance ... ________________________________________________________________
// inharitance এটা সব class থেকে comon poperty গুলো কে নিয়ে ১ টা class তৈরি করে , এবং এই class এর poperty গুলো কে  ঐ class গুলো তে ব্যবহার করার জন্য ঐ class এর নামের পরে extends keyword ব্যবহার করে comon poperty class এর নাম দিবে, তারপর এই class এর constractor এর ভিতর ঐ comon class এর poperty গুলো super() keyword call করে () এর ভিতর সব poperty গুলো দিয়ে দিতে হয় । মূলত এটাকে inheritence বলে 
class classParameterName {
    constructor(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    userNormalfunction() {
        console.log(`this is first user ${this.name} and ${this.address} and ${this.age}`);
    }
}
class classParameterName1 {
    constructor(name, address, age, popetion) {
        this.name = name;
        this.address = address;
        this.age = age;
        this.popetion = popetion;
    }
    userNormalfunction() {
        console.log(`user 2 all details: ${this.name} and ${this.address} and ${this.age} and popetion: ${this.popetion}`);
    }
    extraWork() {
        console.log(`user 2 is ${this.popetion}`);
    }
}
// এখন এই class গুলো থেকে comon poperty কে নিয়ে আরেকটা class তৈরি করতে হবে, তারপর এই class কে ঐ comon class য়ে ব্যবহার করতে হবে ঐ comon poperty গুলো পেলে দিয়ে 
class comonClass {
    constructor(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    userNormalfunction() {
        // console.log(`user normalfunction call ${this.name} and ${this.address} and ${this.age}`);
    }
}
// এখন এই class তাকে আমরা ব্যবহার করব 
class urser0 extends comonClass {
    constructor(name, address, age) {
        super(name, address, age);
    }
}
// now create a instance object
const user0Details = new urser0('iqbal', 'comilla', 20);
user0Details.userNormalfunction();
class user2 extends comonClass {
    constructor(name, address, age, popetion) {
        super(name, address, age);
        this.popetion = popetion;
    }
}
// again crate instance for this user 2
const user2Detail = new user2('iqbal2', 'comilla', 20, 'officer');
user2Detail.userNormalfunction();
function add1(paramiter1, paramiter2) {
    if (typeof paramiter1 === 'number' && typeof paramiter2 == 'number') { // এখানে if else এর কাজে typeof কে বলা হয় key guard 
        return paramiter1 + paramiter2;
    }
    else {
        return paramiter1.toString() + paramiter2.toString();
    }
}
add1(12, 10);
add1('12', '10');
function findUser(user) {
    if ('role' in user) { //এখানে যে in ব্যবহার করেছে এটাকে in Guard বলে  
        return `I am an admin ${user.role}`;
    }
    else {
        return `this is a normal user`;
    }
}
const objectGuardUser1 = { name: "user1" };
const objectGuardUser2 = { name: "user2", role: "admin" };
// console.log(findUser(objectGuardUser1));
// console.log(findUser(objectGuardUser2));
// instance guard এই guard টা class এবং object কে guard করে instanceof keyword এর মাধ্মে 
class instanceGuard {
    constructor(name, job, popetion) {
        this.name = name;
        this.job = job;
        this.popetion = popetion;
    }
    work() {
        //console.log('this pleople not working');
    }
}
class pleople1 extends instanceGuard {
    constructor(name, popetion, job) {
        super(name, popetion, job);
    }
    people1NormalFunction() {
        // console.log(`i am normal user: ${this.name}`);
    }
}
class pleople2 extends instanceGuard {
    constructor(name, popetion, job, extrawork) {
        super(name, popetion, job);
        this.extrawork = extrawork;
    }
    people1NormalFunction() {
        //console.log(`i am boos user: ${this.name}`);
    }
}
// instance function guard // step 4: create a instance function guard 
function SingleDetails(details) {
    return details instanceof pleople1;
}
function SingleDetails2(details) {
    return details instanceof pleople2;
}
function createInstance(details) {
    if (SingleDetails(details)) {
        details.people1NormalFunction();
    }
    else if (SingleDetails2(details)) {
        details.people1NormalFunction;
    }
    else {
        details.work();
    }
}
// use anothoer way 
// function createInstance(details: instanceGuard){
// if(details instanceof pleople1){
//     details.people1NormalFunction()
// } 
// else if(details instanceof pleople2){
//     details.people1NormalFunction
// }
// else{
//     details.work()
// }
// }
// instance // step 3: create a instance
const people1Details = new pleople1('iqbal', 'officer', 'ini');
const people1Details2 = new pleople2('iqbal', 'officer', 'ini', 'heard working');
createInstance(people1Details);
createInstance(people1Details2);
// Access modifiers 
// public private protected readonly আমরা public and private and redonly ব্যবহার করব 
class userAccount {
    constructor(name, id, balance) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    bankCso() {
        // console.log("don't try to access this bank");
    }
}
const useBankDetails = new userAccount('iqbal', 1212, 20);
useBankDetails.balance = 0; // এখানে balanc তাকে access করে তার balance 0  করে দিয়েছি ,  name: string; id:number;private balance:number; এখন এটাকে যদি secure রাখতে চাই তাহলে  Access modifiers  এর private ব্যবহার করতে পারি , তাহলে ঐ class এর বাহিরে আর তাকে কথাও Access করা জাবে নাহ , bydefault সব গুলো public থাকে ,public লিখতে হয় না , যখনি private ব্যবহার করেছি তখনি এটা দেখাচ্চে আমাকে Property 'balance' is private and only accessible within class 'userAccount'.ts(2341) (property) userAccount.balance: number
//  console.log(useBankDetails);
// Gatter=> get and Setter => set এগুলো function এর মত get return করে আর set return করে না এবং এগুলোকে class এর বাহিরে access করতে গেলে function এর মত call করা লাগে না শুধু সমান চিহ্ন দিয়ে value দিয়ে দিলে হয় useBankDetails1.addBalance = 20000 ........................................................................
// একটু আগে আমরা যেই balance কে private করে দিয়েছি , যাথে class এর বাহিরে ঐ balance কে access করতে না পারি, এখন এই balance কে বাহিরে পেতে হলে getter ব্যবহার করতে হবে। getter হল ১ টা funtion যা class এর ভিতর call করে তাকে  class এর বাহিরে access করা যায় 
class userAccount1 {
    constructor(name, id, balance) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    // Getter methods / functions
    get getterFunction() {
        return this.balance;
    }
    // Setter method / function
    set addBalance(setBalance) {
        this.balance = this.balance + setBalance;
    }
    bankCso() {
        // console.log("don't try to access this bank");
    }
}
const useBankDetails1 = new userAccount1('iqbal', 1212, 20);
useBankDetails1.getterFunction; // console.log(useBankDetails1.getterFunction) এখানে getter function ব্যবহার করে টা Access করা হয়েছে । 
useBankDetails1.addBalance = 20000;
// console.log(useBankDetails1);
// Static in class ................................
// polymorphisms ................................ poly => ওনেক and morphism => রুপ = অনেক রুপ 
// যেই class কোন paramitter নিবে তাকে constructor দিতে হবে না 
// polymorphism এটা সব গুলো class য়ে extends করে same নামে ১ টা  funtion বা method তৈরি করে তার পর সেটার instance তৈরি করে তারপর ১ টা function তৈরি করে সেখানে ঐ seme নামের function কে call করে দেয়, তারপর এই function এর ভিতর class গুলো কে call করে output পাবে । 
// create class and smae name function =>1
class polymorphismPerson {
    workingTime() {
        console.log("Person per day time spend 4 hours");
    }
}
class polymorphismStudent extends polymorphismPerson {
    workingTime() {
        console.log("Student Per day time spend 8 hours");
    }
}
class polymorphismDeveloper extends polymorphismPerson {
    workingTime() {
        console.log("Developer per day time spend 12 hours");
    }
}
function polymorphismFuntion(param) {
    param.workingTime();
}
// create instance of polymorphism class  =>3
const person1 = new polymorphismPerson();
const person2 = new polymorphismStudent();
const person3 = new polymorphismDeveloper();
// এখন class য়ে এই interface এর mehod গুলো ব্যবহার করার জন্য, implements keywords ব্যবহার করে interfaces এর নাম দিয়ে এর ভিতরে interfaces এর সব method ব্যবহার করতে হবে   
class interfaceClass {
    constructor(// এখন এই খানে আমরা type বলে দিয়ে জানতে পারছি যে interface এর method গুলোর type কি হবে 
    name, id, balance) { }
    start() {
        console.log("start engin");
    }
    stop() {
        console.log(" stop engin");
    }
    run() {
        console.log("run engin");
    }
}
//  create instance
const interFaceUserDetails = new interfaceClass('iqbal', 1, 20); // এখানে constructor এর value দেওয়া হয়েছে 
// এখন class য়ে এই interface এর mehod গুলো ব্যবহার করার জন্য, implements keywords ব্যবহার করে interfaces এর নাম দিয়ে এর ভিতরে interfaces এর সব method ব্যবহার করতে হবে   
class abstractClass {
    constructor(// এখন এই খানে আমরা type বলে দিয়ে জানতে পারছি যে interface এর method গুলোর type কি হবে 
    name, id, balance) { }
    run() {
        console.log("run engin");
    }
}
//   Follow function create 
class followFunction extends abstractClass {
    stop() {
        console.log('stop engin');
    }
    start() {
        console.log('start engin');
    }
}
// Combanied with use modal step-5
class MultiPopartiseClass {
    constructor(fristName, lastName) {
        this.data = { fristName, lastName };
        this.method = { fullName: () => `${fristName}, ${lastName} ` };
    }
}
const multiDataInstance = new MultiPopartiseClass('name', 'iqbal');
console.log(multiDataInstance);
