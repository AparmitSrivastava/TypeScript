// topic - bad behaviour of objects

const user = {
    name: "nick",
    id:"1234",
    isActive:true
 } 
//  in real life objects are obviously not used like this the most common use is using it in database as we did in passmanager

function createUser({name:string , isPaid:boolean}){}
createUser({name:"raju" , isPaid:true})
// this is a very common use case


// now well see about the case when the func returns an object--
// syntax -- function createCourse():{}{}
function createCourse():{name:string , price:number}{
    return {name:"react" , price:401}
}

// the weird behaviou is that when we give some extra input apart form the ones mentioned in the parameter then it gives an error but when we assign the same input object to a variable and then call it works fine

// createUser({name:"raju" , isPaid:true , email : "h@h"})
// this gives error  - see by uncommenting

// but when we do this it becomes correct ,  but it should stop me from doing so 
let newuser = {name:"raju" , isPaid:true , email : "h@h"}
createUser(newuser)

export { }