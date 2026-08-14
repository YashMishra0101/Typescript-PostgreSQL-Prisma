-- Create a table

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    marks INT,
    city VARCHAR(50)
);


-- Insert Data

INSERT INTO students (first_name, last_name, email, department, year, marks, city)
VALUES
('Rahul', 'Sharma', 'rahul.sharma@example.com', 'Computer Science', 3, 87, 'Delhi'),
('Priya', 'Verma', 'priya.verma@example.com', 'Information Technology', 2, 92, 'Mumbai'),
('Aman', 'Kumar', 'aman.kumar@example.com', 'Computer Science', 4, 78, 'Patna'),
('Neha', 'Singh', 'neha.singh@example.com', 'Electronics', 3, 85, 'Lucknow'),
('Rohit', 'Gupta', 'rohit.gupta@example.com', 'Mechanical', 2, 71, 'Jaipur'),
('Ananya', 'Patel', 'ananya.patel@example.com', 'Computer Science', 4, 96, 'Ahmedabad'),
('Vikas', 'Yadav', 'vikas.yadav@example.com', 'Civil', 1, 68, 'Kanpur'),
('Sneha', 'Mishra', 'sneha.mishra@example.com', 'Information Technology', 3, 89, 'Bhopal'),
('Arjun', 'Mehta', 'arjun.mehta@example.com', 'Computer Science', 2, 94, 'Pune'),
('Kavya', 'Joshi', 'kavya.joshi@example.com', 'Electronics', 4, 82, 'Indore'),
('Sahil', 'Malhotra', 'sahil.malhotra@example.com', 'Mechanical', 3, 76, 'Chandigarh'),
('Pooja', 'Reddy', 'pooja.reddy@example.com', 'Civil', 2, 88, 'Hyderabad'),
('Karan', 'Shah', 'karan.shah@example.com', 'Information Technology', 4, 91, 'Surat'),
('Meera', 'Nair', 'meera.nair@example.com', 'Computer Science', 1, 79, 'Kochi'),
('Aditya', 'Deshmukh', 'aditya.deshmukh@example.com', 'Mechanical', 4, 73, 'Nagpur');


-- Select

SELECT * FROM students;


-- Select with WHERE and AND

SELECT *
FROM students
WHERE marks >= 80 AND year >= 3;


-- Update

UPDATE students
SET marks = 78
WHERE marks <= 75;


-- Delete

DELETE FROM students
WHERE id = 15;


-- Insert a new student

INSERT INTO students (
    first_name,
    last_name,
    email,
    department,
    year,
    marks,
    city
)
VALUES (
    'Ravi',
    'Sharma',
    'ravi.sharma@example.com',
    'Computer Science',
    3,
    86,
    'Delhi'
);


-- Verify the data

SELECT * FROM students;