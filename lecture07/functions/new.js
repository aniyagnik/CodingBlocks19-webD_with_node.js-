function Person(Name,Age){
    let name=Name;
    this.Age=Age;
    this.isAdult=function(){
        console.log(name+" wa")
        if(Age>=18)
        return true
        else return false
    }
}
let p1=new Person("ani",15)   //as if creation of obj
let p2=new Person("YAGNIK",30)
let p3=Person("john",35)

console.log(p1)        //output like class
console.log(p2)
console.log(p3)
//NOT OOPS but can be compared

console.log(p1.name)
console.log(p1.Age)
console.log(p1.isAdult())

