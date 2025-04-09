/*
class TakePhoto{
    constructor(
        public camermode:string,
        public filter:string
    ){}
}

const hero = new TakePhoto("test", "test")

class insta extends TakePhoto{

}*/

// till here things are OK but as soon as we make Takephoto an abstract class then the object i.e line8 gives us an error
// object can no not be created from the takephoto/abstract class but now it can only be created from the class that is inheriting it i.e class insta

abstract class TakePhoto {
    constructor(
        public cameramode: string,
        public filter: string
    ) { }

    abstract getSepia(): void
    // line 24 is a method definition that is giving error as we have not defined  it but if we write abstract then we mean to say that i m not goinf to provide the defn of this method  , i dont know how someone is going to implement it but he/she has to implement it ad by giving an abstract method humne line no28 mai error le aaya , so now we have to write some code in 28

    getReelTime():number{
        // some complex calcultaions
        return 8
    }
}

class Insta extends TakePhoto {
    constructor(
        public cameramode: string,
        public filter: string,
        public burstmode: number)
        {
        super(cameramode, filter)
    }
    getSepia():void{
        console.log("hello ");
        
    }
}



const hero = new Insta("test", "test" , 5)
hero.getReelTime()

// we can even overwirte the  getreeltime method as it is a class but we cannot overwrite abstaract method as the define the structure
export {}