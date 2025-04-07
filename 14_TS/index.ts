// Interfaces

// one is ---
/*
type User = {
    email:string,
    userId:number
}
*/

// and other is---
interface User {
    readonly dbid:number
    email:string,
    userId:number,
    googleId?:string,
    starttrial: ()=>string,
    getCoupon (couponNmae:string , value:number):number
    // or
    // starttrial():string   
}

const raj : User =  {
    email:"hdo",
    userId:3765,
    dbid:35,
    starttrial:()=>{return "hello"},
    getCoupon : (name:"mmttrip" , off:20)=>{return 10}
}

raj.email="hdop"    //allowed
//raj.dbid=64       //not allowed as we have studied earlier that its readonly








export{}





// why can we use the first syntax ----

// getCoupon: (couponName: string, value: number) => number;

// Now you're defining getCoupon as a property of type function, not a method.
// When TypeScript checks function-type properties, it applies stricter checks — in this case, it doesn't allow more specific types like "mmttrip" for a parameter expected to be string.

// 🔥 Pro Tip (What most devs do)
// Use interface for objects and classes.

// Use type for everything else (primitives, unions, tuples).