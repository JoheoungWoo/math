show con_name;
alter session set container = XEPDB1;
CREATE USER greenuser IDENTIFIED BY "1234"
    DEFAULT TABLESPACE users
    TEMPORARY TABLESPACE temp
    QUOTA UNLIMITED ON users;

grant create session , create table, create sequence, create view, create procedure to greenuser;