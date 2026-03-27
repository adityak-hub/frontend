let nums=[1,5,4,3,7,9,5,11];

let result=nums.reduce((max,el)=>  {
    if(max<el){
        return el;
    }else{
        return max;
    }
});

console.log(result);