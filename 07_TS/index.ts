// function addTwo(num){
//     return num+2
// }

// addTwo(4)

// export{}
// this is not good coz we see that addTwo call is infered to be any

// when i do this ----
// function addTwo(num){
//     num.toUpperCase()
//     return num+2
// }

// addTwo(4)

// export{}
// this still runs which should not ahppen coz hmne num ko uppercase kaise kr dia --- so this is wrong , so the soln is -


function addTwo(num:number){
    return num+2
}

function getupper(val:string){
    return val.toUpperCase()
}

function signUpUser(name : string,email : string,isPaid:boolean){
}

// what if we want to give avlues of some of the params and not all of them , then it willl give error and say that it wants all the 3 values so to avoid it we can give a default value with it
let loginUser=(name : string,email : string,isPaid:boolean=false)=>{}

let myVal = addTwo(4)
getupper("4")
signUpUser("1","2",true)
loginUser("h","h@hd")

export{}