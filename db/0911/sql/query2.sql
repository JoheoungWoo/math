select * from emp;

-- 1번
select * from emp where ename like '%S';


-- 2번
select empno, ename, job, sal, deptno from emp where deptno = 30 and job in('SALESMAN');

-- 3번
-- 3번-1
select empno, ename, job, sal, deptno from emp where deptno = any(select deptno from emp where deptno = 20 or deptno = 30) and sal > 2000;
-- 3번-2
select empno, ename, job, sal, deptno from emp where deptno = 20 or deptno = 30
intersect
select empno, ename, job, sal, deptno from emp where sal > 2000;

-- 4번
select * from emp where not(sal < 3000 and sal > 2000);

-- 5번
select ename, empno, sal, deptno from emp where not(ename not like '%E%' or deptno != 30 or sal between 1000 and 2000);
select ename, empno, sal, deptno from emp where ename like '%E%' and deptno = 30 and sal >= 1000 and sal <= 2000;

-- 6번
select * from emp where comm is null and mgr is not null and job in('MANAGER', 'CLERK') and ename not like '_L%';

select * from emp where not(comm is null and mgr is not null and job in('MANAGER', 'CLERK') and ename not like '_L%');

select * from emp where not (comm is null)
union
select * from emp where mgr is not null and job in('MANAGER', 'CLERK') and ename not like '_L%'

