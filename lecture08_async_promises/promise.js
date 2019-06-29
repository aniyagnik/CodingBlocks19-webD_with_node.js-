function download (url) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("New Error")
        }, 1000)
    })
    return promise
}

function resize (file) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resized File")
        }, 2000)
    })
    return promise
}

function upload (file) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("cb.lk/secret.jpg")
        }, 3000)
    })
    return promise
}


const downloadedFile = download('cb.lk/file.jpg')
const promise = downloadedFile.then(file => {
    return resize(file)
}).catch(err => {
    console.log("asd"+err)
})
.then(resizedFile => {
    return upload(resizedFile)
}).then(url => {
    console.log(url)
}).catch(err => {
    console.log(err)
}).then(() => {
    console.log("Always")
    throw new Error("Some err")
}).catch(err => {
    console.log("error Again")
})













// const generatePromise=(val,n)=>
//       new Promise((resolve)=>setTimeout(()=>resolve(val),n))
    
// const generatePromise=function(val,n){
//     const fn=function(resolve){
//         setTimeout(function(){
//             resolve(val)
//         },n)
//     }
// }

// generatePromise(1,1000).then(console.log)      
// generatePromise(2,2000).then(console.log)      
// generatePromise(3,3000).then(console.log)      
// generatePromise(4,4000).then(console.log)      


// comst generatePromiseHOF=val=>n=>
// new Promise((resolve)=>setTimeout(()=>resolve(val),n))
