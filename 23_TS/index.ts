// behavior of JS - 
// typeof 2    ---- number
// type of "hs"---- string
// typeof null ---- output - object
// typeof ""   ---- object
// typeof [1,2,3] -- object

// line 4,5,6 are not correct we know that

function detectType(val:number | string){
    if(typeof val === "string")
    return val.toLowerCase()
    return val+3
}

function provideID(id:string | null){
    if(!id){
        console.log("pls provide id");
        return
    }
    id.toLowerCase()
}


function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

//   yha hmne null ka take care kr lie (line30)
// line31 covers string[]
// line35 covers string
// but what abot emoty string

/*
you’ll notice that we’ve gotten rid of the error above by checking if strs is truthy. This at least prevents us from dreaded errors when we run our code like:
TypeError: null is not iterable
*/

export {}