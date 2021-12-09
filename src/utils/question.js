const actionQuestions = {
  type: "list",
  name: "chosenAction",
  message: "What would you like to do?",
  choices: [
    {
      value: "viewEmployee",
      name: "View all Employees",
    },
    {
      value: "addEmployee",
      name: "Add a new Employee",
    },
    {
      value: "updateEmployeeRole",
      name: "Update an Employee Role",
    },
    {
      value: "viewRoles",
      name: "View all Roles",
    },
    {
      value: "addRoles",
      name: "Add a new Role",
    },
    {
      value: "viewDepartments",
      name: "View all Departments",
    },
    {
      value: "addDepartment",
      name: "Add a new Department",
    },
    {
      value: "exit",
      name: "Exit",
    },
  ],
};

// {
//   type: "input",
//   name: "deptName",
//   message: "What is the name of the department?",
// },
// //   "Add role" questions
// {
//   type: "input",
//   name: "roleName",
//   message: "What is the name of the role?",
// },
// {
//   type: "input",
//   name: "salary",
//   message: "What is the role's salary?",
//   when: (answers) => answers.roleName,
// },
// {
//   type: "list",
//   name: "roleDept",
//   message: "To which department does the role belong?",
//   choices: [
//     // fn to dynamically get choices list from db
//     // MOCK CHOICES
//     { name: "dept1", value: "dept1" },
//     { name: "dept2", value: "dept2" },
//     { name: "dept3", value: "dept3" },
//   ],
//   when: (answers) => answers.salary,
// },
//   "Add employee" questions
//   {
//     type: "input",
//     name: "firstName",
//     message: "What is the employee's first name?",
//   },
//   {
//     type: "input",
//     name: "lastName",
//     message: "What is the employee's last name?",
//   },
//   {
//     type: "list",
//     name: "employeeRole",
//     message: "What is the employee's role?",
//     choices: [
//       // fn to dynamically get choices list from db
//       // MOCK CHOICES
//       { name: "role1", value: "role1" },
//       { name: "role2", value: "role2" },
//       { name: "role3", value: "role3" },
//     ],
//     when: (answers) => answers.lastName,
//   },
//   {
//     type: "list",
//     name: "employeeManager",
//     message: "Who is the employee's manager?",
//     choices: [
//       // fn to dynamically get choices list from db
//       // MOCK CHOICES
//       { name: "None", value: "none" },
//       { name: "employee2", value: "employee2" },
//       { name: "employee3", value: "employee3" },
//     ],
//     when: (answers) => answers.employeeRole,
//   },
//   //   "Update employee role" questions
//   {
//     type: "list",
//     name: "employees",
//     message: "Which employee's role do you want to update?",
//     choices: [
//       // fn to dynamically get choices list from db
//       // MOCK CHOICES
//       { name: "employee1", value: "employee1" },
//       { name: "employee2", value: "employee2" },
//       { name: "employee3", value: "employee3" },
//     ],
//     when: (answers) => answers.task === "updateEmployeeRole",
//   },
//   {
//     type: "list",
//     name: "employeeNewRole",
//     message: "What is the employee's new role?",
//     choices: [
//       // fn to dynamically get choices list from db
//       // MOCK CHOICES
//       { name: "role1", value: "role1" },
//       { name: "role2", value: "role2" },
//       { name: "role3", value: "role3" },
//     ],
//     when: (answers) => answers.employees,
//   }
// }

module.exports = questions;
