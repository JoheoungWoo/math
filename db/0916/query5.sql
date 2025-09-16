-- 문제 1번
select deptno, avg(sal) as avg_sal, max(sal) as max, min(sal) as min, count(*) as count from emp
group by deptno;

select deptno , trunc(avg(sal)) as avg_sal,
    max(sal) as max_sal,
    min(sal) as min_sal,
    count(*) as cnt
    from emp
    group by deptno;

-- 문제 2번
select * from emp;

select job, count(*) from emp 
    group by job
    having count(*) >= 3;

-- 문제 3번
select to_char(hiredate, 'YYYY') as hire_year, deptno , count(*) as cnt from emp
group by to_char(hiredate, 'YYYY'), deptno;

-- 문제 4번
select nvl2(comm, 'O', 'X') as exist_comm , count(*) as cnt from emp
group by nvl2(comm, 'O', 'X');

select nvl2(null, 1,2) from dual;


select * from emp;

-- 문 5) job으로 그룹을 짓고 직업별 평균 sal이 
-- 특정 값 이상이 한 개이상나오도록  하기
select job, avg(sal) from emp
group by job
having avg(sal) >= 2700;


-- 방법 1
select * from emp E,dept D
where E.deptno =  D.deptno order by E.empno;

-- 방법 2
select * from emp E
inner join dept D on E.deptno = d.deptno order by empno;


select * from emp E,dept D
where E.deptno =  D.deptno and sal >= 3000 order by E.empno;


-- 문1) 테이블을 join하고 ename이 J로 시작하는 사람을 출력
select * from emp E, dept D
where E.deptno = D.deptno and ename like 'J%';

select * from emp E
inner join dept D on E.deptno = d.deptno
and ename like 'J%';

