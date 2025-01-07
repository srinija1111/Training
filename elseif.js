// Take three values and print which values is greater among the three values in java script 
// using condition statement that are if else and switch case

let a = 10, b = 20, c = 30; 

if (a > b && a > c) {
    console.log(a + "  is the greatest using elseif");
} else if (b > a && b > c) {
    console.log(b + " is the greatest using elseif");
} else if (c > a && c > b) {
    console.log(c + " is the greatest using elseif");
} else {
    console.log("There is a tie among the greatest values");
}
