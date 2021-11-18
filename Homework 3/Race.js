let raceNumber = Math.floor(Math.random () * 1000);
console.log (raceNumber);

let earlyRegister = true 

let runnerAge = 20

if (runnerAge > 18 && earlyRegister === true); {
    raceNumber += 1000;
}; else {
    raceNumber = raceNumber
};

if (runnerAge > 18 && earlyRegister ==true) {
    console.log("You will race at 9:30am. Race number " + raceNumber + ".")
} else if (runnerAge > 18 && earlyRegister === false) {
    console.log("You will race at 11:00am. Race number " + raceNumber + ".")
} else if (runnerAge < 18) {
    console.log("Youth registrants run at 12:30pm. Race number " + raceNumber + ".") 
} else {
        console.log("Runners should see the registration desk before starting the race.")
    }