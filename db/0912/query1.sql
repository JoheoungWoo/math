select job, substr(job, -length(job)), substr(job, -length(job),2) , substr(job,-3)  

from emp;

create or replace FUNCTION k(a in number)
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

    select k(2) from dual;

select rownum rn, job, empno from emp;


-- avg를 number로 값을 지정하고, grade를 varchar2로 지정후 avg에 따라 수우미양가를 출력
DECLARE
    avg_ number := 50;
    grade varchar2(200);
    begin
        if avg_ >= 90 then grade := '수';
        elsif avg_ >= 80 then grade := '우';
        elsif avg_ >= 70 then grade := '미';
        elsif avg_ >= 60 then grade := '양';
        else grade := '가';

    end if;
        dbms_output.put_line(grade);
    end;
    /
    
DECLARE 
    vdan number(2) := &pdan;
    i number(2) := 0;
    tot number(2) := 0;
    begin
        for i in 1..9 loop 
            tot := vdan * i;
            dbms_output.put_line('  ' || to_char(vdan) || '*' || to_char(i) || '=' || to_char(tot));
        end loop;        
    end;
    /
    
--


create or replace function defaultForm(a in number)
    return number
    is
    begin
        return 1;
    end;

drop function nasinying;
create or replace procedure nasinying(a in number)
    is
    tot number(2) := 0;
    i number; 
    begin
        for i in 1..9 loop
            tot := a * i;
            dbms_output.put_line(to_char(a) || '*' || to_char(i) || '=' || to_char(tot));
        end loop;
    end;
    /

var test number;
test := &pdan;
exec nasinying(&pdan);
print test
    
    
    
create or replace PROCEDURE get_emp_info(
    p_empno in emp.empno%TYPE,
    p_ename out emp.ename%TYPE,
    p_deptno out emp.deptno%TYPE
)

is
    begin
        select ename, deptno into p_ename, p_deptno from emp
            where empno = p_empno;
        exception
            when no_data_found then
                p_ename := null;
                p_deptno := null;
        
    end get_emp_info;
    /


var v_name varchar2(50);
var v_dept number;
exec get_emp_info(7369, :v_name, :v_dept);
print v_name;
print v_dept;

select * from emp;

create or replace PROCEDURE get_empno_with_sal( 
    p_ename out emp.ename%TYPE,
    p_job out emp.job%TYPE,
    p_sal in emp.sal%TYPE
)
is
    begin
        select ename, job into p_ename, p_job from emp
            where sal = p_sal;
        exception
            when no_data_found then
                p_ename := null;
                p_job := null;
        
    end get_empno_with_sal;
    /

var v_ename varchar2(50);
var v_job varchar2(50);
exec get_empno_with_sal (:v_ename, :v_job, 2850);
print v_ename;
print v_job;

--declare
--    var v_ename := emp.ename%TYPE;
--    var v_job := emp.job%TYPE;
--begin 
--    get_empno_with_sal (:v_ename, :v_job, 2850);
--    dbms_output.put_line('ENAME=' || v_ename || ',job' || v_job);
--end;
    
--    300 700 ename 21 job 22

select * from emp;
create or replace procedure f( 
    p_sal_min in emp.sal%TYPE,
    p_sal_max in emp.sal%TYPE,
    p_ename out emp.ename%TYPE,
    p_job out emp.job%TYPE
)
is
    begin
        select ename, job into p_ename, p_job from emp
            where sal between p_sal_min and p_sal_max and rownum = 1;
            
        exception
            when no_data_found then
                p_ename := null;
                p_job := null;
    end f;
    

set serverout on;
declare
    v_ename varchar2(50);
    v_job varchar2(50);

begin
    f(0,3000,:v_ename, :v_job);
    dbms_output.put_line('ENAME=' || v_ename || ',job' || v_job);
end;

select * from emp where deptno = 10;

declare 
    cursor emp_cur
    is
    select * from emp where deptno = 10;
    emp_rec emp%ROWTYPE;
begin
    open emp_cur;
    loop
        fetch emp_cur into emp_rec;
        exit when emp_cur%notfound;
        dbms_output.put_line(emp_rec.empno || ' ' || emp_rec.ename);  
    end loop;
    close emp_cur;
end;

v_max := 50;

exec f(1500,3000,:v_ename, :v_job);
print v_ename;
print v_job;