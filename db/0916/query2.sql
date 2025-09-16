select 5+2 as sample from dual;

select ceil(12345.5678) as round from dual;

    round(12345.5678,0) as round_0,
    round(12345.5678,1) as round_1,
    round(12345.5678,2) as round_2,
    round(12345.5678,-1) as round_minus1,
    round(12345.5678,-2) as round_minus2,
    ceil(12345.5678) as round_minus3,
    floor(12345.5678) as round_minus4
from dual;


 create or replace function modulor_func(
 a in number,
 b in number
 ) 
 return number
 is
 result number;
 begin
    select mod(a,b) into result from dual;
    return result;
 end;
 /
 
select modulor_func(10,3) from dual;





begin
    for j in 10..100 loop
        for i in 1..10 loop
        declare
            v_result number;
            begin
                select modulor_func(j,i) into v_result from dual;
                dbms_output.put_line('j: ' || j || ' % ' || 'i: ' || i || ',결과=' || v_result);
            end;
        end loop;
        dbms_output.put_line(j || '=>' || '================================');
     end loop;
end;

-- 175p
select empno, ename, job, sal, 
decode(job, 'Manager', sal * 1.1,
'SALESMAN', sal * 1.1,
'ANALYST', sal,
sal * 0.03) as upsal
from emp;

select empno, ename, job, sal, 
    case job
        when 'Manager' then sal * 1.1
        when 'SALESMAN' then sal * 1.1
        when 'ANALYST' then sal
        else sal * 0.03
    end as upsal
from emp;


select empno, ename, comm ,
    case 
        when comm is null then '해당사항 없음'
        when comm = 0 then '수당없음'
        when comm > 0 then '수당 ;' || comm
    end as comm_text
from emp;

create table score_table
(
    scoreNo number primary key,
    math number,
    eng number,
    korea number,
    total number(7,3),
    avg number(7,2),
    grade varchar2(200)
)


create sequence seq_score_last;
 insert into  score_table (scoreno, math ,eng ,korea) values(seq_score_last.nextval , 34,78,99); 
insert into  score_table (scoreno, math ,eng ,korea) values(seq_score_last.nextval , 77,99,99);
 insert into  score_table (scoreno, math ,eng ,korea) values(seq_score_last.nextval , 66,98,99); 
insert into  score_table (scoreno, math ,eng ,korea) values(seq_score_last.nextval , 55,55,23);
 insert into  score_table (scoreno, math ,eng ,korea) values(seq_score_last.nextval , 99,100,99); 
insert into  score_table (scoreno, math ,eng ,korea) values(seq_score_last.nextval , 66,88,45);
 insert into  score_table (scoreno, math ,eng ,korea) values(seq_score_last.nextval , 100,100,99); 
insert into  score_table (scoreno, math ,eng ,korea) values(seq_score_last.nextval , 10,12,11);

select * from score_table;
update score_table set total = math + eng + korea, avg = (math + eng + korea) / 3;



select scoreNo,avg,
    case avg
        when 91.67 then '수'
        when 87.67 then '우'
        else '가'
    end
from score_table;

update score_table set grade = 
    case 
        when avg > 90 then '수'
        when avg > 80 then '우'
        when avg > 70 then '미'
        when avg > 60 then '양'
        else '가'
    end;
    /
    
update score_table set grade = 
    case
        when avg > 90 then '수'
        when avg > 80 then '우'
        when avg > 70 then '미'
        when avg > 60 then '양'
        else '가'
    end;
    /
    
select * from score_table;



