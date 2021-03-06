const mysql = require("mysql2");

const { departments, employees, roles } = require("./db/data");

// connection to database
const db = mysql.createConnection(dbOptions);

// seed data to database
// add departments
const insertDept = (dept) => {
  db.query(`INSERT INTO department (name) VALUE ('${dept}')`);
};

departments.forEach(insertDept);
console.log("Added departments.");

// add roles
const insertRole = ({ title, salary, departmentId }) => {
  db.query(
    `INSERT INTO role (title, salary, department_id) VALUE ('${title}', ${salary}, ${departmentId})`
  );
};

roles.forEach(insertRole);
console.log("Added roles.");

// add employees
const insertEmployee = ({ firstName, lastName, roleId, managerId }) => {
  managerId
    ? db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('${firstName}', '${lastName}', ${roleId}, ${managerId})`
      )
    : db.query(
        `INSERT INTO employee (first_name, last_name, role_id) VALUE ('${firstName}', '${lastName}', ${roleId})`
      );
};

employees.forEach(insertEmployee);
console.log("Added employees.");

db.end();
