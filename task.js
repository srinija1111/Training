
const employees = [
    {
        id: 544,
        name: "srinija",
        company: "tech mahindra",
        salary: 25000,
        address: { city: "hyderabad", area: "cyber towers" }
    }
];

function generateTable() {
    const table = document.createElement("table");
    table.border = "1";

    const headerRow = table.insertRow();
    const headers = ["Emp ID", "Emp Name", "Company", "Salary", "City", "Area"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    employees.forEach(emp => {
        const row = table.insertRow();
        row.insertCell().textContent = emp.id;
        row.insertCell().textContent = emp.name;
        row.insertCell().textContent = emp.company;
        row.insertCell().textContent = emp.salary;
        row.insertCell().textContent = emp.address.city;
        row.insertCell().textContent = emp.address.area;
    });

    document.body.appendChild(table);
}

generateTable();
