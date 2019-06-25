let obj2={
    a:20,
    b:40,
    sum:function ()
    {
        return this.a+this.b        
    }
}

function what(){
    console.log(this===window)
}
console.log(obj2.sum())
