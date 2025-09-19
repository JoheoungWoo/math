select * from emp where sal >= (select sal from emp where ename = 'JONES');


select * from emp where comm > (select comm from emp where ename = 'ALLEN');



-- EMP 에 빠진 데이터
INSERT INTO EMP VALUES(7788,'SCOTT','ANALYST',7566,'87/04/19',3000,NULL,20);
INSERT INTO EMP VALUES(7876,'ADAMS','CLERK',7788,'87/05/23',1100,NULL,20);

delete from emp where empno = 7876;

select * from emp where hiredate < (select hiredate from emp where ename = 'SCOTT');
select hiredate from emp where ename = 'SCOTT';

-- 문2) emp 테이블과 dept 테이블을 join하는데,
-- emp.deptno가 deptno랑 같고, deptno가 20이고,
-- emp의 sal 이 평균 sal보다 큰 직원을 구함
-- emp의 avg를 쓸 경우 서브 쿼리를 사용

select * from emp E, dept D
    where E.deptno = D.deptno and E.deptno = 20 and E.sal > (select avg(sal) from emp);
    
select * from emp E inner join dept D
    on E.deptno = D.deptno and E.deptno = 20 and E.sal > (select avg(sal) from emp);


-- 235p
-- 서브 쿼리를 사용하여 EMP 테이블에서 
-- 전체 사원의 평균 급여보다 작거나 같은 급여를 받는 
-- 20번부서의 
-- 사원과 부서정보를 구하기
-- avg(sal) => 2110
select E.ename, D.dname, E.sal from emp E, dept D
    where E.deptno = D.deptno and E.sal <= (select avg(sal) from emp)
    and d.deptno = 20;
    
select E.ename, D.dname, E.sal from emp E inner join dept D
    on E.deptno = D.deptno and E.sal <= (select avg(sal) from emp)
    and d.deptno = 20;
    
    
-- 부서별 최대 월급인 경우 출력
-- 서브쿼리 결과가 하나가 아니고, 여러개 일 때의 경우
select * from emp where sal in (select max(sal) from emp group by deptno);

-- 각각의 부서가 있으므로, 1개 이상의 행을 반환하기 때문에,
-- 밑의 코드는 에러가 뜹니다.
-- select * from emp where sal > (select max(sal) from emp group by deptno);


-- 위의 코드를 수정하여 sal가 하나 이상을 만족하는 결과를 보고싶을 때, any vs all
-- any는 한 개만 충족
select * from emp where sal = any (select max(sal) from emp group by deptno);
-- all은 모두 충족
select * from emp where sal = all(select max(sal) from emp group by deptno);


-- p239
select sal from emp where deptno = 30;

select * from emp where sal > any(select sal from emp where deptno = 30) order by sal , empno;
select * from emp where sal > all(select sal from emp where deptno = 30) order by sal , empno;
select * from emp where sal in (select sal from emp where deptno = 30) order by sal , empno;
select * from emp where sal > some(select sal from emp where deptno = 30) order by sal , empno;


-- p243
select * from emp where empno in (select empno from dept where deptno = 7);
select * from emp;

insert into dept values (7,'그린', '미금역');

-- 3개를 emp에 추가하고 , 17개중에 14개만 출력
INSERT INTO EMP VALUES(7265,'EDAM','SCOTT',7540,'79/05/23',1500,300,10);
INSERT INTO EMP VALUES(7260,'WARS','CLERK',7536,'78/05/23',2700,NULL,40);
INSERT INTO EMP VALUES(7255,'QUEEN','MARKDOWN',7532,'77/05/23',3000,2000,40);

select * from dept;
select * from emp where exists (select hiredate from dept where hiredate > '80/01/01');

insert into emp values (1,'김말자','자바',7566,'99/01/01', 500, null, 7);
insert into emp values (2,'홍길동','C#',7566,'99/01/01', 500, null, 7);
insert into emp values (3,'김개둥','파이썬',7566,'99/01/01', 500, null, 7);


select * from emp where (deptno, sal) in (select deptno, max(sal) from emp group by deptno);
-- 여러개의 column이 포함되는 것을 출력
select * from emp where (deptno, sal) in (select deptno, max(sal) from emp group by deptno);
select * from emp;

select distinct deptno from emp;

create table tbl_exists_com(a number, b varchar2(20));
create table tbl_exists_with(c number, d varchar2(20));
insert into tbl_exists_com values(1,'bb');
insert into tbl_exists_with values(3,'dd');
select * from tbl_exists_com;
select * from tbl_exists_with;
delete from tbl_exists_with where c = 3;


select E10.EMPNO, E10.ENAME, E10.DEPTNO, D.DNAME, D.LOC
    from (select * from emp where deptno = 10) E10,
        (select * from dept) D
        where E10.deptno = D.deptno;       
        
WITH
E10 as (select * from emp where deptno = 10),
D as (select * from dept)
select E10.EMPNO, E10.ENAME, E10.DEPTNO, D.DNAME, D.LOC
    from E10, d
        where E10.deptno = D.deptno;
        
        
        
select empno, ename, job, sal,
    (select grade from salgrade where E.sal between losal and hisal) as 월급,
    deptno,
    (select ename from dept where e.deptno = dept.deptno) as dname from emp E;
    
    
create view v_sal as (select grade from salgrade); 
-- view를 생성하면 테이블과 동일하게 사용 가능하다.
-- 보안과 관련되어 아르바이트 생한테 원래 개인접오를 노출하면 안된다.
-- 주민번호 이런거 제외하고 필요한 칼럼만 보이도록 view로 관리
select * from v_sal;
select * from emp;


-- empno, ename, job
create view v_emp as (select empno, ename, job from emp);
select * from v_emp where ename='SCOTT';


create table dept_temp as select * from dept;
select * from dept_temp;
create table emp_temp as select * from emp where sal >= 500;
select * from emp_temp;
create table emp_temp2 as select * from emp where 1<>1;
select * from emp_temp2;
desc emp_temp2;

update emp set hiredate = sysdate where ename = 'SCOTT';
select * from emp where ename = 'SCOTT';



insert into emp_temp (empno, ename, job, mgr, hiredate, sal, comm, deptno)
    select E.empno, E.ename, E.job, E.mgr, E.hiredate, E.sal, E.comm, E.deptno from emp E, salgrade S
    where E.sal between S.losal and S.hisal and S.grade = 1;
    
select * from emp_temp;
update emp_temp set job='데이터' where deptno = 20;
rollback;


select losal from salgrade;
-- 271p
-- 서브 쿼리를 이용하여 데이터 삭제
delete from emp_temp
    where empno in (select E.empno from emp_temp E, salgrade S where E.sal between S.losal And S.hisal)
    and S.grade = 3 and E.deptno = 30;