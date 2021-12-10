// Include packages needed for this application
const inquirer = require("inquirer");
const db = require("./utils/question");

// const generateDepartmentChoices = (departmentsFromDb) => {
//   return departmentsFromDB.map((department) => {
//     return {
//       name: department.name,
//       value: department.id,
//     };
//   });
// };

const {
  displayDepartments,
  displayEmployee,
  displayRoles,
  getDepartments,
  getEmployees,
  constructDepartmentChoices,
  constructRolechoices,
  constructEmployeeChoices,
} = require("./utils/question");

const actionQuestions = require("./utils/question");

const start = async () => {
  const db = new Db({
    host: process.envDB_HOST || "localhost",
    user: process.envDB_USER || "root",
    password: process.envDB_PASSWORD || "password",
    database: process.envDB_NAME || "company_db",
  });

  await db.start();

  let inProgress = true;

  while (inProgress) {
    const { chosenAction } = await inquirer.prompt(actionQuestions);

    if (chosenAction === "viewEmployee") {
      const employees = await db.query(
        "SELECT employee.id, employee.firstName, employee.lastName FROM employee"
      );
      console.table(employees);
    }

    if (chosenAction === "addEmployee") {
      console.table(addEmployee);
    }

    if (chosenAction === "updateEmployeeRole") {
      console.table(updateEmployeeRole);
    }

    if (chosenAction === "addRoles") {
      const generateDepartmentChoices = (departmentsFromDB) => {
        return departmentsFromDB.map((department) => {
          return {
            name: department.name,
            value: department.id,
          };
        });
      };

      const departments = await db.query("SELECT * FROM department");

      const roleQuestions = [
        {
          type: "list",
          message: "Please select a department:",
          name: "departmentId",
          choices: generateDepartmentChoices(departments),
        },
        {
          type: "input",
          message: "Please enter role title:",
          name: "title",
        },
        {
          type: "input",
          message: "Please enter role salary:",
          name: "salary",
        },
      ];

      const { departmentId, title, salary } = await inquirer.prompt(
        roleQuestions
      );

      await db.query(
        `INSERT INTO jobRole (title, salary, departmentId) VALUES("${title}", ${salary}, ${departmentId})`
      );
    }

    if (chosenAction === "viewRoles") {
      const roles = await db.query("SELECT * FROM jobRole");
      console.table(roles);
    }

    if (chosenAction === "viewDepartments") {
      displayDepartments();
      console.log("viewDepartments");
    }

    if (chosenAction === "addDepartment") {
      console.log("addDepartment");
    }

    if (chosenAction === "exit") {
      inProgress = false;
      db.stop();
      process.exit(0);
    }
  }
};

start();
