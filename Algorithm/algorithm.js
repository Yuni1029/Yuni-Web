//question 1
function y (n, x) {
    return(n + x)
}
let addition = y (2, 3) 
console.log(addition)

//question 2
function Area(r) {
    return(3.14*r*r)
}
let Circle = Area(3)
console.log(Circle)

//question 3
function fx (h,k){
    if (h+k < 100) {
        return true;
    } else  {
        return false;
    }
}

let trueFalse = fx(33,45)
console.log(trueFalse)

//question 4
function year(a) {
    if (a % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

let leapYear = year(2020)
console.log(leapYear)

//question 5
function integer(c,d) {
    if (c+d===10 || c===10 || d===10) {
        return true;
    } else {
        return false;
    }
}

let sum = integer(9, 10)
console.log(sum)