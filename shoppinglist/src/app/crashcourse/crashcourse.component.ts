import { Component } from '@angular/core';

@Component({
  selector: 'app-crashcourse',
  standalone: true,
  imports: [],
  templateUrl: './crashcourse.component.html',
  styleUrl: './crashcourse.component.css'
})
export class CrashcourseComponent {
  private car:string="BMW"
  message:string=`Look... I just bought a ${this.car}`;  
}

// constants
const pi=3.14
// constant objects
const obj={
  a:1
}
// non constant object
var breakfastShoppingList={
  bread:1,
  milk:3,
  jam:1,
  sugar:1,
  tbag:5,
}

breakfastShoppingList.bread=2;
// boolean
var takeBreakfast:boolean=true

// Array
// Arrays can contain only certain types
var meals:string[]=['Tea/Bread','Tea/Mandazi','Tea/chapo','chapo dondo'];
// constant array
const mealTime:number[]=[7,1,2]

// Dynamic typing 
const mealtime2:any[]=[7,'1 pm',8]

// custom types
type meals='Breakfast'|'Lunch'|'Supper';
var myConsumption:meals='Breakfast'

// annoting types in functions
function mealtime():string{
  var msg="My meal time is 7am,1pm and 8pm"
  return msg
}

// Functions with no return types return void
function myName(name:string="Mike"):void{
  var msg=`My name is ${name}`
}

// functions can also be represented as expressions

var myFeedback=function(status:string='positive'):string{
  return `My feedback on my current diet is ${status}`
}

// The above assignment of an anonymous function to a variable is allowed however,the challenge is that we cannot assume that the variable will take the type of the function because it won't. We have to assign the variable the function type as shown below

var feedback:(status:string)=>string=function(status:string){
  var status='positive';
  return `My feedback is ${status}. Thanks to the service providers`;
}

var briefing=function(name:string="Michael"):string{
  return `My name is ${name} and welcome to today's briefing `
}

var myBriefing:(name:string)=>string=function(name:string):string{
  var name="Michael"
  return `Hello comrades,my name is ${name} and welcome to today's briefing`
}

// optional parameters. optional parameters come last
var speech:(audience:string,greetings?:string)=>string=function(audience:string,greetings?:string):string{
  audience="comrades";
  greetings="Good morning";
  return `${audience},${greetings}. It is my pleasure to be addressing you right now`
}

var showDiv:(isUser:boolean)=>boolean=function(isUser:boolean):boolean{
  isUser=true
  return true;
}

// classes,interfave and inheritance
// property members are declared first in a class
// followed by constructor
// then several other methods and property accessors
// page 68

class car{
  private distanceRun?:number=0
  private color?:string

  constructor(private isHybrid:boolean,color:string='red'){
    this.color=color
  }

  gasConsumption():string{
    return this.isHybrid? 'very Low':'Very High'
  }
}

// Interface

interface vehicle{
  make:string;
  year:number;
}

class myVehicle {
  make: string;
  year: number;
  color?:string;
  constructor(make:string='benz'){
    this.year=2000
    this.make="Benz"
  }
}

var vehicleBought=new myVehicle("Benz")


