function addTwo(num:number):number{
    return num+2
}

// this func takes a num param and then we have defined that the func will always give the value that is of type number so that any other dev doesnot retun any other type of value from the func

// function getVal(myVal:number){
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
// }
// in this case we have an error of "any" coz we havent learned the way where wecan define a func that can return more than 1 type of values from line(7-12) 



const getHello = (s:string):string=>{
    return ""
}

const heros = ["thor" , "spiderman" , "hulk"]
const List = heros.map((hero:string,index) : string=>{
    return `${index+1}-hero is ${hero}`
    // return 2
})


function consoleError(errmsg : string):void{
    console.log(errmsg); //returns nothing so its good to mention void 
    // return 2
}

function throwError(message: string): never {
    throw new Error(message);
/* Functions that throw an error.
Functions that run infinitely (e.g., loops that never exit).*/
}


export{}