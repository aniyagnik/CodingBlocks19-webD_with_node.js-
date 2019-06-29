let arr=[3,4,1,2,9,12,7,8,43,44];
//default lexicographical
//arr.sort();
function compare(a,b){
    console.log(a,b)
    if(a>b)
    return true
    else return false
}
arr.sort(compare)
console.log(arr)