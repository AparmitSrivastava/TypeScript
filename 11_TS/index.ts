type User = {
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditCardDetails? :number
    // since, we dont want that each and every user of our website should not necesarily have credcardet we can make it optional by putting a ques mark 
}
// in case of type aliasing -  either put no commas or put semicolon after everyline of the properties of object

let myUser: User ={
    _id:"dko",
    name:"fd",
    email:"wow",
    isActive:true,
}
// here u have to put commas

myUser.email="jdi"
// myUser._id="hej" //this gives an error coz id is readonly and cant be changed

// mix and match of types

type cardNumber= {
    cardnum:string
}
type cardDate = {
    carddate:string
}
type cardDetails = cardNumber & cardDate & {
    cvv:number
}


export {}