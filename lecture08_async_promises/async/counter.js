const start=Date.now()
setInterval(()=>{
    const shown=Date.now()-start
    console.log(shown)
},1000)