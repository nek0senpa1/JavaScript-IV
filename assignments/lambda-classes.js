/*
lambda-classes - We need a roster of Lambda School personnel. Build it!
We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
Lambda personnel can be broken down into three different types of people.
Instructors - extensions of Person
Students - extensions of Person
Project Managers - extensions of Instructors
IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
Person
First we need a Person class. This will be our base-class
Person receives name age location gender all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
Instructor
Now that we have a Person as our base class, we'll build our Instructor class.
Instructor uses the same attributes that have been set up by Person
Instructor has the following unique props:
specialty what the Instructor is good at i.e. 'redux'
favLanguage i.e. 'JavaScript, Python, Elm etc.'
catchPhrase i.e. Don't forget the homies
Instructor has the following methods:
demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
Student
Now we need some students!
Student uses the same attributes that have been set up by Person
Student has the following unique props:
previousBackground i.e. what the Student used to do before Lambda School
className i.e. CS132
favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
Student has the following methods:
listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
Project Mananger
Now that we have instructors and students, we'd be nowhere without our PM's
ProjectManagers are extensions of Instructors
ProjectManagers have the following uniqe props:
gradClassName: i.e. CS1
favInstructor: i.e. Sean
ProjectManangers have the following Methods:
standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
*/

class Person {
    constructor(stuff){
      this.age = stuff.age;
      this.name = stuff.name;
      this.location = stuff.location;
      this.gender = stuff.gender;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }
  
  class Instructor extends Person {
    constructor(stuff){
          super(stuff);
      this.specialty = stuff.specialty;
      this.favLanguage = stuff.favLanguage;
      this.catchPhrase = stuff.catchPhrase;
          }
      demo(){
          console.log (`Today we are learning about ${this.favLanguage}`)
      }
      grade(){
          console.log(`${this.name} receives a score in ${this.favLanguage}`)
      }
  }
  
  class Student extends Instructor {
    constructor(stuff){
          super(stuff);
      this.previousBackground = stuff.previousBackground;
      this.className = stuff.className;
      this.favSubjects = stuff.favSubjects;
          }
      listSubjects() {
          console.log (this.favSubjects);
      }
      PRAssingment(fav){
          console.log(`${this.name} has submitted a PR for ${fav}`)
      }
      sprintChallenge(){
          console.log(`${this.name} has begun spring challenge!`)
      }
  }
  
  class ProjectManager extends Student {
    constructor(stuff){
          super(stuff);
      this.gradClassName= stuff.gradClassName;
      this.favInstructor = stuff.favInstructor;
      
          }
      standUp(chan){
          console.log(`${this.name} announces to the ${chan} channel to standby`)
      }
      debugsCode(stu, sub){
          console.log(`${this.name} debugs ${stu}'s' code on ${sub}. `)
      }
  }
  
  const fro = new Person({
    name: 'Frodo',
    age: 37,
    location: 'Shire',
      gender: "Hobbit"
  });
  
  const sam = new Person({
    name: 'Sam',
    age: 37,
    location: 'Shire',
      gender: "Hobbit"
  });
  
  const bor = new Instructor({
    name: 'Boramir',
    age: 39,
    location: 'Minas T',
      gender: "Human",
      favLanguage: "Commmon",
    catchPhrase: "For Minas Tyrath",
      className: "Fighter"
  });
  
  const far = new Instructor({
    name: 'Faramir',
    age: 39,
    location: 'Minas T',
      gender: "Human",
      favLanguage: "Commmon",
    catchPhrase: "Not The Arrow...",
      className: "Fighter"
  });
  
  const pip = new Student({
    name: 'Pippin',
    age: 39,
    location: 'Shire',
      gender: "Hobbit",
      favLanguage: "Commmon",
    catchPhrase: "What about second breakfast?",
      className: "small rando",
      previousBackground: "Smoker",
    className: "Gillyweed",
    favSubjects: "Fireworks and Such",
  });
  
  const mar = new Student({
    name: 'Mary',
    age: 42,
    location: 'Shire',
      gender: "Hobbit",
      favLanguage: "Commmon",
    catchPhrase: "We had first breakfast...",
      className: "small rando",
      previousBackground: "Smoker",
    className: "Tree Riding",
    favSubjects: "Fireworks and Apples",
  });
  
  const leg = new ProjectManager({
    name: 'Legolas',
    age: 428,
    location: 'Woods',
      gender: "Elf",
      favLanguage: "Elfish",
    catchPhrase: "Don't forget the dwarf",
      className: "Bow Stuff",
      previousBackground: "Ranger",
    className: "Tree Riding",
    favSubjects: "Elephant Killing",
      gradClassName: "Sauron Slaying",
    favInstructor: "Aragorn",
  });
  
  const ara = new ProjectManager({
    name: 'Aragorn',
    age: 235,
    location: 'Woods',
      gender: "Dunedian",
      favLanguage: "Elfish",
    catchPhrase: "We Ride!",
      className: "Super Ranger",
      previousBackground: "Ranger",
    className: "Swords 101",
    favSubjects: "Elfseses",
      gradClassName: "Elf Wooing",
    favInstructor: "Legolas",
  });
  
  console.log(ara);
  console.log(`-`);
  console.log(leg.debugsCode("Frodo","Sword"))
  console.log(`-`);
  console.log(mar);
  console.log(`-`);
  console.log(pip.PRAssingment("Pipe Making"));
  console.log(`-`);
  console.log(bor);
  console.log(`-`);
  console.log(far.demo());
  console.log(`-`);
  console.log(fro);
  console.log(`-`);
  console.log(sam.speak());