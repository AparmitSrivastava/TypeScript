type User = {
    name:string;
    email:string;
    isActive:boolean;
}
// just like number and string are a type of datatype we have manually created a modfied datatype

function createUser(user: User):User{
    return {name:"h",email:"dh",isActive:false}
}
createUser({name:"h",email:"dh",isActive:false})

export{}