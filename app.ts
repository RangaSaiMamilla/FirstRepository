let myName: any ="RANGA SAI MAMILLA";
myName=24;

let marks; //implicitly considers as "any"
marks="Fifty"
marks=70;
console.log(myName);
console.log(marks)

//arrays
let percent:number[]
percent=[10,20,30] //only number type allowed

//tuple
let x:[number,string]
x=[23,'sai'] //need to follow the Order for Initialising

let sai: string|number;
sai="anku"
sai=255; //both number and string can accept

// class Student{
//     name: string;
//     age:number;
//     marks:number;
//     constructor(name:string, age:number,marks:number){
//         this.name=name;
//         this.age=age;
//         this.marks=marks;
//     }
// }

class Student{

    constructor(public name:string,public age:number,public marks:number){
        
    }
    printDetails(){
        console.log(this.name,this.age,this.marks)
    }
}
let Student1=new Student("sai",25,95);
console.log(Student1.name)

function add(a:number,b:number):number{
    return a+b;
}


class Demo{
    constructor(private salary:number){

    }
    get Salary(){
        return this.salary;
    }
    set Salary(salary:number){
        this.salary=salary;
    }
}
let demo1=new Demo(1000);
demo1.Salary=2000;
console.log(demo1.Salary)