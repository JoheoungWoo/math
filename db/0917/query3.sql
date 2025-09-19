select * from emp;
select * from dept;

-- 1번
select E.deptno, D.dname, E.empno, E.ename, E.sal from emp E, dept D
where E.sal >= 2000 and E.deptno = D.deptno;


-- 2번
select E.deptno, D.dname, trunc(avg(E.sal)), max(E.sal), min(E.sal), count(*) from emp E, dept D
    where E.deptno = D.deptno
        group by E.deptno, D.dname;

-- 3번
select deptno, dname, E.empno, E.ename, E.job, E.sal from emp E natural join dept D 
order by empno;

select * from emp;
select * from emp where deptno = 40;

insert into emp values (9999,'KINGDOM','CLERK',7777,'82-05-05',1111,null,40);
delete from emp where empno = 9999;

-- sql-99 이전
select D.deptno, D.dname, E.empno, E.ename, E.job, E.sal from emp E, Dept D where E.deptno(+) = D.deptno
order by D.deptno,E.ename;

-- sql-99 이후
select D.deptno, D.dname, E.empno, E.ename, E.job, E.sal from emp E right outer join Dept D on E.deptno = D.deptno
order by D.deptno,E.ename;


select count(*) from emp;
select count(*) from dept;
select count(*) from SALGRADE;

select count(*) from emp E, dept D, salgrade S, emp E2
        where e.deptno (+) = d.deptno
        and e.sal between s.losal(+) and s.hisal(+)
        and e.mgr = e2.empno(+);
-- 4번
select D.deptno , D.dname, e.empno, e.ename, e.mgr, e.sal , e.deptno, s.losal, s.hisal, s.grade,
        e2.empno as mgr_empno, e2.ename as mgr_ename
        from emp E, dept D, SALGRADE s , emp e2
        where e.deptno (+) = d.deptno
        and e.sal between s.losal(+) and s.hisal(+)
        and e.mgr = e2.empno(+)
        order by d.deptno, e.empno;


select * from salgrade;

select count(*) from emp E, dept D, salgrade S, emp E2
        where e.deptno (+) = d.deptno
        and e.sal between s.losal(+) and s.hisal(+)
        and e.mgr = e2.empno(+);
        
select D.deptno , D.dname, e.empno, e.ename, e.mgr, e.sal , e.deptno, s.losal, s.hisal, s.grade, e2.empno as mgr_empno, e2.ename as mgr_ename
    from emp E right outer join dept D 
        on E.deptno = D.deptno
    left outer join salgrade S
        on e.sal between S.losal and S.hisal
    left outer join emp E2
        on e.mgr = e2.empno
    order by d.deptno, e.empno;


