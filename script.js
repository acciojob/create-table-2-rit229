function createTable() {
    //Write your code here
  // Step 1: Get user input
    let rows = prompt("Input number of rows");
    let cols = prompt("Input number of columns");

    // Step 2: Validate input
    rows = parseInt(rows);
    cols = parseInt(cols);

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return; // Exit the function
    }

    // Step 3: Get the table element
    const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear existing table

    // Step 4: Create rows and columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr"); // Create a new row
        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td"); // Create a new cell
            td.textContent = `Row-${i} Column-${j}`; // Set cell text
            tr.appendChild(td); // Append cell to row
        }
        table.appendChild(tr); // Append row to table
    }
}
