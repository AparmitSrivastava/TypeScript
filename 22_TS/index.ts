// generic classes

interface database {
    connec:string,
    username:string;
    password:string
}

function another <T , U extends database> (valone:T,valtwo:U) : object{
    return {
        valone,
        valtwo
    }
}

// another(3,"6")
another(3,{connec:"hello" , username:"raju" , password:"raju123"})
// if there is not this part - extends number then line 10 doesnt give erro but 


interface quix{
    name:string,
    type:string,
}

interface course{
    name:string,
    author:string,
    subject:string
}

class Sellable <T>{
    public cart : T[] = []
    addtoCart(product: T){
        this.cart.push(product)
    }
}
// this class can handle any data type and can handle both of the abive interfaces

// there may be classes that handle quiz very nicely , there may be classes that handle course nicely , bt there can be a generic class that can handle some of the common properties of both the interface

export {}