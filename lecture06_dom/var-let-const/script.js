const c=5
//c=7  error
// function fun()
// {
//     console.log(x)
//     var x=5;    
//     // no error, hosting will happen
//     // ie. var x;
//     //      console.log(x)
//     //      x=5; // prints undefined
// }
// fun ();

// function fun()
// {
//     console.log(x)
//     //let x=5;  error, cannot host    
// }
// fun ();

for(var i=0;i<5;i++)
{
    console.log(i)     
}
console.log(i);


for(let i=0;i<5;i++)
{
    console.log(i)     
}
console.log(i);