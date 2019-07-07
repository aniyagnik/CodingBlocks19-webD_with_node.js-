// console.log(global.x)\

module.exports={
    a:3                             //overwritten by module coming after it
}
console.log("in file02")
 //moduele can send multiple values
module.exports={
    b:31,  
    a:124,
    a:[2,2,3,3,3]  
    
}
func=function(){console.log("function of file02 called!")}
let c=80
exports.c=c

func()
console.log("done requesting")

//whole code gets executed after required is used to call it