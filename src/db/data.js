const departments = ["Marketing", "Finance", "Accounting"];

const role = [
  {
    title: "Digital Marketing Assistant",
    salary: 45000,
    departmentId: 1,
  },
  {
    title: "Marketing Executive",
    salary: 60000,
    departmentId: 1,
  },
  {
    title: "Financial Reporting Manager",
    salary: 80000,
    departmentId: 2,
  },
  {
    title: "Finance Apprentice",
    salary: 25000,
    departmentId: 2,
  },
  {
    title: "Senior Accounting Manager",
    salary: 35000,
    departmentId: 3,
  },
  {
    title: "Accounting Assistant",
    salary: 16000,
    departmentId: 3,
  },
];

const employee = [
  {
    firstName: "Diana",
    lastName: "Spencer",
    roleId: 1,
  },
  {
    firstName: "Emma",
    lastName: "Watson",
    roleId: 1,
    managerId: 3,
  },
  {
    firstName: "Jennifer",
    lastName: "Lawrence",
    roleId: 2,
    managerId: 1,
  },
  {
    firstName: "Megan",
    lastName: "Fox",
    roleId: 2,
  },
  {
    firstName: "Angelina",
    lastName: "Jolie",
    roleId: 3,
  },
  {
    firstName: "Kristen",
    lastName: "stewart",
    roleId: 3,
    managerId: 5,
  },
];

module.exports = { departments, role, employee };
