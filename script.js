//STARTER CODE
//Do not modify any of the code below this line:


// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
// Get the employee table
const employeeTable = document.querySelector('#employee-table');

// Clear the employee table
employeeTable.innerHTML = '';

// Loop through the employee data and create a row for each employee
for (let i = 0; i < employeesArray.length; i++) {
  const currentEmployee = employeesArray[i];

  const newTableRow = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = currentEmployee.firstName;
  newTableRow.append(firstNameCell);

  const lastNameCell = document.createElement('td');
  lastNameCell.textContent = currentEmployee.lastName;
  newTableRow.append(lastNameCell);

  const salaryCell = document.createElement('td');
  // Format the salary as currency
  salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  newTableRow.append(salaryCell);

  employeeTable.append(newTableRow);
}
};

const trackEmployeeData = function () {
const employees = collectEmployees();

console.table(employees);

displayAverageSalary(employees);

console.log('==============================');

getRandomEmployee(employees);

employees.sort(function (a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
});

displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

//Student code Below
const addEmployeesBTn = document.querySelector('#add-employees-btn');
   addEmployeesBTn.addEventListener('click', collectEmployees);

const collectEmployees = function() {
  const firstName = prompt('Enter employee first name:');
  const lastName = prompt('Enter employee last name:');
  const salary = prompt('Enter employee salary:');

  return {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  };
}

let collectEmployees = windowprompt('Add an employee?');

while (collectEmployees) {
  const newEmployee = collectEmployees();
  employees.push(newEmployee);

  collectEmployees = confirm('Add another employee?');
}

if (employees.length === 0) {
  alert('No employees added.');
}

if collectEmployees = {confirm('Add another employee?');
    return employees;
    }

    const index = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[index];
    
    window.alert(`Random employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);

    const displayAverageSalary = function(employeesArray) {
      let totalSalary = 0;
      for (let i = 0; i < employeesArray.length; i++) {
        totalSalary += employeesArray[i].salary;
      }
      const averageSalary = totalSalary / employeesArray.length;
      window.alert(`Average salary: ${averageSalary.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}`);
    }