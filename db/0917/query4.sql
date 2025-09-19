create table tbl_aa(
    rno number(5) primary key,
    rroom varchar(20) unique
)

desc tbl_aa;
drop table tbl_aa;

-------------------------------------

create table tbl_bb(
    bno number(5) primary key,
    bname varchar(20),
    bresult number(5),
    broom varchar(20),
    broomidx number(5),
    
    CONSTRAINT fk_broom FOREIGN KEY(broom) REFERENCES tbl_aa(rroom),
    CONSTRAINT fk_broomidx FOREIGN KEY(broomidx) REFERENCES tbl_aa(rno)
)

desc tbl_bb;
drop table tbl_bb;

-------------------------------------

create table tbl_cc(
    cgrade varchar2(6) primary key,
    lowscore number(6),
    highscore number(6)
)

--------------------------------------

insert into tbl_aa values (1,'최우수반');
insert into tbl_aa values (2,'우수반');
insert into tbl_aa values (3,'중간반');
insert into tbl_aa values (4,'나머지반');

select * from tbl_aa;

--------------------------------------

-- 최우수반, 우수반, 중간반, 나머지반
insert into tbl_bb values (1,'이건호', 70, '우수반',2);
insert into tbl_bb values (2,'전재석', 80, '최우수반',1);
insert into tbl_bb values (3,'권기현', 100, '최우수반',1);
insert into tbl_bb values (4,'곽은지', 100, '최우수반',1);
insert into tbl_bb values (5,'전별', 70, '중간반',3);
insert into tbl_bb values (6,'김유라', 40, '나머지반',4);
insert into tbl_bb values (7,'조형우', 30, '나머지반',4);

insert into tbl_bb values (8,'강민석', 45, '나머지반',4);
insert into tbl_bb values (9,'나신영', 55, '나머지반',4);
insert into tbl_bb values (10,'임병국', 65, '중간반',3);
insert into tbl_bb values (11,'신소라', 75, '우수반',2);
insert into tbl_bb values (12,'박종민', 85, '최우수반',1);

select * from tbl_bb;

--------------------------------------

insert into tbl_cc values ('수',90, 100);
insert into tbl_cc values ('우',80, 89);
insert into tbl_cc values ('미',70, 79);
insert into tbl_cc values ('양',60, 69);
insert into tbl_cc values ('가',0, 59);

select * from tbl_cc;


----------------------------------------

select count(*) from tbl_aa A, tbl_bb B, tbl_cc C
    where A.rroom(+) = B.broom
    and B.bresult between c.lowscore(+) and c.highscore(+);

select * from tbl_aa A, tbl_bb B, tbl_cc C
    where A.rroom(+) = B.broom
    and B.bresult between c.lowscore(+) and c.highscore(+);

    
select A.rroom as room_name, avg(B.bresult) as avg, sum(B.bresult) as room_sum,
count(B.bname) as student_count,
min(b.bresult) as min_score, max(b.bresult) as max_score
from tbl_aa A, tbl_bb B, tbl_cc C
    where A.rroom(+) = B.broom
    and B.bresult between c.lowscore(+) and c.highscore(+)
    group by A.rroom
    order by A.rroom desc;

