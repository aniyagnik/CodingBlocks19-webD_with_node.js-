const promisfy=function(fn){
    return function(){
        return new Promise((resolve,reject)=>{
            fn(...arguements,(err,result)=>{
                if(err)
                 return reject(err)
                resolve(result)
            })
        })
    }
}

function download(url,callback){
    setTimeout(()=>{
        
    })
}