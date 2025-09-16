SELECT
 INSTR('HELLO, ORACLE!', 'L') AS instr_1, -- L의 위치
    INSTR('HELLO, ORACLE!', 'L,' 5) AS instr_2, --5번째 이후로의 위치
        INSTR('HELLO, ORACLE!', 'L',2,2) AS instr_3 --2번째의 l을 찾아라
    from DUAL;
    
    
    SELECT INSTR('권기현김유라조형우곽은지전별신소라이병국강민석박종민나신영이건호전재석','김유라') FROM DUAL;

create or replace function fff (z in varchar2)
return number
    is
    zzzz number;
    begin
        select INSTR('김유라',z) into zzzz from dual;
        return zzzz;
    end;
    /
    
    --p147
    
SELECT INSTR('HELLO, ORACLE!',LENGTH(job)) from emp;

select '[' || trim(leading from ' _ _oracle_ _ ') || ']' trim,
 '[' || trim(leading from ' ^ _oracle_ _ ') || ']' trasiling_from,
 '[' || trim(both from ' _ _oracle_ _ ') || ']' trailing_from,
 '[' || replace(' _ _oracle_ _ ', ' ' , '?') replace
 from dual;
 
 
 -- 문제 2) 두개의 인자를 문자열로 전달하고, 변경하고자하는 문자하고 변경되고자 하는 문자를 전달하여 replace되도록 하세요.
 set SERVEROUT on;
 DBMS_OUTPUT.PUT_LINE('출력할 문자열');
 
 desc emp;
 select * from emp;
 
 drop procedure swap;
 create or replace function swap(
 s1 in varchar2,
 s2 in varchar2
 ) 
 return varchar2
 is
 cc varchar2(100);
 begin
    select replace('asdasdas', s1, s2) into cc from dual;
    return cc;
 end;
 /
 
select swap('asd','-') from dual;
set SERVEROUT on;

select 2+3 from dual;

select concat ('사랑','합니다') as 굳 from dual;
select '사랑' || '합니다' from dual;