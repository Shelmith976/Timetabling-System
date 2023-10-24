-- Sample Department records
INSERT INTO Department (department_id, department_name)
VALUES
    (1, 'Computer Science'),
    (2, 'Mathematics'),
    (3, 'Electrical Engineering');

-- Sample Lecturer records
INSERT INTO Lecturer (lecturer_id, first_name, last_name, user_name, phone_number, email_address, department_id)
VALUES
    (1, 'John', 'Doe', 'johndoe', '123-456-7890', 'johndoe@example.com', 1),
    (2, 'Jane', 'Smith', 'janesmith', '987-654-3210', 'janesmith@example.com', 2),
    (3, 'Robert', 'Johnson', 'robertjohnson', '555-123-4567', 'robertjohnson@example.com', 1),
    (4, 'Harry', 'Colwill', 'harrycolwill', '0700011771', 'harrycolwill@example.com', 1);

-- Sample Room records
INSERT INTO Room (room_num, room_name, room_type, room_capacity)
VALUES
    ('R101', 'Computer Lab 1', 'Laboratory', 30),
    ('R102', 'Physics Lab', 'Laboratory', 25),
    ('R201', 'Classroom A', 'Classroom', 50);

-- Sample Course records
INSERT INTO Course (course_id, course_name, department_id)
VALUES
    (1, 'Computer Science', 1),
    (2, 'Information Technology', 1),
    (3, 'Mathematical Modelling', 2);

-- Sample Subject records
INSERT INTO Subject (subject_code, subject_name, course_id)
VALUES
    ('CS101', 'Introduction to Programming', 1),
    ('CS102', 'Data Structures', 1),
    ('DB101', 'Database Design', 2);

-- Sample Batch records
INSERT INTO Batch (batch_code, batch_name, course_id, year, semester)
VALUES
    ('CS1.1', 'Computer Science 1st Year, 1st Semester', 1, 1, 1),
    ('CS2.2', 'Computer Science 2nd Year, 2nd Semester', 1, 2, 2),
    ('IT3.1', 'IT 3rd Year, 1st Semester', 2, 3, 1);

-- Sample Class records 
INSERT INTO Class (class_id, lecturer_id, course_id, subject_code, room_num, batch_code, start_time, end_time, day_of_week)
VALUES
    (1, 1, 1, 'CS101', 'R101', 'CS1.1', '08:00:00', '10:00:00', 'Monday'),
    (2, 2, 2, 'DB101', 'R102', 'CS1.1', '10:00:00', '12:00:00', 'Monday'),
    (3, 3, 3, 'CS102', 'R201', 'IT3.1', '13:00:00', '15:00:00', 'Monday'),
    (4, 4, 1, 'CS101', 'R101', 'CS1.1', '15:00:00', '17:00:00', 'Monday'),

    (5, 1, 2, 'DB101', 'R102', 'CS2.2', '08:00:00', '10:00:00', 'Tuesday'),
    (6, 2, 3, 'CS101', 'R201', 'CS2.2', '10:00:00', '12:00:00', 'Tuesday'),
    (7, 4, 1, 'CS102', 'R101', 'CS2.2', '13:00:00', '15:00:00', 'Tuesday'),
    (8, 3, 1, 'CS102', 'R201', 'CS2.2', '15:00:00', '17:00:00', 'Tuesday'),

    (9, 1, 3, 'CS102', 'R101', 'IT3.1', '08:00:00', '11:00:00', 'Wednesday'),
    (10, 2, 1, 'CS101', 'R102', 'IT3.1', '11:00:00', '14:00:00', 'Wednesday'),
    (11, 3, 2, 'DB101', 'R201', 'IT3.1', '14:00:00', '17:00:00', 'Wednesday'),

    (12, 4, 3, 'CS101', 'R101', 'CS1.1', '08:00:00', '11:00:00', 'Thursday'),
    (13, 2, 3, 'CS102', 'R102', 'CS2.2', '11:00:00', '14:00:00', 'Thursday'),
    (14, 3, 2, 'DB101', 'R201', 'IT3.1', '14:00:00', '17:00:00', 'Thursday'),

    (15, 1, 1, 'CS101', 'R201', 'CS1.1', '08:00:00', '11:00:00', 'Friday'),
    (16, 4, 2, 'DB101', 'R101', 'CS1.1', '11:00:00', '14:00:00', 'Friday'),
    (17, 2, 3, 'CS102', 'R102', 'IT3.1', '14:00:00', '17:00:00', 'Friday');