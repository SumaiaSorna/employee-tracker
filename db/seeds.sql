USE company_db


-- insert into department
INSERT INTO department (name) 
VALUES ('Marketing'),
('Finance'),
('Accounting');

-- insert into jobRole
INSERT INTO jobRole (title,salary,departmentId) 
VALUES ('Digital Marketing Assistant', 45000, 1),
('Marketing Executive', 50000, 1),
('Financial Reporting Manager', 30000, 2),
('Finance Apprentice', 25000, 2) ,
('Senior Accounting Manager', 60000, 3),
('Accounting Assistant', 15000, 3)


-- insert into employee

INSERT INTO employee (firstName, lastName, jobRoleId, managerId) 
VALUES ('Diana', 'Spencer', 1, NULL),
('Emma', 'Watson', 1, 1),
('Jennifer', 'Lawrence', 2, 2),
('Megan', 'Fox', 2, NULL),
('Angelina', 'Jolie', 3, 3),
('Kristen', 'Stewart', 3, NULL)
