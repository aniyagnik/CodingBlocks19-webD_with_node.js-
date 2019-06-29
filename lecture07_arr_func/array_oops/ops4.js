let arr=[1,2,3,4,5,6,7,8,9]
function checkodd(num,index)
{
    if(num%2===0)
    return false
    else return true
}
arr1=arr.filter(checkodd,6)
console.log(arr1)