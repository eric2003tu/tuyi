let a = 10
function outer(){
    let b = 0
    function inner(){
       
        b++
        console.log(b)
    
    }
    return inner
}
let n = outer()
for(let i=1; i<= 10; i++){
n()
}
