-- 179 되새김 
-- 1번
select empno, rpad(empno,2) || REGEXP_REPLACE(substr(empno,-2),'[0-9]' ,'*') as masking_empno, 
ename, rpad(ename,1) || REGEXP_REPLACE(substr(ename,2,length(ename)-1),'[A-Z]' ,'*') as masking_ename from emp
where length(ename) >= 5 and length(ename) < 6;


-- 2번
select empno, ename, sal,
trunc(sal/21.5,2) as day_pay,
round(sal/21.5/6,1) as time_day from emp;


-- 3번
select empno , ename,
to_char(next_day (sysdate, '월요일') , 'YYYY-MM-DD') as R_JOB,
nvl(to_char(comm),'N/A') as COMM
from emp;


-- 4번


