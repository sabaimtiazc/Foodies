-- Comment in SQL

-- How to create a database...
create database name_of_database;

-- Example to run
create database MYDB;

-- How to delete a database...
drop database name_of_database;

-- Example to run
drop database MYDB;

-- How to create a table...
create table name_of_table;

-- Example to run
create database if not exists zoomdb;
create table users(
    id INTEGER, -- Integer is for whole numbers...
    fname varchar2(100), -- varchar2 is for string, must specify the length of the string
    lname varchar2(100)
);

-- How to delete a table...
drop table name_of_table;

-- Example to run
drop table users;

-- How to view the schema of a table...
desc name_of_table;

-- Example to run
desc users;

-- How to add a column to an existing table...
alter table name_of_table add COLUMN_NAME DATA_TYPE;

-- Example to run
alter table users add email varchar(100);

-- Data Types Source(https://www.tutorialspoint.com/mysql/mysql-data-types.htm)

-- Numerics
-- INT - Integer Range(-2,147,483,648 to 2,147,483,647) unsigned 4,294,967,295
-- TINYINT - Tiny integer Range(-128 to 127) unsigned 255
-- SMALLINT - Small integer Range (-32,768 to 32,767) unsigned 65,535
-- MEDIUMINT - Range (-8,388,608 to 8,388,607) unsigned 16,777,215
-- BIGINT - Range(-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807) unsigned 18,446,744,073,709,551,615
-- M - is the length number of digits
-- D - is the number of decimals
-- FLOAT(M, D) - (M,D) is optional defaults to 10,2 precision up to 24 places
-- DOUBLE(M,D) - (M,D) is optional defaults to 16,4 precision up to 53 places
-- DECIMAL(M,D) - (M,D) is required

-- Date and Time Types
-- DATE - A data in YYYY-MM-DD
-- DATATIME - YYYY-MM-DD HH:MM:SS
-- TIMESTAMP - Stored as a number....
-- TIME - HH:MM:SS
-- YEAR(M) - (M) is optional M is either 2 or 4 if M=2 range 1970-2069 if M=4 range 1901-2155

-- String Types
-- CHAR(M) - Fixed length 1-255 characters right padded Example: CHAR(2) inserted Z -> _Z _=space
-- VARCHAR(M) - A variable length 1-255 grows upto the length
-- BLOB OR TEXT - Max length of 65,535 characters
-- LONGBLOB or LONGTEXXT - Max length of 4,294,967,295 characters

-- How to insert data into a table...
insert into name_of_table
(column_1, column_2, column_3,....)
values (value_1, value_2, value_3, ...);

-- Example
insert into users
(id, fname, lname, email)
values
(0, 'Kevin', 'Pacheco', 'example@example.com');

-- How to view the data in a particular table...
select column_1, column_2, column_3,... from name_of_table; -- only specific columns...
-- or
select * from name_of_table; -- * means get everything...

-- Example(s) to run
select fname, email from users;
select * from users;
select email, fname, id from users;

-- How to select certain rows based on a condition in a table...
select * from name_of_table where some_condidition;

-- Example to run
select * from users where id=1;
select * from users where fname='Kevin';
select email from users where lname='Dylan';

-- Conditional Operators
-- = Equal
-- > Greater than
-- < Less than
-- <= Greater than or equal
-- >= Less than or equal
-- <> or != Not equal to
-- BETWEEN Between a certain range
-- LIKE Search for a pattern
-- IN to specify mulitple values for a column