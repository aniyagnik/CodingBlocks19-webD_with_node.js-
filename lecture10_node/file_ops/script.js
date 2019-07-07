const fs=require('fs')

fs.writeFile('./input.txt',"1 2 3 4 5 6 d 7 8 9 10",(err)=>{
   if(err)
   {
     return console.log(err)
   }
console.log("writting done")
})

setTimeout(()=>{fs.readFile('./input.txt','utf8',(err,contents)=>{
    if(err)
    {
        return console.log("some error occurred")
    }
    else console.log(contents)
    let arr=contents.split(" ").filter(ele=>!isNaN(ele))
    let sum=arr.reduce((acc,item)=>acc+ +item,0)
    fs.writeFile('./input.txt',sum,(err)=>{
       if(err)
       {
         return console.log(err)
       }
    console.log("done")
  })

 })

},10000)