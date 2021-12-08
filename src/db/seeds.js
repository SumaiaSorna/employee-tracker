const mysql = require("mysql2");
const table = require("console.table");

const { departments, employees, roles } = require("./data");

// database config
const dbOptions = {
  host: "localhost",
  user: "root",
  password: "Password123!!",
  database: "company_db",
};

// connection to database
const db = mysql.createConnection(dbOptions);

// -- insert department
// INSERT INTO department (name) VALUES ('Finance')

// -- insert role
// INSERT INTO role (title, salary, departmentId) VALUES ('Junior', 1000, 3)

// -- insert employee
// INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ('Bob', 'Smith', 2, 5)

const addDepartment = () => {
  db.query(`INSERT INTO department (name) VALUES ('Finance')`);
};
