// access modifiers - linits our ability to access a particular property
// Inheritence basics and Protected keyword

class User1 {
    // private _courseCount = 1
    protected _courseCount = 1
    // protected property wll be acsible inside this class and its children class only and not anywhere else outside
    readonly city: string = "delhi"
    constructor(public email: string, private name: string) {
    }

    private dleteToken() {
        console.log("token dleted");
    }

    get getAppleEmail(): string {
        return `apple-${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class Subuser extends User1 {
    isFamily:boolean = true
    changeCourseCount(){
        this._courseCount=4
        // so if coursecount has private keyword then we wont be able to acs it and it'll give error , but this can be avoided by using PROTECTED keyword instead of private
    }
}
// subuser gains access to all the props of user1 except the private props ,as provate props can be acsd only inside their own class

const raj2 = new User1("h@h.com", "raj")


export {}