global.x=10
console.log("before require")
let obj=require("./file02.js")    //if no .exe is used then it is global module(fs-file system)  //console.log("fs")

console.log(obj)

console.log("done requiring")
let x=require("./file02.js")
func()
console.log(obj.b)

console.log(x)
//output if one module are there
// before require
// done requesting
// { a: 3 }
// done requiring
//output if two modules are there
// before require
// done requesting
// { b: 31 }
// done requiring   