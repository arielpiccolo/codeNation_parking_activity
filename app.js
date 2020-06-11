class Car {
    constructor(regNum) {
        this._carReg = regNum;
        this._hours = 0;
        this._charge = 0.00;
    } 
    
    get carReg() {
        return this._regNum;
    }                                           // <<-- main class                   

    get hours() {
        return this._hours;
    }

    get charge() {
        return this._charge;
    } 

    increaseHours () {
        this._hours++;
        this._charge += 1.50;
    }
    
}

const pay = (regNum, hr) => {                // <<--- main fuction that will create a new 'car'  entry
    const car = new Car(regNum);
    for (let i= 0; i < hr; i++);{
        car.increaseHours();
    }
    return `you neeed to pay $ ${car.charge} for ${car.hours} hours.`;                           
}


//console.log(pay('M7 CAR', 5)); // the outpout woud be in this case $7.5 for 5 hours.

class Staff extends Car {          // <-- create a subClass using class 'regNum' as parent
    constructor(regNum, employerrNumber) {
        let staff = (pay / 2);
        super(regNum)              // <- only import the parameters we need for the new class with a dicounted price for employees
        this.employerrNumber = staff;
    }
    
}




const car = new Staff('Y10', 1234,);

//console.log(Y.discount);
 
console.log(car.employerrNumber);