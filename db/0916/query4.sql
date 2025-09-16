
select avg(distinct sal) from emp where deptno = 30;
select avg(distinct sal) from emp where deptno = 20;
select avg(distinct sal) from emp where deptno = 10;


select avg(sal), deptno from emp group by deptno;



-- 문 1) 그룹화를 하는데, 부서(deptno)와 직업(JOB)을 기준으로 그룹화
-- 부서명 , job , 평균 월급을 출력
-- 부서 번호인듯
desc emp;
select deptno, job,avg(sal) from emp 
group by deptno, job 
order by deptno, job;


-- 조건을 거는데, group by 다음에 조건이 집계함수를 쓰면 where가 안된다
-- 그래서 having 을 통해 조건을 건다


select  deptno, avg(sal) from emp group by deptno having avg(sal) >= 2000;
-- 그룹화 하고, 조건을 걸 때, 집계함수를 조건에 쓴다면 where절을 쓸수없다,
-- having

select avg(deptno) from emp group by deptno where ename = '%h';


-- 197
select deptno , job, avg(sal) from emp
where sal <= 3000
group by deptno, job
having avg(sal) >= 2000
order by deptno , job;




