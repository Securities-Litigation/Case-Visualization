-- DROP DATABASE SecLit;
CREATE DATABASE SecLit;

USE SecLit;

CREATE TABLE Users (
  id INT AUTO_INCREMENT not null,
  username VARCHAR(16) not null,
  password VARCHAR(255) not null,
  firstName VARCHAR(16),
  lastName VARCHAR(16),
  companyName VARCHAR(16),
  PRIMARY KEY (id)
);

CREATE TABLE Cases (
  idCase INT AUTO_INCREMENT not null,
  name VARCHAR(50),
  PRIMARY KEY (idCase)
);

CREATE TABLE Inputs (
  idInput INT AUTO_INCREMENT not null,
  classBeg DATE(),
  classEnd DATE(),
  controlBeg DATE(),
  controlEnd DATE(),
  ticker VARCHAR(20),
  exchange VARCHAR(20),
  volReduction DECIMAL(4),
  PRIMARY KEY (idInput)
);

CREATE TABLE Scenarios (
  idScenario INT AUTO_INCREMENT not null,
  PRIMARY KEY (idScenario)
);

CREATE TABLE ScenDates (
  idScenDates INT AUTO_INCREMENT not null,
  scenDate DATE(),
  PRIMARY KEY (idScenDates)
);

ALTER TABLE `Inputs` ADD FOREIGN KEY (idCase) REFERENCES `Cases` (`idCase`);
ALTER TABLE `Scenarios` ADD FOREIGN KEY (idInput) REFERENCES `Inputs` (`idInput`);
ALTER TABLE `ScenDates` ADD FOREIGN KEY (idScenario) REFERENCES Scenarios (`idScenario`);
