// getter and setter   - imp for interview

class UserJi {
    private _courseCount = 1
    readonly city: string = "delhi"
    constructor(public email: string, private name: string) {
    }

    //   just like private properties we can also have private methods
    private dleteToken() {
        console.log("token dleted");

    }

    get getAppleEmail(): string {
        return `apple-${this.email}`
    }

    //    coursecount cannot be accessed directly so we'll be using getter and setter to access it and set its value
    get courseCount(): number {
        return this._courseCount
    }

    //    set courseCount(courseNumber):void{}   
    // this gives error coz in TS setters cannot have return type annotation ( not even void ) so the proper way is -

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const raj1 = new UserJi("h@h.com", "raj")
export { }

// raj.dleteToken()---- not allowed as this is a private method so its allowed only inside the class



// NOte - they func same in JS also  --  and its not that we use getter and setter for private properties only , we can use themfor public props as well , its just that they are used and designed in such a way that we use them mostly for private props
// note -- #### GETTER AND SETTER CANNOT BE USED FOR ANY SORT OF METHODS
// note - its not necesry to have both getter and setter - we can sometimes want to have an exposed prop and we mightn not want to set it up i.e. use setter
