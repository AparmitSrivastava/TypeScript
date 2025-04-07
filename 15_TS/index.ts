// diff bw interface and type

// 1. Reopening of interface

interface User {
    readonly dbid:number
    email:string,
    userId:number,
    googleId?:string,
    starttrial: ()=>string,
    getCoupon (couponNmae:string , value:number):number
}

// we can reopen interface again to add extra props and then user it in our raj(user)
interface User {
    githubToken : string
}

const raj : User =  {
    email:"hdo",
    githubToken:"gthub",
    userId:3765,
    dbid:35,
    starttrial:()=>{return "hello"},
    getCoupon : (name:"mmttrip" , off:20)=>{return 10}
}


// 2. inheritence 

interface Admin extends User {
    role:"admin" | "ta" | "learner"
}
// now admin has al that user has , so we can write the line 19 to be 
// const raj : Admin 

const shyam : Admin =  {
    email:"hdo",
    role:"ta",
    githubToken:"gthub",
    userId:3765,
    dbid:35,
    starttrial:()=>{return "hello"},
    getCoupon : (name:"mmttrip" , off:20)=>{return 10}
}
// the diff is available in typescript documentation



export {}