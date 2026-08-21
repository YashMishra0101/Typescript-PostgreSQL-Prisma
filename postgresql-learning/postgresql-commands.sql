\l                         -- List all databases

\c databaseName            -- Connect/switch to a database

\dt                        -- List tables in the current database

\dt+                       -- List tables with additional information

\d tableName               -- Show table structure, columns, types, constraints

\d+ tableName              -- Show detailed table information

\i fileName.sql            -- Execute SQL commands from a .sql file

\r                         -- Reset/clear the current unfinished SQL query buffer

\! cls                     -- Clear the terminal screen on Windows

\q                         -- Exit/quit psql

CREATE DATABASE name;      -- Create a new database

DROP DATABASE name;        -- Delete a database

CREATE TABLE name (...);   -- Create a new table

ALTER TABLE ...             -- Modify an existing table

INSERT INTO ... VALUES ... -- Insert data into a table

SELECT * FROM tableName;   -- Retrieve/display data from a table

UPDATE tableName           -- Update existing data
SET column = value
WHERE condition;

DELETE FROM tableName      -- Delete existing data
WHERE condition;

ALTER TABLE tableName     -- rename the column
RENAME COLUMN 
oldName TO newName;

psql -U postgres           -- Start psql and connect as the postgres user

database_name=# SELECT column_name ->> 'key_name' FROM table_name;
--- This query is used to extract a specific value from a JSON/JSONB column as text.
-- Example: school=# SELECT course_meta ->> 'instructor' FROM course_enrollments;


SELECT * FROM table_name WHERE 'value_name' = ANY(key_name);

--- This query is used to check if a specific value exists in an array column.

-- Example: Find all courses where "React" exists in the skills array.
-- Example: SELECT * FROM course_enrollments WHERE 'React' = ANY(skills);


---- If you want to add a new column to an existing table, you can use the following command:

-- Example existing table:

CREATE TABLE movies(
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    release_year INTEGER
);

-- Syntax:
ALTER TABLE table_name ADD COLUMN column_name VARCHAR(100);

-- This command is used to add a new column to an existing table.


-- Example 1:
ALTER TABLE movies ADD COLUMN director VARCHAR(100);

-- This adds the 'director' column to the existing 'movies' table.


-- Example 2:
ALTER TABLE movies ADD COLUMN budget DECIMAL(12,2);

-- DECIMAL(12,2) = 12 digits total, including the 2 digits after the decimal.

-- Maximum positive value: 9,999,999,999.99
-- Not this:999,999,999,999.22

-- Final table after adding the columns:

CREATE TABLE movies(
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    release_year INTEGER,
    director VARCHAR(100),
    budget DECIMAL(12,2)
);

---- If you want to remove a single column from an existing table, this command is used to permanently remove a column and all of its data from an existing table.

ALTER TABLE table_name DROP COLUMN column_name; 


---- This command is used to rename an existing column, without changing the data stored in that column.

ALTER TABLE table_name RENAME COLUMN old_column_name TO new_column_name;

---- Rename the entire table
ALTER TABLE old_name RENAME TO new_name;