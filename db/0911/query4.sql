create or replace function fc_update_sql (v_empno in number, v_sal_2 in number)
    return number
    is
        v_sal emp.sal%type;
    begin
        update emp set sal = sal * v_sal_2 where empno = v_empno;
        commit;
        select sal into v_sal from emp where empno = v_empno;
        return v_sal;
    end;
    
var salary number;
execute :salary:= fc_update_sql(7900,0.3);
print salary;

select * from emp where empno = 7900;


create table byungkook_tbl(
    name varchar2(200),
    pp number(6)
);

insert into byungkook_tbl values ('sdfaf',3);
insert into byungkook_tbl values ('asdfadsfs',7);

select * from byungkook_tbl;

update byungkook_tbl set name = '조형우' where pp=7;
delete from byungkook_tbl where pp=3;


alter table byungkook_tbl add (yyy varchar2(20));
insert into byungkook_tbl values('아무거나',45,'school');

-- 문제1) null인것을 찾아서 삭제
delete from byungkook_tbl where yyy is null;



truncate table byungkook_tbl;
select * from byungkook_tbl;
desc byungkook_tbl;

insert into byungkook_tbl (name, pp) values ('이재오',44);
insert into byungkook_tbl (name, pp) values ('김다라',2);
insert into byungkook_tbl (name, pp) values ('곽은지',7);

-- 문제2) 아래 데이터와 같이 입력하신 후, function을 만들어서
-- 그 function에 문자열을 전달할 수 있도록 하고, yyy가 null인 데이터를 찾아서 호출 시 전달하는 문자열로 수정되도록 설계하세요.
create or replace function fc_update_null (z in varchar2)
    return number
    is
    begin
        -- 동작
        update byungkook_tbl set yyy = z where yyy is null;
        commit;
        return 10;
    end;
    /

var var_yyy number;
execute :var_yyy:= fc_update_null('hello');
print var_yyy;


select * from byungkook_tbl;
