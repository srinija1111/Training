// Take three values and print which values is greater among the three values in java script 
// using condition statement that are if else and switch case

let greatest;
if (a > b && a > c) {
    greatest = "a";
} else if (b > a && b > c) {
    greatest = "b";
} else {
    greatest = "c";
}

switch (greatest) {
    case "a":
        console.log("Using switch: The greatest value is a =", a);
        break;
    case "b":
        console.log("Using switch: The greatest value is b =", b);
        break;
    case "c":
        console.log("Using switch: The greatest value is c =", c);
        break;
}