select job, substr(job, -length(job)), substr(job, -length(job),2) , substr(job,-3)  

from emp;

create or replace FUNCTION g(a in number)
    return VARCHAR2
    is
    z VARCHAR2(50);
    begin
        select substr(job, -length(job),a)
        into z 
        from emp
        where rownum=1;
        return z;
    end;
    /
    
    select g(1) from dual;

select rownum rn, job, empno from emp;

