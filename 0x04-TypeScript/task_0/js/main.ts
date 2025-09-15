// main.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Kisumu",
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JS
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Add table header
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
tableBody.appendChild(headerRow);

// Add rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

// Append the table to the document
table.appendChild(tableBody);
document.body.appendChild(table);
