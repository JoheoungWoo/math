-- 테이블 조인
create table A (
    ano number(3) primary key,
    NAME varchar2(100),
    math number(10,2)
)

create table B (
    bno number(3) primary key,
    NAME varchar2(100),
    eng number(10,2)
)


create sequence seq_a;
create sequence seq_b;

drop table A;
drop table B;
select * from A;

insert into a values (seq_a.nextval , '홍길동1',45); 
insert into a values (seq_a.nextval , '홍길동2',70); 
insert into a values (seq_a.nextval , '홍길동3',87);
insert into a values (seq_a.nextval , '김말자1',170); 
insert into a values (seq_a.nextval , '홍길동4',66); 
insert into b values (seq_b.nextval , '홍길동1',145); 
insert into b values (seq_b.nextval , '김말자1',170); 
insert into b values (seq_b.nextval , '김말자2',187); 
insert into b values (seq_b.nextval , '홍길동4',166);

select * from A;
select * from B;

select A.name, b.name, math, eng from a A inner join b B on A.name = B.name;
select A.name, b.name, math, eng from a A left join b B on A.name = B.name;
select A.name, b.name, math, eng from a A right join b B on A.name = B.name;
