// generics make our components reusable

// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

const score:Array<number> = []
const names:Array<string> = []

function identity1(val:boolean | number):boolean | number{
    return val
}
// this doesnt really solve the problem as , it still leaves some ambiguity

// second way is to use Any that is very bad way
function identity2(val:any):any{
    return val
}
// problem remains the same here
// While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.


function identity3<Type>(val:Type):Type {
    return val
}
// this is same as "any" just the diff is that the type of the argument gets locked in
// so whatever we give in <Type> for eg number then the output is automatically congigured to be a number without the need of specifying it

identity3(3)
identity3("4")
// hover on both of the above and u can see that the return type is automatiucally decided

// shortcut
function identity4<a>(val:a):a {
    return val
} //can use any variable abcd xyz anything
identity4("4")


// by using this shortcut we can make make custom data type and use it , eg is below
interface bottle{
    brand:string,
    size:number
}

// identity4<bottle>({})        // syntax

identity4<bottle>({
    brand:"milton",
    size:200
})


// video 22
 function getsearchProducts<T>(products:T[]):T{
    // do some db oprs
    const myindex = 3
    return products[myindex]
    // the return value should be one of the values from the input array
 }
//  or this both are similar
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }


//   converting line53's function to arrow func
const getmoreSearchProducts = <T,> (products:T[]):T => {
    // do some db oprs
    const myindex =4
    return products[myindex]
}

// <T,> its justa  way nothing else --comma is lie lga die taaki hum bas ye bta skte ki ye koi tag nhi hai like heading (h) tag, yani this is not jsx bt its ts 

export {}