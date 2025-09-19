
rollback;
commit;

create table employees(
    emp_id number,
    name varchar2(50),
    dept_id number
);

INSERT INTO employees VALUES (1, 'Alice', 10);
INSERT INTO employees VALUES (2, 'Bob',   20);
INSERT INTO employees VALUES (3, 'Charlie', 30);
INSERT INTO employees VALUES (4, 'David', 40);
INSERT INTO employees VALUES (5, null, 50);

INSERT INTO employees VALUES (6, '홍길동', 60);
INSERT INTO employees VALUES (7, '동길홍', null);
INSERT INTO employees VALUES (8, '동홍길', null);

select * from employees;

create table departments (dept_id number, location_id number);
insert into departments values (10,100);
insert into departments values (20,200);
insert into departments values (null,200);

insert into departments values (60,200);
insert into departments values (null,500);

select * from departments;

-- in 
-- department에서 location_id가 100인 부서는 dept_id = 10 -> employees에서는 dept_id=10인 직원만 출력
select name from employees where dept_id in (select dept_id from departments where location_id = 100);

-- exists는 하나라도 일치하면 true
select name from employees E where exists (select dept_id from departments D where D.dept_id = E.dept_id and D.location_id = 100);
select name from employees E where dept_id in (select dept_id from departments D where D.dept_id = E.dept_id and D.location_id = 100);


select * from employees;
select * from departments;

-- 쿼리에서 null이 포함되면 아무것도 안나올 수도 있슴
select name, dept_id from employees where dept_id not in (select dept_id from departments);


select name from employees where exists(select dept_id from departments where dept_id is not null);
select name, dept_id from employees where dept_id in (select dept_id from departments where dept_id is not null);

select name , dept_id from employees where dept_id in (10,20);

delete from employees where emp_id = 8;
delete from departments where dept_id = 60;





-- 문 1) 데이터를 departments에 2개 , employments에 3개를 넣고 
-- where ~ in으로는 Alice, Bob, 홍길동이 나오도록 하고,
-- where exists로는 8개가 출력되도록 하세요.
select name, dept_id from employees where dept_id in (select dept_id from departments where dept_id is not null);
select name from employees where exists(select dept_id from departments where dept_id is not null);

select * from emp;


