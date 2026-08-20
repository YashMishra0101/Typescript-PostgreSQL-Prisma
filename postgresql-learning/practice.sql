-- CREATE TABLE employees(
--     emp_id SERIAL PRIMARY KEY,
--     fname  VARCHAR(50) NOT NULL,
--     lname VARCHAR(50) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     dept VARCHAR(50) NOT NULL,
--     salary NUMERIC(10,2) CHECK (salary>0),
--     hire_date DATE NOT NULL DEFAULT CURRENT_DATE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


CREATE TABLE course_enrollments(
    enrollment_id SERIAL PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    course_name VARCHAR(50) NOT NULL,
    level VARCHAR(20),
    price NUMERIC(8,2) CHECK (price>0),
    enrollment_on DATE DEFAULT CURRENT_DATE,
    completion_status BOOLEAN DEFAULT FALSE,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    course_meta JSONB,
    skills TEXT[]
);


INSERT INTO course_enrollments
(student_name, email, course_name, level, price, enrollment_on, completion_status, rating, course_meta, skills)
VALUES
(
    'Karan Shah',
    'karan@example.com',
    'Prisma',
    'Intermediate',
    4499.00,
    '2026-02-18',
    FALSE,
    NULL,
    '{"instructor": "Robert Taylor", "duration": "5 weeks", "language": "English"}',
    ARRAY['Prisma', 'PostgreSQL', 'TypeScript']
),
(
    'Pooja Reddy',
    'pooja@example.com',
    'Node.js',
    'Beginner',
    3999.00,
    '2026-03-20',
    TRUE,
    4,
    '{"instructor": "David Brown", "duration": "6 weeks", "language": "English"}',
    ARRAY['Node.js', 'JavaScript', 'Express']
),
(
    'Arjun Mehta',
    'arjun@example.com',
    'Docker',
    'Advanced',
    5999.00,
    '2025-10-15',
    TRUE,
    5,
    '{"instructor": "Mike Johnson", "duration": "8 weeks", "language": "English"}',
    ARRAY['Docker', 'Linux', 'Kubernetes', 'CI/CD']
),
(
    'Kavya Joshi',
    'kavya@example.com',
    'React',
    'Beginner',
    3499.00,
    '2026-04-05',
    FALSE,
    NULL,
    '{"instructor": "Emily Davis", "duration": "5 weeks", "language": "English"}',
    ARRAY['React', 'JavaScript', 'HTML', 'CSS']
),
(
    'Sahil Malhotra',
    'sahil@example.com',
    'PostgreSQL',
    'Intermediate',
    5499.00,
    '2026-01-30',
    TRUE,
    4,
    '{"instructor": "John Smith", "duration": "7 weeks", "language": "English"}',
    ARRAY['SQL', 'PostgreSQL', 'Database Design']
),
(
    'Meera Nair',
    'meera@example.com',
    'GitHub Actions',
    'Beginner',
    2499.00,
    '2026-05-10',
    FALSE,
    NULL,
    '{"instructor": "Alex Martin", "duration": "3 weeks", "language": "English"}',
    ARRAY['Git', 'GitHub', 'CI/CD']
),
(
    'Aditya Deshmukh',
    'aditya@example.com',
    'TypeScript',
    'Intermediate',
    5799.00,
    '2026-02-25',
    TRUE,
    5,
    '{"instructor": "Sarah Wilson", "duration": "8 weeks", "language": "English"}',
    ARRAY['TypeScript', 'JavaScript', 'Node.js']
),
(
    'Riya Kapoor',
    'riya@example.com',
    'Node.js',
    'Advanced',
    6999.00,
    '2025-09-12',
    TRUE,
    5,
    '{"instructor": "David Brown", "duration": "10 weeks", "language": "English"}',
    ARRAY['Node.js', 'Express', 'PostgreSQL', 'REST API']
),
(
    'Manish Tiwari',
    'manish@example.com',
    'Docker',
    'Intermediate',
    4799.00,
    '2026-03-15',
    FALSE,
    NULL,
    '{"instructor": "Mike Johnson", "duration": "6 weeks", "language": "English"}',
    ARRAY['Docker', 'Linux', 'DevOps']
),
(
    'Simran Kaur',
    'simran@example.com',
    'PostgreSQL',
    'Beginner',
    2999.00,
    '2026-05-20',
    FALSE,
    NULL,
    '{"instructor": "John Smith", "duration": "4 weeks", "language": "English"}',
    ARRAY['SQL', 'PostgreSQL']
),
(
    'Varun Agarwal',
    'varun@example.com',
    'Prisma',
    'Advanced',
    6499.00,
    '2025-12-05',
    TRUE,
    4,
    '{"instructor": "Robert Taylor", "duration": "9 weeks", "language": "English"}',
    ARRAY['Prisma', 'TypeScript', 'PostgreSQL', 'ORM']
),
(
    'Isha Malhotra',
    'isha@example.com',
    'React',
    'Intermediate',
    4999.00,
    '2026-01-18',
    TRUE,
    5,
    '{"instructor": "Emily Davis", "duration": "7 weeks", "language": "English"}',
    ARRAY['React', 'TypeScript', 'JavaScript']
);

school=# select course_meta ->>'instructor' from course_enrollments;