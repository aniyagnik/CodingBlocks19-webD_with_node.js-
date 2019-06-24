// f1(10)
// function f1(i){
//     var string=''//language construct?search if for
//     for(k=0;k<i;k++)
//     {
//         string+=k
//     }
//     console.log(string)
// }

function f1(i,onDone)
{
    var string=""
    for (var z=0;z<i;z++)
    string+=z

    onDone(string)
}

f1(10, function(str){
    window.alert(str)
})


f1(10, function(str){
    window.alert("hi!")
})