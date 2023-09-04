-- connection example

CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
);

DESCRIBE employee;

-- insert employees

INSERT INTO employee VALUES
  (1, 'Juan', 1200000),
  (2, 'Yuliana', 2200000),
  (3, 'María', 11200000),
  (4, 'Camilo', 3000000);