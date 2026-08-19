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