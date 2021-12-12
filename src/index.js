// Include packages needed for this application
const inquirer = require("inquirer");

const actionQuestions = require("./utils/question");
const Db = require("./utils/Db");

// dynamically generating roles
const generateRoleChoices = (rolesFromDB) => {
  return rolesFromDB.map((jobRole) => {
    return {
      name: jobRole.title,
      value: jobRole.id,
    };
  });
};

// dynamically generating managers
const generateManagerChoices = (managerFromDB) => {
  return managerFromDB.map((employee) => {
    return {
      name: employee.firstName + " " + employee.lastName,
      value: employee.id,
    };
  });
};

const start = async () => {
  const db = new Db({
    host: process.envDB_HOST || "localhost",
    user: process.envDB_USER || "root",
    password: process.envDB_PASSWORD || "Password123!!",
    database: process.envDB_NAME || "company_db",
  });

  await db.start();

  let inProgress = true;

  while (inProgress) {
    const { chosenAction } = await inquirer.prompt(actionQuestions);

    // view all employees
    if (chosenAction === "viewEmployee") {
      const employees = await db.query(
        `SELECT CONCAT(e.firstName,' ', e.lastName) AS 'EMPLOYEE', j.title AS 'JOB ROLE', d.name AS 'DEPARTMENT', j.salary AS 'SALARY',
      CONCAT( m.firstName,' ',  m.lastName) AS MANAGER
      FROM employee AS e JOIN employee AS m ON e.managerId = m.id INNER JOIN jobRole j ON e.jobRoleId = j.id LEFT JOIN department d ON j.departmentId = d.id;`
      );
      console.table(employees);
    }

    if (chosenAction === "addEmployee") {
      // add an employee
      if (chosenAction === "addEmployee") {
        const role = await db.query("SELECT * FROM jobRole");
        const employee = await db.query("SELECT * FROM employee");

        const employeeQuestions = [
          {
            type: "input",
            message: "Please enter employee's first name:",
            name: "firstName",
          },
          {
            type: "input",
            message: "Please enter employee's last name:",
            name: "lastName",
          },
          {
            type: "list",
            message: "Please select a role:",
            name: "jobRoleId",
            choices: generateRoleChoices(role),
          },
          {
            type: "list",
            message: "Please select a Manager:",
            name: "managerId",
            choices: generateManagerChoices(employee),
          },
        ];

        const { jobRoleId, firstName, lastName, managerId } =
          await inquirer.prompt(employeeQuestions);

        await db.query(
          `INSERT INTO employee (firstName, lastName, jobRoleId, managerId) VALUES("${firstName}", "${lastName}", ${jobRoleId}, ${managerId})`
        );
        console.log(`Added ${firstName} ${lastName} to the database.`);
      }
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
      const roles = await db.query(
        "SELECT jobRole.id, jobRole.title, jobRole.salary, department.name FROM jobRole JOIN department ON jobRole.departmentId = department.id ORDER BY department.name;"
      );
      console.table(roles);
    }

    if (chosenAction === "viewDepartments") {
      const department = await db.query("SELECT * FROM department");
      //displayDepartments();
      console.table(department);
    }

    if (chosenAction === "addDepartment") {
      // ask the user the name user want to add
      //add the response in the table
      console.table("addDepartment");
    }

    if (chosenAction === "exit") {
      inProgress = false;
      db.stop();
      process.exit(0);
    }
  }
};

start();
