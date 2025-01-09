// Number of rows and columns
const rows = 5;
const columns = 5;

// Loop through rows
for (let i = 0; i < rows; i++) {
    let pattern = "";
    // Loop through columns
    for (let j = 0; j < columns; j++) {
        pattern += "* ";
    }
    console.log(pattern); // Print each row
}
