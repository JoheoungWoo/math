set termout off
set echo off

drop table dept;
-- constraint(제약 조건)
create table dept
    (deptno number(2) constraint pk_dept primary key,
    dname varchar2(15),
    loc varchar2(13));
    
    
desc dept;

create table emp
    (
        empno number(4) constraint pk_emp primary key,
        ename varchar2(100),
        job varchar2(90),
        mgr number(4), -- 직장 상사
        hiredatea date, -- 고용일
        sal number(7,2), -- 월급
        comm number(7,2), -- 수당
        deptno number(2) constraint fk_deptno references dept);

desc emp;    
    
insert into dept values(1, '관리부', '서울');
insert into dept values(2, '총무부', '부산');
insert into dept values(3, '개발부', '미국');
insert into dept values(4, '운영팀', '전주');
select * from dept;

-- quiz
-- 1,2,3,4 라는 부서번호가 모두 들어가야하며,
-- 20개 이상의 데이터
--                     key, name , job , 직장상사, 고용일 , 월급 , 수당 , 부서번호
insert into emp values(1,'이재오', '강사', 3, '2022-10-01', 200.2, 10.3, 1);
insert into emp values(2,'조형우', '운동선수', 5, '2022-10-01', 150.1, 5.3, 1);
insert into emp values(3,'홍길동', '운동선수', 1, '2022-10-01', 170.5, 7.3, 1);
insert into emp values(4,'길동홍', '강사', 2, '2022-10-01', 130.2, 3.3, 1);
insert into emp values(5,'길길홍', '체육교사', 6, '2022-10-01', 300.5, 15.3, 1);

--                     key, name , job , 직장상사, 고용일 , 월급 , 수당 , 부서번호
insert into emp values(6,'가나다', '강사', 3, '2022-10-01', 200.2, 10.3, 2);
insert into emp values(7,'다라마', '강사', 5, '2022-10-01', 150.1, 5.3, 2);
insert into emp values(8,'다다다', '운동선수', 1, '2022-10-01', 170.5, 7.3, 2);
insert into emp values(9,'다라마', '강사', 2, '2022-10-01', 130.2, 3.3, 2);
insert into emp values(10,'마마마', '강사', 6, '2022-10-01', 300.5, 15.3, 2);

--                     key, name , job , 직장상사, 고용일 , 월급 , 수당 , 부서번호
insert into emp values(11,'나다가', '강사', 3, '2022-10-01', 200.2, 10.3, 3);
insert into emp values(12,'나가다', '운동선수', 5, '2022-10-01', 150.1, 5.3, 3);
insert into emp values(13,'다나가', '강사', 1, '2022-10-01', 170.5, 7.3, 3);
insert into emp values(14,'가나다', '강사', 2, '2022-10-01', 130.2, 3.3, 3);
insert into emp values(15,'나다가', '강사', 6, '2022-10-01', 300.5, 15.3, 3);

--                     key, name , job , 직장상사, 고용일 , 월급 , 수당 , 부서번호
insert into emp values(16,'기러기', '강사', 3, '2022-10-01', 200.2, 10.3, 4);
insert into emp values(17,'오렌지', '강사', 5, '2022-10-01', 150.1, 5.3, 4);
insert into emp values(18,'오레오', '강사', 1, '2022-10-01', 170.5, 7.3, 4);
insert into emp values(19,'홍길동', '강사', 2, '2022-10-01', 130.2, 3.3, 4);
insert into emp values(20,'길길홍', '강사', 6, '2022-10-01', 300.5, 15.3, 4);


insert into emp values(seq_emp.nextval, '이재오', '강사', 3, '2022-10-01', 200.2, 10.3, 3);
insert into emp values(seq_emp.nextval, '이재오', '강사', 3, '2022-10-01', 200.2, 10.3, 3);
insert into emp values(seq_emp.nextval, '이재오', '강사', 3, '2022-10-01', 200.2, 10.3, 3);

create sequence seq_emp;
drop sequence seq_emp;

update emp set mgr=7 where empno = 2;
delete from emp where mgr=2;
drop table emp;


select seq_emp.nextval from dual;

-- select * from dept;
select * from emp;
drop table emp;
TRUNCATE table emp;


-- 1) 수정을 하는데, job이 운동선수인 것을 찾아서 mgr 20으로 변경
update emp set mgr=20 where job='운동선수';
select * from emp;
-- 2) 체육교사가 job인 사람을 삭제
delete from emp where job='체육교사';
select * from emp;
-- 위의 코드를 실행하기 위해 데이터 추가
insert into emp values(seq_emp.nextval, '이재오', '체육교사', 3, '2022-10-01', 200.2, 10.3, 3);

select * from dept;
select * from emp;


create or replace PROCEDURE insert_with_seq is
    begin 
        for i in 1..50 loop
            insert into emp values (seq_emp.nextval, '이재오' || i, '강사' || i, i+3, sysdate, i*20, i+5, mod(i,4)+1);
        end loop;
        commit;
    end;
    
exec insert_with_seq;

select concat('홍길동','1'), 'ㅁ' || 'ㅠ' from dual;
