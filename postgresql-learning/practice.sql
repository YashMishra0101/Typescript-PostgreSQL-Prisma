--Create a table

CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    fname VARCHAR(50),
    lname VARCHAR(50),
    email VARCHAR(50),
    class_name VARCHAR(50),
    marks INT
);

--Insert Data

INSERT INTO students (fname,lname,email,class_name,marks);
VALUES('Yash','Mishra','yashrkm@gmail.com','MERN',85);
('Rahul', 'Sharma', 'rahul.sharma@example.com', 'MERN', 78),
('Priya', 'Verma', 'priya.verma@example.com', 'Java', 92),
('Aman', 'Kumar', 'aman.kumar@example.com', 'Python', 85),
('Neha', 'Singh', 'neha.singh@example.com', 'MERN', 88),
('Rohit', 'Gupta', 'rohit.gupta@example.com', 'Java', 74),
('Ananya', 'Patel', 'ananya.patel@example.com', 'Python', 95),
('Vikas', 'Yadav', 'vikas.yadav@example.com', 'MERN', 69),
('Sneha', 'Mishra', 'sneha.mishra@example.com', 'Java', 81),
('Arjun', 'Mehta', 'arjun.mehta@example.com', 'Python', 89),
('Kavya', 'Joshi', 'kavya.joshi@example.com', 'MERN', 97);


--Select

SELECT * FROM students;

SELECT fname, class_name, marks FROM students;

SELECT * FROM students WHERE class_name ='Python';