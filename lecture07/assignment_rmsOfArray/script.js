arr=[2,1,3,4]
let start=new Date().getTime();
let sq_arr=arr.map(item=>item*item) 
let mean_sum_of_sq=sq_arr.reduce((acc,item)=>acc+item)/arr.length
let end=new Date().getTime(); 
console.log(end-start)
console.log(Math.sqrt(mean_sum_of_sq))

// donot use reduce function directly as first element will be stored in acc
// and it square won't happen. so wrong result.try by curr. index