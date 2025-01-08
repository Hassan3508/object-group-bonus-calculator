// Array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!

//
for (let employee of employees) {
  console.log(employees);
}
function calculateIndividualEmployeeBonus(employee) {
  
  

  // Your logic here

let newEmployee = {
  name: employee.name,
  bonusPercentage: 0.0,
  totalCompensation: 0,
  totalBonus: 0,
};
  
   // Calculate the bonus percentage based on some business logic
   if (employee.reviewRating <= 2) {
    //if 2 or below do nothing
    newEmployee.bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    newEmployee.bonusPercentage = 0.04;
    console.log(newEmployee.bonusPercentage);
  } else if (employee.reviewRating === 4) {
    newEmployee.bonusPercentage = 0.06;
    console.log(newEmployee.bonusPercentage);
  } else if (employee.reviewRating === 5) {
    newEmployee.bonusPercentage = 0.1;
    console.log(newEmployee.bonusPercentage);
  }

  // Check for 4-digit employee number
  if (employee.employeeNumber.length === 4) {
    newEmployee.bonusPercentage += 0.05;
  }

  // Check for high earners...and deduct .01 pct
  if (Number(employee.annualSalary) > 65000) {
    newEmployee.bonusPercentage -= 0.01;
  }

  // Ensure that the bonus in not less than 0%, no more than 13%
  if (newEmployee.bonusPercentage < 0) {
    newEmployee.bonusPercentage = 0;
  } else if (newEmployee.bonusPercentage > 0.13) {
    newEmployee.bonusPercentage = 0.13;
  }

  // Can also just use Math library:
  // newEmployee.bonusPercentage = Math.max(newEmployee.bonusPercentage, 0.0);
  // newEmployee.bonusPercentage = Math.min(newEmployee.bonusPercentage, 0.13);

  // Total Bonus calculation
  const totalBonus = newEmployee.bonusPercentage * Number(employee.annualSalary);
  //the employee total bonus
  newEmployee.totalBonus = totalBonus;

  // Total Compensation
  const totalCompensation = Number(employee.annualSalary) + totalBonus; //use Number() to cast annualSalary (string) to a number
  newEmployee.totalCompensation = totalCompensation;

  // Return the bonus calcuation object.
  return newEmployee;

}


// Loop over each employee in the employees array
// and call the calculateIndividualEmployeeBonus function for each one

// Test cases - these are failing by default but should pass once you've written the function correctly
// You can write more test cases to test your function using the same format
const atticusResult = calculateIndividualEmployeeBonus(employees[0]);
console.log(
  'Atticus Test Results:',
  atticusResult.bonusPercentage === 0.09,
  atticusResult.totalBonus === 4230,
  atticusResult.totalCompensation === 51230
);

const jemResult = calculateIndividualEmployeeBonus(employees[1]);
console.log(
  'Jem Test Results:',
  jemResult.bonusPercentage === 0.06,
  jemResult.totalBonus === 3810,
  jemResult.totalCompensation === 67310
);
