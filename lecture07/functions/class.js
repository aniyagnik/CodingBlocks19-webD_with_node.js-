class Person{
    constructor(Name,Age){
     this.name=Name;
    this.Age=Age;
    }

    isAdult(){
        console.log(name+" wa")
        if(this.Age>=18)
        return true
        else return false
    }
}

let p1=new Person("ani",12)
console.log(p1.isAdult())