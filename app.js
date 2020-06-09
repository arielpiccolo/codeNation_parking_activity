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
    for (i= 0; i < hr; i++);{
        car.increaseHours();
    }
    return `you neeed to pay $ ${car.charge} for ${car.hours} hours.`;                           
}


//console.log(pay('M7 CAR', 5)); // the outpout woud be in this case $7.5 for 5 hours.

class staff extends Car {  // <-- create a subClass using class 'regNum' as parent
    constructor(name,regNum, employeeId, employeeDisc) {
        let discount = pay / 2;
        super(_carReg, _hours)  // <- only import the parameters we need for the new class with a dicounted price for employees
        this._employeeId = true;
        this._employeeDisc = staff;
    }
    
}

let J = new staff(John,Y10, 1234, pay);
 John
