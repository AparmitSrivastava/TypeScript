// type predicates 
// instance of is used anywhere where we think or there is potenial of having new keyword/comes in role for eg in case of date we do new Date()

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }

type fish = {swim : ()=> void}
type bird = {fly : ()=> void}


//   function isfish(pet:fish | bird){
//     return (pet as fish).swim !== undefined
//     // this is type casting by sing as keyword
//   }

  function getfood(pet: fish|bird){
    if(isfish(pet)){
        pet //this line does nothin
        return "fish food"
    }else{
        pet
        return "bird food"
    }
  }

//   problem is that when we hover on line 23 and 26 ,we see ts is still confised whether its a fish or bird , but actally abhi tak to ts ko ye pta ho jana chahie tha as we have passed line 16's func
// so to avoid this we write 

function isfish(pet:fish | bird): pet is fish{
    return (pet as fish).swim !== undefined
    // this is type casting by sing as keyword
  }
//   now this doesnt return boolean bt returns a type fish or bird

export {}