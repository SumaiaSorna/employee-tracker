const questions = [
  {
    type: "list",
    name: "task",
    message: "what would you like to do?",
    choices: [
      { name: "View all employees", value: "viewEmployee" },
      { name: "View all roles", value: "viewRoles" },
      { name: "View all departments", value: "viewDepartments" },
      { name: "Add  an employee", value: "addEmployee" },
      { name: "Add a new role", value: "addRole" },
      { name: "Add a new department", value: "addDepartment" },
      { name: "Update an employee's role", value: "updateEmployeeRole" },
      { name: "View all employees", value: "viewEmployee" },
      { name: "Quit", value: "quit" },
    ],
  },

  {
    type: "",
    name: "",
    message: "",
  },
];
module.exports = questions;
