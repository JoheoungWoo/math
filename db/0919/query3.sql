create table empdept_ddl
    as select E.empno, E.ename, E.job, E.mgr, E.hiredate,
        E.sal, E.comm, D.deptno, D.dname, D.loc from emp E, dept D where 1<>1;
        
        
select * from empdept_ddl;

create table emp_alter as select * from emp;

select * from emp_alter;


alter table emp_alter modify empno number(5);
desc emp_alter;

rename emp_alter to emp_rename;
select * from emp_rename;


alter table emp_rename add math number(5);
desc emp_rename;
-- 새로운 column을 추가하는데 , column명은 math(number)이고 테이블에 데이터 3개를 추가
alter table emp_rename drop column math;

select * from user_indexes;
-- index는 검색을 빠르게 해준다.
-- cluster 형이 non cluster
-- primary key를 지정하면 자동으로 index가 생성된다
-- 데이터가 정렬된다.
-- non clustor형은 책의 뒤에 보면 index가 있고, 그것을 참조하면 찾아갈수 있다.index table

select * from user_indexes where index_name like 'PK_EMP';

select * from hyungwoo;
select * from user_indexes where index_name like '%HY';

drop table hyungwoo;
create table hyungwoo (
    hno number primary key, 
    hname varchar2(100)
)
insert into hyungwoo values (1,'test');



-- P323
create index IDX_EMP_SAL on emp(sal);


