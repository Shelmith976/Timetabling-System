DROP PROCEDURE IF EXISTS sp_lecturer_schedule;

DELIMITER $$
CREATE PROCEDURE sp_lecturer_schedule(IN lecturer_id INT)
BEGIN
    SELECT
        day_of_week,
        start_time,
        end_time,
        Room.room_name,
        Batch.batch_code,
        CASE
            WHEN TIMESTAMPDIFF(HOUR, start_time, end_time) = 3 THEN CONCAT(subject_name, ' (lab)')
            ELSE subject_name
        END AS subject_name
    FROM Class
    INNER JOIN Room ON Class.room_num = Room.room_num
    INNER JOIN Batch ON Class.batch_code = Batch.batch_code
    INNER JOIN Subject ON Class.subject_code = Subject.subject_code
    WHERE Class.lecturer_id = lecturer_id
    ORDER BY day_of_week, start_time;
END$$

DELIMITER ;

CALL sp_lecturer_schedule(4);


DROP PROCEDURE IF EXISTS sp_batch_schedule;

DELIMITER $$
CREATE PROCEDURE sp_batch_schedule(IN batch_code CHAR(10))
BEGIN
    SELECT
        day_of_week,
        start_time,
        end_time,
        Room.room_num,
        CASE
            WHEN TIMESTAMPDIFF(HOUR, start_time, end_time) = 3 THEN CONCAT(subject_name, ' (lab)')
            ELSE subject_name
        END AS subject_name
    FROM Class
    INNER JOIN Room ON Class.room_num = Room.room_num
    INNER JOIN Course ON Class.course_id = Course.course_id
    INNER JOIN Subject ON Class.subject_code = Subject.subject_code
    WHERE Class.batch_code = batch_code
    ORDER BY day_of_week ASC, start_time;
END$$

DELIMITER ;

CALL sp_batch_schedule('IT3.1'); -- Replace 'IT3.1' with the desired batch code


DROP PROCEDURE IF EXISTS sp_room_schedule;

DELIMITER $$
CREATE PROCEDURE sp_room_schedule(IN room_num CHAR(10))
BEGIN
    SELECT
        day_of_week,
        start_time,
        end_time,
        CONCAT(Lecturer.first_name, ' ',Lecturer.last_name) AS 'Lecturer',
        course_name,
        batch_code,
        CASE
            WHEN TIMESTAMPDIFF(HOUR, start_time, end_time) = 3 THEN CONCAT(subject_name, ' (lab)')
            ELSE subject_name
        END AS subject_name
    FROM Class
    INNER JOIN Lecturer ON Class.lecturer_id = Lecturer.lecturer_id
    INNER JOIN Course ON Class.course_id = Course.course_id
    INNER JOIN Subject ON Class.subject_code = Subject.subject_code
    WHERE Class.room_num = room_num
    ORDER BY day_of_week, start_time;
END$$

DELIMITER ;

CALL sp_room_schedule('R101');

DROP PROCEDURE IF EXISTS sp_department_schedule;

DELIMITER $$

CREATE PROCEDURE sp_department_schedule(IN Usr_dpt_name VARCHAR(35))
BEGIN
    DECLARE new_department_id INT;
    
    -- Get the department_id for the provided department_name
    SELECT department_id INTO new_department_id
    FROM Department
    WHERE department_name = Usr_dpt_name
    LIMIT 1;
    
    IF new_department_id IS NOT NULL THEN
        SELECT
            day_of_week,
            start_time,
            end_time,
            Room.room_name,
            Lecturer.first_name,
            Lecturer.last_name,
            Course.course_name,
            Subject.subject_name
        FROM Class
        INNER JOIN Room ON Class.room_num = Room.room_num
        INNER JOIN Lecturer ON Class.lecturer_id = Lecturer.lecturer_id
        INNER JOIN Course ON Class.course_id = Course.course_id
        INNER JOIN Subject ON Class.subject_code = Subject.subject_code
        WHERE Course.department_id = new_department_id
        ORDER BY day_of_week, start_time;
    ELSE
        -- Handle the case when the department is not found
        SELECT 'Department not found' AS Error;
    END IF;
END$$

DELIMITER ;


CALL sp_department_schedule('Computer Science');
-- Total number of hours a lecturer has with a group in one week
-- Total number of a hours lecturer has with all groups in one week
-- Total number of a hours a group has for a particular subject in one week
-- Total number of a hours a group has for all subject in one week