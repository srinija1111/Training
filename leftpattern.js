// Number of rows
const rows = 5;

// Loop through rows
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    // Loop to generate stars for each row
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern); // Print the row
}
