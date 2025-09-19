select * from emp E, SALGRADE S where E.sal between S.losal and S.HISAL;

select count(deptno) from emp E, SALGRADE S where E.sal between S.losal and S.HISAL
group by losal;

select avg(losal) from emp E, SALGRADE S where E.sal between S.losal and S.HISAL
group by losal;

select * from emp; -- 12
select * from salgrade; -- 5
desc salgrade;


-- SELF JOIN
select E1.EMPNO, E1.ENAME,E1.MGR, E2.EMPNO AS 사수사번, E2.ENAME 사수이름 FROM EMP E1, EMP E2
WHERE E1.MGR = E2.EMPNO;


-- SELF JOIN
select E1.EMPNO, E1.ENAME,E1.MGR, E2.EMPNO AS 사수사번, E2.ENAME 사수이름 FROM EMP E1, EMP E2
WHERE E1.MGR IS NULL;
SELECT * FROM EMP;


-- 219p
-- natural join
-- 3 모두 알아 두면 조음
select E.empno, E.ename, E.job, E.mgr, E.hiredate, E.sal, E.comm, deptno, D.dname, D.loc
from emp E natural join dept D order by deptno, E.empno;

select E.empno, E.ename, E.job, E.mgr, E.hiredate, E.sal, E.comm, deptno, D.dname, D.loc
from emp E join dept D using (deptno) order by deptno, E.empno;

select E.empno, E.ename, E.job, E.mgr, E.hiredate, E.sal, E.comm, D.deptno, D.dname, D.loc
from emp E inner join dept D on D.deptno = E.deptno order by D.deptno, E.empno;


select E1.empno, E1.ename , E1.mgr, E2.empno as mgr_empno, E2.ename as 관리자이름
from emp E1 left outer join emp E2 on (E1.mgr = E2.empno) order by E1.empno;

select E1.empno, E1.ename , E1.mgr, E2.empno as mgr_empno, E2.ename as 관리자이름
from emp E1 right outer join emp E2 on (E1.mgr = E2.empno) order by E1.empno;

-- inner join은 같은 것 끼리 결합(교집합)
-- left outer join은 왼쪽 기준
-- right outer join은 오른쪽 기준

