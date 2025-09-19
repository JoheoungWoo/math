alter session set container = XEPDB1;
create user blue identified by 1234 default tablespace users temporary tablespace temp;
grant resource,create session, create table,connect to blue;
commit;

drop user blue;


