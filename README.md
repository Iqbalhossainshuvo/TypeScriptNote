<p>
Creat a typescript environment Step by step
NVM- node version management
------------------------------------------------------------
install nvm from github (nvm windows)
nvm - - v (to check the version)
nvm install 18.16.0(to install a specific node version not NVM version)
nvm list (to check the installed node versions)
nvm use 19.05.02(to use specific node version)
TypeScript
-------------------------------------------------------------------------
npm install -g typescript
tsc - - v (tsc is a typescript compiler)
tsc - - init (to initilalized a typescript configuration file)
Nodemon
---------------------------------------------------------------------
npm init -y (to create a package json file and package json lock file will be initialized)
npm i -D nodemon (set nodemon as a dev dependency)
Add a script to package.json file “start” : “nodemon index.ts”
SO NOW WE NEED TO CONVERT A TS FILE TO JS FILE
THEN NODEMON WILL AUTOMATICALLY COMPILE THE PROJECT
Two terminal need to be opened at the same time
We can simplify this process with ts-node-dev package
--------------------------------------------------------------
Ts-node-dev (this package can typescript file in node environment)
npm i ts-node-dev (install the ts-node-dev package)
Add this script to the package.json "start": "ts-node-dev --respawn --transpile-only index.ts",
In Typescript config file activate this two line and target the input and outpur folder
rootdir (src)
outdir(dist)
Command to run specific file
--------------------------------------------------------------
npx ts-node-dev - -respawn ./src/function.ts


Shorthand 
------------------------------------------------------------ 
in your device install nvm software for node version manage,
npm init --y    => node json,
npm install -g typescript    => install typescript,
tsc --init    => for ts json,
npm i nodemon     => install for run your Project by script ,
npm i ts-node-dev   => ts file out put quickly use this node pakage
,
now divide the ts file,  js and ts, 
at first make a folder name src and for js file make another file dist or somthing .
go to tsconfig file and uncomment the "rootDir": "./",   and after / put your folder 
name like "rootDir": "./src", then for javascript file   // "outDir": "./",  uncomment
outDir and put here javascript folder name like "outDir": "./dist",

now just open terminal and write commend tsc,

and run ts file this commend npx ts-node-dev --respawn src/index.ts,




Start your Learning
---------------------------------------------------------------------------------------



const course : string= "next laval courses"
// console.log(course);

let tsfile: string = "from ts file"

// Primitive types ..................................................................
// string
// number
// boolean
// null
// undefined



let course2: string= "string type"
let courseNo: number = 1200
let students: boolean = true

// Reference type 
//  Array []

let allStudent : string[]=["iqbal","somon", "sojib"]

let studentsNo: number[] = [23,24,29,30]
studentsNo.push(50)

// union type
let allStudentUnion =["iqbal","somon", "sojib", 20, true, null]
//  union type য়ে সব type একসাথে use করা যায়, 
// Traple type
// আর traple type য়ে ও সেম , just সুধু এখানে কোন type টা আগে পরে out put করতে চান সেটা 
// করতে পারবেন  , তবে সর্ত হল type গুলো বলে দিতে হবে

let allStudentTraple: [String,Number, boolean] =["iqbal", 20, true]




// object {} ................................
const user : {
    name: String,
    courseNo:Number,
    isLearning: boolean,
    id?:String

} ={
    name:"Iqbal",
    courseNo:201,
    isLearning:true,
    id: "yes"
}

// litaral type .....................................................................................
//  জদি নিযে কোন type তৈরি করতে চাও তাহলে সুধু type এর জায়গায় তোমার নিজের type টা বসিয়ে দাও 
//     conpany: "My home" এখানে my home টা আমার নিজের তৈরি করা type
const user1 : {
    conpany: "My home"
    name: String,
    courseNo:Number,
    isLearning: boolean,
    id?:String

} ={
    conpany: "My home",
    name:"Iqbal",
    courseNo:201,
    isLearning:true,
    id: "yes"
}


// function type ........................................................................
// normal function
// const function name = (paramiter):return value => output value;
function add(num1:number,num2:number) {
    return num1+num2;
}

add(2,3)
// arrow function
const addArrow = (num1:number,num2:number):number => num1+num2;

// callback function
const arr = [2,5,6,7,8,9,10,11,12,13]
const newArray= arr.map((elem:number)=>elem*elem)
// const newArray= arr.map((elem:number)=>elem*elem (this is call back function))

// function method ..................................................................
//  কোন ১ টা function কে যদি অন্য ১ টা Function য়ে function ব্যবহার করে তখন সেটা কে method বলে , আর এই method 
// কে মাজে মাজে this keyword নিতে পারে তখন তা normal function করতে হবে arrow function য়ে কাজ করবে না 
const person :{
    name : string,
    balance : number,
    addBlalance(money:number):number // যদি method function কোন কিছু return না করে তাহলে type এর value হবে void=> addBlalance(money:number): viod;
} = {
    name: "John",
    balance:5,
    addBlalance(money:number){
        return this.balance + money
    }
}


const calculate1 =(
    number1:number,
    number2:number, 
    operatorFunction: (x:number,y:number)=>number // এখানে operatorFunction টাকে ছোট করে লেখার জন্য type elias ব্যবহার করতে পারি এভাবে type operatiorFuntionType = (x:number,y:number)=>number, এখন এই type elias টা operatorFunction: এর type দিতে পারি operatorFunction:operatiorFuntionType
)=>{
    return operatorFunction(number1,number2)
}

calculate1(10,20,(x,y)=>x+y) // এবার এখানে জা হচ্ছে তা হল calculate এর ২ টা প্যারামিটার এর value 10,20 নিয়েছি , তারপর সেই ২ টাকে আবার operatorFunction function এর প্যারামিটার এর value করে দিয়েছি, তারপর operatorFunction এর প্যারামিটার কে +,-,*,/ করেছি 
// calculate1(10,20,(x,y)=>x*y)
// calculate1(10,20,(x,y)=>x/y)
// calculate1(10,20,(x,y)=>x-y)






// function perameter ........................................................................
// default parameter
function add2(num1:number,num2:number=10){
    return num1+num2
}
add2(20,30)

// এখানে প্যারামিটারে value দিয়ে দিলে সেটাকে বলে default parameter ,আর default parameter সব সময় প্রথম টার পর থেকে যেই কোন টাতে দিতে পারে, তবে default value দেওয়া আর না দেওয়া সমান , না দেওয়া ভালো,

function add3(num1:number,num2:number=10,num3:number=20){
    return num1 + num2 + num3
}

add3(5)

// spread operator mins 3 dot , এটা মূলত যেকোনো array বা object এর value গুলো কপি করে  পুরা array ta টা না 

const operatorArray = ["iqbal","iq","iqbal","iqbal","iqbal","iqbal","iqbal"]
const newOperatorArray = ["iqbal","iq","iqbal","iqbal","iqbal","iqbal","iqbal"]

// operatorArray.push(newOperatorArray); এভাবে লিখলে সে পুরা array টাকে কপি করে বসিয়ে দিবে। এটা value কে কপি করে,গুলো কে আলাদা আলাদা করে 
operatorArray.push(...newOperatorArray); // spread operator ব্যবহার করে value কে কপি করবে,

// rest oprator এটা value গুলো কে array তে একসাত  করে 

const restFriend =(...restArrayFriend: string[]):void=>/* console.log(restArrayFriend) ;*/ //(...restArrayFriend: string[]) এখানে ... এটা হল rest peramiter 
restFriend("sojib", "iq","sojib","sojib","sojib","sojib","sojib")



// Array and object destructuring ........................................................................
const myObject="iqbal"
const [objectValue] =myObject //এখানে myObject এর ফলাফল কে objectValue তে ["iqbal"] এভাবে না লিখে , object এর ভিতর লিখা [objectValue] এটাই এটা দারা বুজানো হয়েছে।



// Type elias এটা হল কোন ১টা type কে default call করে তাকে ১ টা নাম দিয়ে সেই নাম কে বিভিন্ন জায়গায় বিভিন্ন ভাবে ব্যবহার করা 

type typeName= boolean
const typeAlias:typeName = false


type operatiorFuntionType = (x:number,y:number)=>number
const calculate =(
    number1:number,
    number2:number, 
    operatorFunction: (x:number,y:number)=>number // এখানে operatorFunction টাকে ছোট করে লেখার জন্য type elias ব্যবহার করতে পারি এভাবে type operatiorFuntionType = (x:number,y:number)=>number, এখন এই type elias টা operatorFunction: এর type দিতে পারি operatorFunction:operatiorFuntionType
)=>{
    return operatorFunction(number1,number2)
}

calculate(10,20,(x,y)=>x+y) // এবার এখানে জা হচ্ছে তা হল calculate এর ২ টা প্যারামিটার এর value 10,20 নিয়েছি , তারপর সেই ২ টাকে আবার operatorFunction function এর প্যারামিটার এর value করে দিয়েছি, তারপর operatorFunction এর প্যারামিটার কে +,-,*,/ করেছি 
calculate(10,20,(x,y)=>x*y)
calculate(10,20,(x,y)=>x/y)
calculate(10,20,(x,y)=>x-y)


// Union Type মানে কয়েক টা type কে একসাথে ব্যবহার করা  ......................... ________________________________________________________________

type developr={
    name: string
}

type jobStart={
    name: string,
    place: string,
    payment: number,
    work:boolean
}

const ifDeveloper:developr | jobStart ={ // এখানে এটা কে | অর বলে , javascript কে || এটাকে বলে , এই অর টার কারনে এই টাকে বলে union typw 
    name:"iqbal",
    place:"Bangladesh",
    payment:120,
    work:true
}

// intersections type ....................................................................

type developr1={
    name: string
}

type jobStart1= developr & { // এখানে comon বিষয় গুলো বার বার ব্যবহার না করে, নাম এর type কে jobStart type এর সাথে & এর মাধ্মে add করা কে intersection type বলে। 
    place: string,
    payment: number,
    work:boolean
}

const ifDeveloper1:developr | jobStart ={ // এখানে এটা কে | অর বলে , javascript কে || এটাকে বলে , এই অর টার কারনে এই টাকে বলে union typw 
    name:"iqbal",
    place:"Bangladesh",
    payment:120,
    work:true
}


// enum ........................................................................

type jobStart2= developr & { // 
    place: string,
    payment: number,
    work:boolean
}


enum laval{ // এই laval কে চাইলে nextLavalDeveloper এর laval য়ে type হিসেবে বসাতে পারি laval:laval.jonior কিন্তু এটা best practices না, 
    jonior="jonior",
    mid="mid",
    sinior="sinior"
}

type nextLavalDeveloper0= jobStart2 &{
    exprianceYear: number
    laval:laval.jonior
}
type nextLavalDeveloper= jobStart2 &{
    exprianceYear: number
    laval:"jonior"|"mid" |"sinior"
}


const ifDeveloper2:developr | nextLavalDeveloper ={ 
    name:"iqbal",
    place:"Bangladesh",
    payment:120,
    work:true,
    exprianceYear:2
}

//  null type 

const nullType = (peramiter:string | null)=>{
    if(peramiter === null){
        // return  or console.log(object);
        // console.log("peramiter in null ");
    }
    else{
        // console.log("peramiter is a not null");
    }
}

nullType(null)

// unknown type

const myCarSpreed=(spreed:unknown)=>{
if(typeof spreed === "number"){
     const convertSpreedInHour = (spreed*1000)/3600 ;
    // console.log(`My car sprees per hour is ${convertSpreedInHour}`);
} 
if(typeof spreed === "string"){
    const  [splitValue, unite] = spreed.split(" ") // split একটা array retun করে তাই splitValue কে [] এর মাজে রাখা হয়েছে , আর এখানে ("10 kmh^-1 ") এই string কে ২ টা value হিসেবে দরা হয়েছে , প্রথম টার নাম splitValue আর ২ টার নাম unite দরা হয়েছে , আর যেহেতু splitValue এটা array তাকে number য়ে convert করার জন্য parseFloat করা হয়েছে , ১০০০ হল মিটার এর , এবং ৩৬০০ হল মিনিট convert এর জন্য 
    const convertSpreedInHour2 = (parseFloat(splitValue) *1000)/3600 ;
    // console.log(`My Second car sprees per hour is ${convertSpreedInHour2}`);
}
else{
    // console.log('type is unknown');
}
}

myCarSpreed(10)
myCarSpreed("10 kmh^-1 ")

// never type কখন ও কোন কিছু return করে না 

function errorThrow(error:string): never{
    throw new Error (error)
}

// errorThrow("error is unknown")


// operator ..................................................................

// Ternary operator 

 const myAge : number = 20

 if(myAge>=18){
    // console.log("yes");
 }else{
    // console.log("no");
 }

// এই if else কে ternary তে লিখলে এভাবে লিখতে হয় myAge >= 18 ? "yes" : "no"
 const myAgeTernary = myAge >= 18 ? "yes" : "no"; // this is called Ternary operator 
//  console.log(myAgeTernary); 


//  Nullish coselancing 
// its just work on null and undefined value

const nullCoselancing = "value1";

const nullCoselancingOperator = nullCoselancing ??  "give this value"; // এখানে ?? এটা হল Nullish coselancing চিহ্ন 



type man ={
    name:string,
    job:string,
    age:number,
    adress:{
        city:"dhaka",
        road:"no road",
        home?:""
    }
} 


const man1:man = {
    name: "man",
    job:"yes",
    age:21,
    adress:{
        city:"dhaka",
        road: "no road"
    }
};

const home = man1?.adress?.home?? "give thier name " // এখানে ?? এটা হল Nullish coselancing চিহ্ন 


// Type Assertions that means আমি typeScript থেকে আমি typeScript এর type বেশি বুজি 

let typeAssertion:any;

// (typeAssertion as string).concat ;
// (typeAssertion as number).toFixed ;
// (typeAssertion as boolean).valueOf ;

// এটা কাজ করে type টা ১ টা () বেকেট এর ভিতর রাখতে হবে তারপর as ব্যবহার করে তারপর string number boolean যেটা দিতে চায় সেটা দিবে তারপর dot এর পর ঐ type কে জা করতে চায় টা suggetion করবে তা দিবে 

function kmTogrm(prakmTogrm : string| number) : string | number| undefined{
    if(typeof prakmTogrm === "string"){
      const convertKmToGram  = parseFloat(prakmTogrm)*1000
      return `The kilogram  to gram  ${convertKmToGram}`
    }
    if(typeof prakmTogrm === "number"){
         const kmlotogram= prakmTogrm*1000;
         return kmlotogram
    }
}

const kmlotogramString =  kmTogrm("540") as string;
const kmlotogramNumber = kmTogrm(400) as number; // এখানে type assertion এর as এর মাধ্মে এটার type তাকে সিউর করে দিলাম যে এটা number টাইপই হবে। 

// interface type 
// এটা ১টা type এবং এটা লিখার নিয়ম হল প্রথমে interfaces লিখতে হবে তারপর type এর নাম লিখতে হবে তারপর {} এর ভিতর সব লিখতে হয় ।

// genaraly 
type generalType = { // এই type কে বলে type aliase
    name: string,
    address: string,
    job: boolean,
}

// but in interface type এটাতে type এর পরিবর্তয়ে interfaces লিখতে হয় , type এর নাম এর পর সমান চিহ্ন দিতে হয় না , আর interface type object এর ক্ষেত্রে ব্যবহার হয় আর 
 interface interfaceType {
    name: string,
    address: string,
    job: boolean,
 }

 const interfaceExample: interfaceType ={
    name: "Example",
    address: "Address",
    job: true,
 }

//  general type ........................................................................
type numberType = number[]
 const secondExampleInterface: numberType = [1,2,3,4,5,6,7,8,9,10]

//  interface type ........................................................................
interface numberType2 {
    [index: number]: number //this is called index signature , object এর index টা নাম্বার, আর যেহেতু index টা নাম্বার তাই এর type ও হবে number  
}
 const secondExampleInterface2: numberType2 = [1,2,3,4,5,6,7,8,9,10]


// generic ...................  ................................
//  generic type এটা any type এর মত এটাকে লিখা হয় <T> এই ভাবে এবং T দারা বুজানো হয় type , এখন এটা যেখানে ব্যবহার করবে সেখানে type এর নাম ব্যবহার করে তারপর string, number, boolean যেটা হয় সেটা দিবে আর কি । 
const genericTypeArray:number[]=[1,2,3,4,5,6,7,8,9] 
// এখানে number এর পর [] এই টা না দিয়ে <> এটা ব্যবহার করতে পারি এবং Array<> এটার ভিতর type এর value টা লিখতে পারি, এবং যদি একের অধিক value হয় তাহলে <> তার ভিতর {} এটা ব্যবহার করে এর ভিতর value গুলো লিখব Array<{name:string, roll:number}>

type genericType <t> = Array<t>;
const genericTypeArray22:genericType<number> = [1,2,3,4,5,6,7,8,9] // এখানে Array না লিখে geneicType টা লিখে দিলে হবে

const genericTypeArray2:Array<number> = [1,2,3,4,5,6,7,8,9] 

const genericTypeArray3:Array<string> = ["1","2",'3'] 
const genericTypeArray4:Array<boolean> = [true, false] 
const genericTypeArray5:Array<{name:string,roll:number}> = [
    {name:"iqbal",roll:1},
    {name:"iqbal2",roll:10}
] 

type genericType1 <x,y> = [x,y];
const genericTypeArray6:genericType1<string,number> = ["iqbal",20]
const genericTypeArray7:genericType1<object,number> = [{name:"iqbal"},20]

// example in function ....................

// const myName:string= "iqbal"
// const sobDetails={
//     job:"yes",
//     work:"daily",
//     time:24
// }

const myAlldetails=<T> (details:T) =>{
    const myName = "iqbal"
    const allDetails = {...details,myName}
    return allDetails
}

// now convert the function in generic type just only use here generic type  myAlldetails=<T>(details:T) => 
const sobDetails={
    job:"yes",
    work:"daily",
    time:24,
    
}
const details = myAlldetails(sobDetails)


// generic in extended mode ....................................................................
// <T> এখানে T লেখার পর যদি extend লিখে কোন value দিয়ে দেই তাহলে ঐ object য়ে extende এর value গুলো থাকতে হবে , আর নয় ত error দিবে , যেমন আমি যদি এখানে myAlldetails=<T extend{name:string, sallay:number, job:boolean}> (details:T) => এখন এই extend এর value যদি const sobDetails={job:"yes", work:"daily", time:24, } এর ভিতর না থাকে তাহলে error দেখাবে । যদি extends ব্যবহার না করতাম তাহলে sobDetails ছাড়াও অন্য কোন কিছু myAlldetails2( এর ভিতর দিলে কোন error দেখাত না )

const myAlldetails2=<T extends {name:string, sallary:number}> (details2:T) =>{
    const myName = "iqbal"
    const allDetails = {...details2,myName}
    return allDetails
}

// now convert the function in generic type just only use here generic type  myAlldetails=<T>(details:T) => 
const sobDetails2={
    job:"yes",
    work:"daily",
    time:24,
    
}
// const details2 = myAlldetails2(sobDetails2)   here error=> Argument of type '{ job: string; work: string; time: number; }' is not assignable to parameter of type '{ name: string; sallary: number; }'



// Constraint using key ........................................
type person={ //type system 1
    name: string;
    roll: number;
    course: string;
}

type personManuallyType = "name" | "roll" | "course"  // general type type system 2

type constraintPerson = keyof person // constraint type type system 3


// ({name:"iqbal", age:20}, "age")
// const a={
//     name:"iqbal", age:100
// }
// a["age"]

function constExample <X,Y extends keyof X>(obj:X, key:Y){
 obj[key]
}

const propertyConstrain = constExample({name:"iqbal", age:20}, "age") //({name:"iqbal", age:20}, "age") এখানে obj য়ে age আছে , তারপর obj এর বাহিরে আবার age লিখে তার value না দিয়ে  function নে keyof এর মাধ্মে obj য়ে age এর value কে বাহিরের age এর value দেওয়া হয়েছে   function constExample <X,Y extends keyof X>(obj:X, key:Y) => XY Type নাম দেওয়া হয়েছে. Y extends keyof X => এখানে x থেকে age এর value কে Y কে দিয়েছে keyof এর মাধ্মে , (obj:X, key:Y) => প্যারামিটার obj and key and type X and Y



interface asyncAwait {
    userId:number,
    id:number,
    title:string,
    complete:boolean,
}

const asyncAwaitFatchData =async() : Promise<asyncAwait> =>{ // এখানে আমি promise করে বলে দিলাম asyncAwait এর data এর মত আমাকে fetch করে ডাটা দাও , 
    const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return await response.json()
}

const asyncAwaitGetData =async () : Promise<void>=>{ // এখানে কোন কিছু return করে না তাই এটার type void 
const getData = await asyncAwaitFatchData()
// console.log(getData);
}
asyncAwaitGetData()

// Condition type just use ? : or extends   ........................................................................

// যখন ১টা type অন্য ১ টা type এর উপর নির্ভরশীল হয় , তখন তাকে condition বলে । 

type a1 = string
type a2 = a1 extends string ? string : null // a2 মান a1 থেকে নিতে চাই , তাই ১ টা শর্ত দিলাম , যদি a1 এর value string হয় তাহলে a2 এর মান string  দাও নতুবা null দিয়ে দাও 

// conditional 


// Mapcondition Type 

const arrayofNumber = [1,2,3]
const convertNumbertoString = arrayofNumber.map(num =>num.toString());
console.log(convertNumbertoString);


type ArrayOfNumber = {
    height:number,
    weight:number
}

type a = ArrayOfNumber['height'] // this is called look up type bcz this suggestion automatically value 















// Object oriented programming in typescript  ....................................................................


// class Object
// class এর নাম { } এর ভিতর poperty থাকবে , poperty কে access করার জন্য constructor function থাকবে এবং সে this keyword ব্যবহার করবে , তারপর ১ টা normal function (জাকে আমরা method বলি) থাকবে সেও this keyword ব্যবহার করে কাজ করবে । তারপর class এর বাহিরে instance তৈরি করে new keyword ব্যবহার করে  class কে call করবে তারপর ঐ class এর ভিতরের method কে call করে দিবে ,  

// class classParameter { class Poperty ; constructor(){this.name}, normal function / method => function(){ this.}, } instance; instance. call now out put 

class classParameter {
    name:string; // class poperty 
    job:string;
    worker:string;

    constructor(name:string, job:string, worker:string){ // constructor function
        this.name="iqbal";
        this.job="ini";
        this.worker='raning';
    }

    detailsFunction(){ // normal function or call method 
        // console.log(`This name is ${this.name} this job is ${this.job} thre work is ${this.worker}`);
    }
}

const userAllDetails = new classParameter('name','job','raning' ) // (this is instance) class parameter এর যত টা poperty থাকবে এখানে ততটা value দিতে হবে । তার পর এটাকে userAllDetails call করে classPrameter এর normal function কে call করতে হবে 
userAllDetails.detailsFunction();





// inharitance ... ________________________________________________________________

// inharitance এটা সব class থেকে comon poperty গুলো কে নিয়ে ১ টা class তৈরি করে , এবং এই class এর poperty গুলো কে  ঐ class গুলো তে ব্যবহার করার জন্য ঐ class এর নামের পরে extends keyword ব্যবহার করে comon poperty class এর নাম দিবে, তারপর এই class এর constractor এর ভিতর ঐ comon class এর poperty গুলো super() keyword call করে () এর ভিতর সব poperty গুলো দিয়ে দিতে হয় । মূলত এটাকে inheritence বলে 



class classParameterName {
name: string;
address: string;
age: number;

constructor(name: string, address: string, age: number){
this.name = name;
this.address = address;
this.age = age;
}

userNormalfunction(){
    console.log(`this is first user ${this.name} and ${this.address} and ${this.age}`);
}
}



class classParameterName1 {
name: string;
address: string;
age: number;
popetion: string;

constructor(name: string, address: string, age: number, popetion: string){
this.name = name;
this.address = address;
this.age = age;
this.popetion = popetion
}

userNormalfunction(){
console.log(`user 2 all details: ${this.name} and ${this.address} and ${this.age} and popetion: ${this.popetion}`);
}

extraWork(){
    console.log(`user 2 is ${this.popetion}`);
}

}

// এখন এই class গুলো থেকে comon poperty কে নিয়ে আরেকটা class তৈরি করতে হবে, তারপর এই class কে ঐ comon class য়ে ব্যবহার করতে হবে ঐ comon poperty গুলো পেলে দিয়ে 
class comonClass {
    name: string;
    address: string;
    age: number

    constructor(name: string, address: string, age: number) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    userNormalfunction(){
        // console.log(`user normalfunction call ${this.name} and ${this.address} and ${this.age}`);
    }
}

// এখন এই class তাকে আমরা ব্যবহার করব 

class urser0 extends comonClass{
constructor(name:string,address:string,age:number){
super(name,address,age)
}
}
// now create a instance object

const user0Details = new urser0 ('iqbal','comilla',20)
user0Details.userNormalfunction()


class user2 extends comonClass{
    popetion:string
constructor(name:string,address:string,age:number, popetion:string){
    super(name,address,age)
    this.popetion = popetion;
}
}

// again crate instance for this user 2

const user2Detail = new user2('iqbal2','comilla',20, 'officer')
user2Detail.userNormalfunction()




// this is very important for ts types 
// Type Guard টা কাজ করে run time য়ে আর কোন কিছু কে চেক করে তার সঠিক ফলাফল দেওয়া হল তার কাজ  

// key Guard  (Module 4-4)
type typeName1 = string | number

function add1 (paramiter1:typeName1, paramiter2:typeName1): typeName1{
if(typeof paramiter1 === 'number' && typeof paramiter2=='number'){  // এখানে if else এর কাজে typeof কে বলা হয় key guard 
    return paramiter1 + paramiter2
} else{
    return paramiter1.toString() + paramiter2.toString()
}
}
add1(12,10)
add1('12','10')


// in Guard / এটা ব্যবহার হয় object য়ে 

type objectGuard = {
    name: string
}

type objectGuard2 ={
    name: string;
    role: string
}


function findUser (user:objectGuard | objectGuard2):string{
if('role' in user){ //এখানে যে in ব্যবহার করেছে এটাকে in Guard বলে  
return `I am an admin ${user.role}`
}else{
    return `this is a normal user`
}
}

const objectGuardUser1 : objectGuard ={name:"user1"};
const objectGuardUser2 : objectGuard2 ={name:"user2",role:"admin"};


// console.log(findUser(objectGuardUser1));
// console.log(findUser(objectGuardUser2));




// instance guard এই guard টা class এবং object কে guard করে instanceof keyword এর মাধ্মে 

class instanceGuard { // step 1: create a comon poperty class
    name: string;
    popetion: string;
    job: string;

    constructor(name: string, job:string, popetion: string){
        this.name = name;
        this.job=job
        this.popetion = popetion
    }

    work() {
        //console.log('this pleople not working');
    }
}


class pleople1 extends instanceGuard { // step 2: create a class with  comon poperty class
    constructor(name:string,popetion:string, job:string){
        super(name,popetion,job)
    }
    people1NormalFunction(){
       // console.log(`i am normal user: ${this.name}`);
    }
}

class pleople2 extends instanceGuard{ // step 2: create a class with  comon poperty class
    extrawork: string 
    constructor(name:string,popetion:string, job:string, extrawork:string){
     super(name,popetion,job) 
     this.extrawork = extrawork  
    }
    people1NormalFunction(){
        //console.log(`i am boos user: ${this.name}`);
    }
}



// instance function guard // step 4: create a instance function guard 
function SingleDetails(details: instanceGuard):details is pleople1 {
return details instanceof pleople1
}

function SingleDetails2(details: instanceGuard): details is pleople2 {
    return details instanceof pleople2
}

function createInstance(details: instanceGuard) {
if(SingleDetails(details)){
    details.people1NormalFunction()
} 
else if(SingleDetails2(details)){
    details.people1NormalFunction
}
else{
    details.work()
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
const people1Details = new pleople1('iqbal','officer','ini')
const people1Details2 = new pleople2('iqbal','officer','ini','heard working')


createInstance(people1Details)
createInstance(people1Details2)


// Access modifiers 
// public private protected readonly আমরা public and private and redonly ব্যবহার করব 


class userAccount {
    name: string;
    id:number;
     balance:number;

    constructor(name:string, id:number, balance:number){
        this.name = name;
        this.id = id;
        this.balance = balance;
    }

    bankCso(){
        // console.log("don't try to access this bank");
    }
}

const useBankDetails = new userAccount('iqbal',1212,20)
useBankDetails.balance = 0 // এখানে balanc তাকে access করে তার balance 0  করে দিয়েছি ,  name: string; id:number;private balance:number; এখন এটাকে যদি secure রাখতে চাই তাহলে  Access modifiers  এর private ব্যবহার করতে পারি , তাহলে ঐ class এর বাহিরে আর তাকে কথাও Access করা জাবে নাহ , bydefault সব গুলো public থাকে ,public লিখতে হয় না , যখনি private ব্যবহার করেছি তখনি এটা দেখাচ্চে আমাকে Property 'balance' is private and only accessible within class 'userAccount'.ts(2341) (property) userAccount.balance: number

//  console.log(useBankDetails);




// Gatter=> get and Setter => set এগুলো function এর মত get return করে আর set return করে না এবং এগুলোকে class এর বাহিরে access করতে গেলে function এর মত call করা লাগে না শুধু সমান চিহ্ন দিয়ে value দিয়ে দিলে হয় useBankDetails1.addBalance = 20000 ........................................................................

// একটু আগে আমরা যেই balance কে private করে দিয়েছি , যাথে class এর বাহিরে ঐ balance কে access করতে না পারি, এখন এই balance কে বাহিরে পেতে হলে getter ব্যবহার করতে হবে। getter হল ১ টা funtion যা class এর ভিতর call করে তাকে  class এর বাহিরে access করা যায় 

class userAccount1 {
    name: string;
    id:number;
    private balance:number; // balance private

    constructor(name:string, id:number, balance:number){
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    // Getter methods / functions
    get getterFunction(){ // get function এটা কোন paramiter নেয় না 
        return this.balance
    }

    // Setter method / function
    set addBalance(setBalance:number){
         this.balance = this.balance + setBalance
    }



    bankCso(){
        // console.log("don't try to access this bank");
    }
}

const useBankDetails1 = new userAccount1('iqbal',1212,20)
useBankDetails1.getterFunction; // console.log(useBankDetails1.getterFunction) এখানে getter function ব্যবহার করে টা Access করা হয়েছে । 

useBankDetails1.addBalance = 20000
// console.log(useBankDetails1);




// Static in class ................................









// polymorphisms ................................ poly => ওনেক and morphism => রুপ = অনেক রুপ 

// যেই class কোন paramitter নিবে তাকে constructor দিতে হবে না 

// polymorphism এটা সব গুলো class য়ে extends করে same নামে ১ টা  funtion বা method তৈরি করে তার পর সেটার instance তৈরি করে তারপর ১ টা function তৈরি করে সেখানে ঐ seme নামের function কে call করে দেয়, তারপর এই function এর ভিতর class গুলো কে call করে output পাবে । 


// create class and smae name function =>1
class polymorphismPerson {
    workingTime(){
        console.log("Person per day time spend 4 hours");
    }
}

class polymorphismStudent extends polymorphismPerson { //extend করা হয়েছে =>2
    workingTime(){
        console.log("Student Per day time spend 8 hours");
    }
}

class polymorphismDeveloper extends polymorphismPerson {
    workingTime(){
        console.log("Developer per day time spend 12 hours");
    }
}

function polymorphismFuntion (param:polymorphismPerson){ // function create করা হয়েছে 
param.workingTime()
}

// create instance of polymorphism class  =>3

 const person1 = new polymorphismPerson()
 const person2 = new polymorphismStudent()
 const person3 = new polymorphismDeveloper()

//  polymorphismFuntion(person1); এখানে function এর ভিতর class গুলো কে call করে output বের করা হয়েছে 
//  polymorphismFuntion(person2);
//  polymorphismFuntion(person3);


 
// Abstraction of class এর মানে হল class এর real implement না জেনে তার মুল সারাংশ টা জানা , এটা ২ ভাবে করা হয় ১ interpace ২ হল abstract class এর মাদ্দমে ।

// interpace 
// interface  interfaceName{
// name: string;
// id:number
// }

// const interfaceFunction : interfaceName ={
//     name: 'iqbal',
//     id: 1
// }

interface interfaceName{
  start():void; // এখানে আমরা বলতে পারিনা এটার out put কোন type এর হবে 
  stop():void;
  run():void;
}

// এখন class য়ে এই interface এর mehod গুলো ব্যবহার করার জন্য, implements keywords ব্যবহার করে interfaces এর নাম দিয়ে এর ভিতরে interfaces এর সব method ব্যবহার করতে হবে   

class interfaceClass implements interfaceName {

    constructor( // এখন এই খানে আমরা type বলে দিয়ে জানতে পারছি যে interface এর method গুলোর type কি হবে 
        name: string,
        id:number,
        balance:number
    ){}


    start(): void {
        console.log("start engin");
    }
    stop(): void {
        console.log(" stop engin");
    }
    run(): void {
        console.log("run engin");
    }
}
//  create instance
 const interFaceUserDetails = new interfaceClass('iqbal',1,20) // এখানে constructor এর value দেওয়া হয়েছে 







 // abstract এই keyword টাকে class এর আগে ব্যবহার করলে সেটার আর instace create করা যায়না, তবে follow করা যায় 




 interface interfaceName1{
    start():void; // এখানে আমরা বলতে পারিনা এটার out put কোন type এর হবে 
    stop():void;
    run():void;
  }
  
  // এখন class য়ে এই interface এর mehod গুলো ব্যবহার করার জন্য, implements keywords ব্যবহার করে interfaces এর নাম দিয়ে এর ভিতরে interfaces এর সব method ব্যবহার করতে হবে   
  
  abstract  class abstractClass implements interfaceName1 {
  
      constructor( // এখন এই খানে আমরা type বলে দিয়ে জানতে পারছি যে interface এর method গুলোর type কি হবে 
          name: string,
          id:number,
          balance:number
      ){}
  
  
     abstract start(): void // এগুলোকে Follow করার জন্য abatract keyboard ব্যবহার করে বাকী অংশ পেলে দিয়ে ঐ Follow function য়ে লিখতে হবে । 
    //   start(): void {  এগুলোকে follow করতে হলে নতুন ১ টা functin নিয়ে সেখানে এগুলোকে এইভাবে লিখিতে হবে আর 
    //       console.log("start engin");
    //   }
      abstract stop(): void ;
      run(): void {
          console.log("run engin");
      }
  }

    //   Follow function create 
    class followFunction extends abstractClass {
        stop(): void{
            console.log('stop engin');
        }
        start(): void{
            console.log('start engin');
        }
    }

    // EncupSolation 

    // আমরা public private এগুলো ব্যবহার করে য়ে কাজ টা করেছি সেগুলকে Encupsolation বলে বা hide বলে আবার এই hide কে encupsolation বলে  ।
    

// Multipule use case


//Combain step-3
interface Model<Tdata,Tmethod>{
data:Tdata;
method:Tmethod;
}


// popertise step-1
interface MultiPopartise{
fristName: string;
lastName: string;
}

// Method step-2
interface multiMethod {
    fullName(): string;
}

// Combanied with use modal step-4

type modal = Model <MultiPopartise,multiMethod>



// Combanied with use modal step-5
class MultiPopartiseClass implements modal{
 data: MultiPopartise;
 method:multiMethod;

 constructor(fristName:string, lastName:string){
    this.data ={fristName,lastName};
    this.method ={ fullName: ()=>`${fristName}, ${lastName} `}
 }
}

const multiDataInstance = new MultiPopartiseClass('name','iqbal')

console.log(multiDataInstance);


## **Interview Questions**

1. What is TypeScript, and how is it different from JavaScript?
2. Can you explain the difference between "interface" and "type" in TypeScript?
3. Can you give an example of how to use generics in TypeScript?
4. What is the difference between an "unknown" and "any" type in TypeScript?
5. Can you give an example of how to use enums in TypeScript?
7. What is the "as" keyword used for in TypeScript?
10. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?


</p>