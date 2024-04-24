// Write a function that takes a number as input and returns its square. Then rewrite the function as an arrow function
// function numSquare (num) {
//     return num * num;
// }

//arrow function for above function

const numSquare = num => num * num;

console.log(numSquare(2));


// Implement a function that calculates the average of a list of numbers. Transform the function into an arrow function
// function averageOfNum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum / arguments.length;
// }

//arrow function for averageOfNum

const averageOfNum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum / args.length;
}

console.log(averageOfNum(1, 2, 3, 4, 5));


// create a function that checks if a number is even or odd and returns "even" or "odd" accordingly. Then, rewrite the code using arrow function
// function oddOrEven(num2) {
    
//     if (num2 % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }


// arrow function for oddOrEven

const oddOrEven = num2 => num2 % 2 === 0 ? "even" : "odd";

console.log(oddOrEven(8));


// Write a function that calculates the area of a rectangle given its length and width as parameters. Refactor this function using an arrow function
// function areaOfSquare(length) {
//     return length * length;
// }
// console.log(areaOfSquare(20))


//arrow function for areaOfSquare

const areaOfSquare = length => length * length;

console.log(areaOfSquare(50))


// Squirrels be balling
// function cigarParty(cigars, isWeekend) {
//     if (isWeekend && cigars >= 40) {
//         return true;
//     } else if (cigars >= 40 && cigars <= 60 &&!isWeekend) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(cigarParty(50, false));

//arrow function for cigarParty
// const cigarParty = (cigars, isWeekend) => cigars >= 40 && isWeekend ? "true" : "false";

const cigarParty = (cigars, isWeekend) => {
    if (isWeekend && cigars >= 40) {
        return true
    } else if (!isWeekend && cigars >= 40 && cigars <= 60) {
        return true
    } else {
        return false
    }
}

console.log(cigarParty(30, false));