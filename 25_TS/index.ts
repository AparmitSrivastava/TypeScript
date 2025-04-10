// discriminated union

interface Circle {
    kind : "circle",
    radii : number
}
interface Square {
    kind : "square",
    side:number
}
interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}
/*
type shape = Circle | Square 
function getTrueShape(shape : shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radii ** 2;
    }
    return shape.side * shape.side
}


// never type , exhausted check

function getArea ( shape : shape){
    // exhaustive switch and case check
    switch(shape.kind){
        case "circle" : return Math.PI * shape.radii ** 2

        case "square" : return shape.side * shape.side
    }
}
*/














// what if in future we add more porps or kind then it will make the whole code fll apart just by writing type shape = Circle | Square | Reactangle , so we have to use never keyword

type shape = Circle | Square | Rectangle

function getArea ( shape : shape){
    // exhaustive switch and case check
    switch(shape.kind){
        case "circle" : return Math.PI * shape.radii ** 2

        case "square" : return shape.side * shape.side

        case "rectangle" : return shape.length * shape.width

        default : 
        const _defaultforshape : never = shape
        return _defaultforshape
    }
}

// use case of never ---- Payment Gateway systems , this default thing/ never keyword helps us by yelling at us and telling us that u have some other kind or functionality in the code which makes the rst of the code not very compamtible to the new current situation



// When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.

// Exhaustiveness checking------------
// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.
// For example, adding a default to our getArea function which tries to assign the shape to never will not raise an error when every possible case has been handled.

