CREATE TABLE SEL_JOIN_TBL(
    employee_id number(10) primary key,
    employee_name varchar2(20),
    manager_id number(10)
);

insert into SEL_JOIN_TBL values (1,'Rahul',3);
insert into SEL_JOIN_TBL values (2,'Jay',3);
insert into SEL_JOIN_TBL values (3,'Sonam',4);
insert into SEL_JOIN_TBL values (4,'Kunal',5);
insert into SEL_JOIN_TBL values (5,'Ram',6);
insert into SEL_JOIN_TBL values (6,'Rani',null);
insert into SEL_JOIN_TBL values (7,'Veeru',6);

select * from SEL_JOIN_TBL;


-- 직원 넘버와 매니저아이디가 같은사람
-- select E1.EMPNO, E1.ENAME,E1.MGR, E2.EMPNO AS 사수사번, E2.ENAME 사수이름 FROM EMP E1, EMP E2
select E1.employee_name , E1.manager_id, E2.employee_name, E2.employee_id 
from SEL_JOIN_TBL E1, SEL_JOIN_TBL E2
where E1.manager_id = E2.employee_id or E2.employee_id is null;

select s1.manager_id,s1.employee_name, s2.employee_id from SEL_JOIN_TBL s1, SEL_JOIN_TBL s2 where s1.manager_id = s2.employee_id