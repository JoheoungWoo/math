select ename, upper(ename), lower(ename), initcap(ename) from emp;


select empno , rpad(substr(empno,1,1),4,'*') 마스킹번호,
ename, rpad(substr(ename,1,1) , length(ename),'*') as 마스킹이름 from emp
where length(ename) >= 5 and length(ename) < 6;


-- job을 C***K이런식으로 나오도록 하기
select concat(  rpad(substr(job,1,1),length(job)-1,'?')   ,  substr(job,-1,1)),job from emp;
select substr(job,1,1) from emp;

-- C???*K S?????*N
select job,concat(rpad(substr(job,1,1), length(job)-3,'?'), lpad(substr(job,-1,1),3,'*?')) from emp;

select rpad(substr(job,1,1),length(job)-1,'?') || substr(job,length(job),1) from emp;
select lpad('ab',7,'?') from dual;

