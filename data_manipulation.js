// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

const evenfives = (n1%5 + n2%5 + n3%5 + n4%5) == 0

console.log("evenfives is " + evenfives)

const firstoverlast = n1 > n4

console.log("firstoverlast is " + firstoverlast) 

const arithchain = ((n1 - n2) * n3) % n4

console.log("arithchain is " + arithchain)


const GM = 175;

const GC = 3;

const trip = 1500;

const hFE = (trip/30);
const hFEt = (trip/55);

const mFE = (trip/28);
const mFEt = (trip/60);

const lFE = (trip/23);
const lFEt = (trip/75);

function budget(GM) {
    if ((hFE*3)<=GM && (mFE*3)<=GM && (lFE*3)<=GM) {
        return "You have enough to cover the trip at any level of fuel efficiency"
    } 
    else {
        if (mFE*3 <= GM) {
            return "You can only complete the trip on high or medium fuel efficiency!"
        }
        else {
            return "You can only complete the trup on high fuel efficiency!"
        }
    }
}

function FE(x) {
    highFE = "On high fuel efficiency, the trip will take " + (x/55).toFixed(1) + " hours to get there and cost " + ((x/30)*GC).toFixed(2) + " dollars."
    medFE = "On medium fuel efficiency, the trip will take " + (x/60).toFixed(1) + " hours to get there and cost " + ((x/28)*GC).toFixed(2) + " dollars."
    lowFE = "On low fuel efficiency, the trip will take " + (x/75).toFixed(1) + " hours to get there and cost " + ((x/23)*GC).toFixed(2) + " dollars."
    return highFE + "\n" + medFE + "\n" + lowFE + "\n"
}



console.log(FE(trip))
console.log(budget(GM))

