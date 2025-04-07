// class User {
//     email : string 
//     private name : string
//     readonly city : string = "delhi"
//     constructor(email : string , name:string){
//         this.email=email
//         this.name=name
//         // this.city
//     }
// }
// const raju = new User("h@h.com" , "sunny")


// raju.name="mumbai"  // since city is readonly it cant be modififed but it can still be accessed
// raju.name //this is accessable

// for not allowing it to be even accessile we cn write private before the prop, by doing this it becomes acessible only inside the class eg line 8 and btw this class can be inside some other file too , then also it can be accessed
// alll the things that wehavemt marked are marked as public by default



// shortcut for the above code 

class User {
    readonly city : string = "delhi"
    constructor(public email : string , private name:string){
      }
}
const raju = new User("h@h.com" , "sunny")


export {}