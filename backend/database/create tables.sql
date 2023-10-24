CREATE DATABASE Timetabler;

USE Timetabler;

CREATE TABLE Department (
    department_id INT NOT NULL PRIMARY KEY,
    department_name VARCHAR(35)
);

CREATE TABLE Lecturer (
    lecturer_id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(35),
    last_name VARCHAR(35),
    user_name VARCHAR(35) NULL,
    phone_number VARCHAR(25),
    email_address VARCHAR(255),
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES Department(department_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Room (
    room_num CHAR(10) NOT NULL PRIMARY KEY,
    room_name VARCHAR(35),
    room_type ENUM('Laboratory','Classroom','Workshop'),
    room_capacity INT NOT NULL
);

CREATE TABLE Course (
    course_id INT NOT NULL PRIMARY KEY,
    course_name VARCHAR(35),
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES Department(department_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Subject (
    subject_code CHAR(10) NOT NULL PRIMARY KEY,
    subject_name VARCHAR(35),
    course_id INT,
    FOREIGN KEY(course_id) REFERENCES Course(course_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Batch (
    batch_code CHAR(10) NOT NULL PRIMARY KEY, -- e.g CS 1.1, IT 3.2
    batch_name VARCHAR(100),
    course_id INT,
    year INT,
    semester INT,
    CHECK (year >= 1 AND year <= 5),
    CHECK (semester >= 1 AND semester <= 3),
    FOREIGN KEY(course_id) REFERENCES Course(course_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Class (
    class_id INT NOT NULL PRIMARY KEY,
    lecturer_id INT,
    course_id INT,
    subject_code CHAR(10),
    room_num CHAR(10),
    batch_code CHAR(10),
    start_time TIME,
    end_time TIME,
    day_of_week CHAR(10),
    CONSTRAINT start_time_check CHECK(start_time >= TIME '08:00:00'),
    CONSTRAINT end_time_check CHECK(end_time <= TIME '17:00:00'),
    CONSTRAINT check_day_of_week CHECK (day_of_week IN('Monday','Tuesday','Wednesday','Thursday','Friday')),
    FOREIGN KEY(lecturer_id) REFERENCES Lecturer(lecturer_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(course_id) REFERENCES Course(course_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(subject_code) REFERENCES Subject(subject_code) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(room_num) REFERENCES Room(room_num) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(batch_code) REFERENCES Batch(batch_code) ON UPDATE CASCADE ON DELETE CASCADE
);

