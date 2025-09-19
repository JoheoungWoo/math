create table tbl2_aa(ban number, name varchar2(100));
create table tbl2_bb(no number, name varchar2(100), score number(5), nickname varchar2(100), ban number);
create table tbl2_cc(score varchar2(100) check (score in ('수','우','미','양','가')),lo number, hi number);

drop table tbl2_cc;

insert into tbl2_aa values (1,'최우수반');
insert into tbl2_aa values (2,'우수반');
insert into tbl2_aa values (3,'중간반');
insert into tbl2_aa values (4,'나머지반');
select * from tbl2_aa;

----------------------------------------------------------------

insert into tbl2_bb values (1,'이건호',78,'우수반',2);
insert into tbl2_bb values (2,'전재석',100,'최우수반',1);
insert into tbl2_bb values (3,'나신영',20,'나머지반',4);
insert into tbl2_bb values (4,'임병국',88,'우수반',2);

insert into tbl2_bb values (5,'신소라',90,'우수반',2);
insert into tbl2_bb values (6,'김유라',78,'우수반',2);
insert into tbl2_bb values (7,'조형우',66,'중간반',3);
insert into tbl2_bb values (8,'강민석',55,'나머지반',4);

insert into tbl2_bb values (9,'박종민',99,'최우수반',1);
insert into tbl2_bb values (10,'권기현',78,'우수반',2);
insert into tbl2_bb values (11,'곽은지',77,'우수반',2);
insert into tbl2_bb values (12,'전별',66,'중간반',3);
select * from tbl2_bb;

-----------------------------------------------------------------

insert into tbl2_cc values ('수',90,100);
insert into tbl2_cc values ('우',80,89);
insert into tbl2_cc values ('미',70,79);
insert into tbl2_cc values ('양',60,69);
insert into tbl2_cc values ('가',0,59);
select * from tbl2_cc;


select * from tbl2_aa A
    inner join tbl2_bb B
        on A.ban = B.ban
        inner join tbl2_cc C
        on b.score between c.lo and c.hi;
