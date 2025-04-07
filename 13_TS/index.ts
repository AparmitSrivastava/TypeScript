let user:(string|number)[] = [1,"hc"] //this is corrct
let user2:(string|number)[] = ["hc" , 1] //this is also corrct

// but if we want the types to be in a spcific strict order, then we use tuples of typescript

let usertup : [string , number , boolean]
usertup = ["sd" , 12 , true]
// so order of the array also matters here..

// let rgb : [number,number,number] = [23 , 34,45 , 4]  //this gives erro coz only 3 numbers are allowed

type one = [number , string]
const newuser : one = [4 , "jkh"]
newuser[1]="hcd"
// newuser.push(true)
// note hitesh didnt had this error in his tutorial, maybe ts has improved now