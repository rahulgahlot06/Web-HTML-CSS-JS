function add(a,b){
    result=a+b 
    console.log(result)
}

 add(30,40)
function addagain(a,b){
    return a+b 
    
}

console.log("result is: "+addagain(30,40))
function muliply(n1,n2){
    return n1*n2
}

result = muliply(10,20)
console.log("multiply ",result)

subtract =function (n1,n2){
    return n1-n2
}
result = subtract(200,100)
console.log("subtract ",result)

// Arrow function
/**
function muliply(n1,n2){
    return n1*n2
}
 */
multiarrow = (n1,n2)=>n1*n2
res=multiarrow(10,15)
console.log("arrow function ",res)

multiarrow1 = (n1,n2)=>{return n1*n2}
res=multiarrow1(10,15)
console.log("arrow function ",res)

