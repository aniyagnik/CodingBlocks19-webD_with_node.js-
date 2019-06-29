let error=0
function download (url, callback) {
    let file =null
    setTimeout(() => {
        if(error===1)
        {callback(error)}
        else{
            file = "Some data here"
            callback(error,file)}
    }, 1000)
}

function resize (file, callback) {
    let resizedFile = null
    setTimeout(() => {
        if(error===1)
        {callback(error,resizedFile)}
        else{
            resizedFile = "Compressed Stuff Here"
            callback(error,resizedFile)}
    }, 1000)
}

function upload (file, callback) {
    let url =null
    setTimeout(() => {
      if(error===1)
         {callback(error,url)}
         else{
             url = "cb.lk/file.jpg"
             callback(error,url)}
    }, 1000)
}


download('cb.lk/secret' , (err, file) => {
    if (err) {
        console.log("error in downloading file")
    }
    else{console.log("file downloaded")
         resize(file, (err,resizedFile) => {
            if (err) {
                console.log("error in compressing file")
            }
            else{
                  console.log("file compressed")
                  upload(resizedFile, (err,url) => {
                    if (err) {
                        console.log("error in uploading file")
                    }
                    else{ console.log("file uploaded")
                     console.log(url)
                    }
                  })
                } 
         })
    }     
})