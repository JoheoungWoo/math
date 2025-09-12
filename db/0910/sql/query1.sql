SET TERMOUT OFF
SET ECHO OFF

DROP TABLE DEPT;
CREATE TABLE DEPT
       (DEPTNO NUMBER(2) CONSTRAINT PK_DEPT PRIMARY KEY,
	DNAME VARCHAR2(14) ,
	LOC VARCHAR2(13) ) ;

DROP TABLE EMP;
CREATE TABLE EMP
       (EMPNO NUMBER(4) CONSTRAINT PK_EMP PRIMARY KEY,
	ENAME VARCHAR2(10),
	JOB VARCHAR2(9),
	MGR NUMBER(4),
	HIREDATE DATE,
	SAL NUMBER(7,2),
	COMM NUMBER(7,2),
	DEPTNO NUMBER(2) CONSTRAINT FK_DEPTNO REFERENCES DEPT);
INSERT INTO DEPT VALUES	(10,'ACCOUNTING','NEW YORK');
INSERT INTO DEPT VALUES (20,'RESEARCH','DALLAS');
INSERT INTO DEPT VALUES	(30,'SALES','CHICAGO');
INSERT INTO DEPT VALUES	(40,'OPERATIONS','BOSTON');
INSERT INTO EMP VALUES(7369,'SMITH','CLERK',7902,to_date('17-12-1980','dd-mm-yyyy'),800,NULL,20);
INSERT INTO EMP VALUES(7499,'ALLEN','SALESMAN',7698,to_date('20-2-1981','dd-mm-yyyy'),1600,300,30);
INSERT INTO EMP VALUES(7521,'WARD','SALESMAN',7698,to_date('22-2-1981','dd-mm-yyyy'),1250,500,30);
INSERT INTO EMP VALUES(7566,'JONES','MANAGER',7839,to_date('2-4-1981','dd-mm-yyyy'),2975,NULL,20);
INSERT INTO EMP VALUES(7654,'MARTIN','SALESMAN',7698,to_date('28-9-1981','dd-mm-yyyy'),1250,1400,30);
INSERT INTO EMP VALUES(7698,'BLAKE','MANAGER',7839,to_date('1-5-1981','dd-mm-yyyy'),2850,NULL,30);
INSERT INTO EMP VALUES(7782,'CLARK','MANAGER',7839,to_date('9-6-1981','dd-mm-yyyy'),2450,NULL,10);
INSERT INTO EMP VALUES(7788,'SCOTT','ANALYST',7566,to_date('13-JUL-87')-85,3000,NULL,20);
INSERT INTO EMP VALUES(7839,'KING','PRESIDENT',NULL,to_date('17-11-1981','dd-mm-yyyy'),5000,NULL,10);
INSERT INTO EMP VALUES(7844,'TURNER','SALESMAN',7698,to_date('8-9-1981','dd-mm-yyyy'),1500,0,30);
INSERT INTO EMP VALUES(7876,'ADAMS','CLERK',7788,to_date('13-JUL-87')-51,1100,NULL,20);
INSERT INTO EMP VALUES(7900,'JAMES','CLERK',7698,to_date('3-12-1981','dd-mm-yyyy'),950,NULL,30);
INSERT INTO EMP VALUES(7902,'FORD','ANALYST',7566,to_date('3-12-1981','dd-mm-yyyy'),3000,NULL,20);
INSERT INTO EMP VALUES(7934,'MILLER','CLERK',7782,to_date('23-1-1982','dd-mm-yyyy'),1300,NULL,10);

DROP TABLE SALGRADE;
CREATE TABLE SALGRADE
      ( GRADE NUMBER,
	LOSAL NUMBER,
	HISAL NUMBER );
INSERT INTO SALGRADE VALUES (1,700,1200);
INSERT INTO SALGRADE VALUES (2,1201,1400);
INSERT INTO SALGRADE VALUES (3,1401,2000);
INSERT INTO SALGRADE VALUES (4,2001,3000);
INSERT INTO SALGRADE VALUES (5,3001,9999);
COMMIT;

SET TERMOUT ON
SET ECHO ON

select * from DEPT;

select * from EMP;
desc EMP;
select * from SALGRADE;

select empno as 직원번호, ename, job from emp;
select empno 직원번호, ename 직원명, job 부서 from emp;
select ename 이름, sal 봉급, sal*12 + comm 월수령 , comm 수당 from emp where comm is not null;
select ename 이름, sal 봉급, sal*12 + comm 월수령 , comm 수당 from emp;
select ename 이름, sal 봉급, sal+sal+sal+sal+sal+sal+sal+sal+sal+sal+sal+sal + comm 월수령 , comm 수당 from emp;

select * from emp order by sal desc;
select * from emp order by deptno asc , sal desc;
select count(job), sum(sal), stddev(sal) from emp group by deptno;

select stddev(val) from testtable group by gro;
select DISTINCT job, deptno from emp; -- 중복 제거
select sal from emp where sal >= 2000 and sal <= 3000;
select sal from emp where sal between 2000 and 3000;
select * from emp where deptno = 30 or job = 'CLERK';
select mgr from emp where deptno = 30 and job = 'CLERK';

select * from emp where mgr = (select mgr from emp where deptno = 30 and job = 'CLERK');
select * from emp where mgr in all(select mgr from emp where deptno = 30);

--select * from emp where deptno = 30 and job = 'SALESMAN';

-- 문 1) deptno가 10인 사람의 이름과 입사일, 봉급을 출력하시오
select ename 이름, hiredate 입사일, sal 봉급 from emp where deptno = 10;

-- 문 2) deptno가 30인 사람의 JOB이 CLERK인 사람의 모든정보 조회
select * from emp where deptno = 30 and job = 'CLERK';

-- 문 3) SAL의 연봉이 36000인 사람의 정보를 조회
select * from emp where sal*12 = 36000;

-- 문 4) job이 SALESMAN 이거나 MGR이 9698인 직원의 모든 정보 출력
select * from emp where job = 'SALESMAN' or mgr = 7698;

drop table tbl_person;
create table tbl_person (
    pno number(25),
    height number(10,3),
    weitht number(10,3),
    name varchar2(100)
);
desc tbl_person;


create sequence seq_person;

insert into tbl_person values (seq_person.nextval, 230,34.6,'홍길동1');
insert into tbl_person values (seq_person.nextval, 178,88.6,'홍길동2');
insert into tbl_person values (seq_person.nextval, 69,77.6,'홍길동3');
insert into tbl_person values (seq_person.nextval, 140,89.6,'홍길동4');
insert into tbl_person values (seq_person.nextval, 220,81.6,'홍길동5');

select * from tbl_person where height > (select height from tbl_person where name='홍길동2')
--select * from tbl_person where height > (select height from tbl_person where name='홍길동2' or name='홍길동4')
select * from tbl_person where height > any(select height from tbl_person where name='홍길동2' or name='홍길동4')
select * from tbl_person where height > all(select height from tbl_person where name='홍길동2' or name='홍길동4')
select * from tbl_person where height < any(select height from tbl_person where name='홍길동2' or name='홍길동4')
select * from tbl_person where height < all(select height from tbl_person where name='홍길동2' or name='홍길동4')



select * from emp where ename <= 'FORZ';
select * from emp where ename <= 'F';

select * from emp where sal != 3000;
select count(*) from emp where sal <> 3000;

select * from emp where sal != 3000 and ename != 'SMITH' and ename != 'JONES';

select * from emp where not (ename = 'SMITH' or ename='JONES');
select * from emp where ename not in ('SMITH' , 'JONES');


select * from emp where job='MANAGER' or job='SALESMAN' or job='CLERK';
select * from emp where job in ('MANAGER','SALESMAN','CLERK');

select * from emp where job!='MANAGER' and job <> 'SALESMAN' and job ^='CLERK';
select * from emp where job not in ('MANAGER','SALESMAN','CLERK');
select * from emp where sal not between 2000 and 3000;

-- 문 2) ename이 'SMITH', 'WARD' , 'BLAKE', 'FORD' 가 아닌 사람들의 월급과 이름을 출력
-- sal이 월급 , ename이 이름
select sal, ename from emp where ename not in('SMITH', 'WARD' , 'BLAKE', 'FORD');
select sal, ename from emp where ename != 'SMITH' and ename != 'WARD' and ename != 'BLAKE' and ename != 'FORD';


select * from emp where ename like '_L%';

-- 문 1) ENAME COLUMN에서 AK를 포함하는 문자열을 찾으시오
select * from emp where ename like '%AK%';

-- is null, is not null
select * from emp where comm is null;
select * from emp where comm is not null;


-- 문 2) comm이 null이 아니고, job이 CLERK인 사람의 이름과 월급을 출력
select ename as 이름, sal as 월급 from emp where comm is not null and job = 'SALESMAN';
select ename as 이름, sal as 월급 from emp where comm is not null and job in('CLERK','SALESMAN','MANAGER');
select ename as 이름, sal as 월급 from emp where not (comm is not null or job not in('CLERK','SALESMAN','MANAGER'));
select distinct job from emp;


select * from emp where sal > null;

-- 전체 집합에서 이 집합을 제외한 내용을 출력
select * from emp where sal > null or comm is null; 

select count(*) from emp;
select * from emp where not (sal > null and comm is null);
select * from emp where comm is not null;

select empno, ename, sal, deptno from emp where deptno = 10
union
select empno, ename, sal, deptno from emp where deptno = 20;


select empno, ename, sal, deptno from emp where deptno = 10;
intersect
select empno, ename, sal, deptno from emp where deptno = 20;
