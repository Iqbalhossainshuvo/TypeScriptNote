// ## **Problem 1**

// **Functions and Default Parameters**

// Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

// function functionname(para1:string, para2:number=3){
// for(var i=0; i<para2; i++){
// console.log(para1);
// }
// }
// functionname('iqbal',)

// ## Problem 2  🧨🧨

// Write a function that takes in an array of objects with properties `name` and `age`, and returns only the objects where the person's age is greater than or equal to 18,
// ---

// interface Person {
//     name: string;
//     age: number;
//   }

//   function getPeopleAge(peopleAge: Person[]): Person[] {
//     return peopleAge.filter(personAge => personAge.age >= 18);
//   }

// const People0 =[
//     { name: 'Iqbal', age: 25 },
//     { name: 'Nayem', age: 17 },
//     { name: 'Sojib', age: 18 },
// ]

// const getAllAge = getPeopleAge(People0)

// ## **Problem 3:**

// Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

// ---

// function genericFunction<T> (genericParameters:T[]):T[] {
//     return genericParameters.reverse();
// }

// const objArray =['iqbal', 'nayem','sojib']
// const resultOfReversArray= genericFunction(objArray);
// console.log(resultOfReversArray);

// ## **Problem 4:**

// Create a TypeScript class called `Person` that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.



// Create a TypeScript class called `Student` that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

// class Person {
//   constructor(private name: string, private age: number) {}
//   public getDetails(): string {
//     return `Person Name: ${this.name} and Age ${this.age}`;
//   }
// }

// const getPersonDetails = new Person("Iqbal", 18);

// console.log(getPersonDetails.getDetails());

// class student extends Person{
//     constructor(name: string, age: number,private grade:string){
//         super(name, age);
//         this.grade= grade;
//     }

//     public getGrade():string{
//         return (`The student grade ${ this.grade}`)
//     }

// }

// const studentResult = new student('iqbal', 18,'A')
// console.log(studentResult.getGrade());



// ## **Problem 5:**

// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

// function whetherDetails(whether:unknown):void{
// if(typeof whether === 'string'){
//     console.log(whether);
// }else{
//    console.error('log an error message');
// }
// }

// const whetherResult= whetherDetails('iqbal');

// enum laval{  
//     junior="junior", 
//     midl="mid", 
//     senior="senior"
// }

//   function enumFunction(callLaval: laval) {
//     console.log(`Laval is ${callLaval}.`);
//   }
  

// enumFunction(laval.junior);






