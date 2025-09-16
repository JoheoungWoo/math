create table b_tbl(
    bno number(10) primary key,
    math number(3),
    eng number(3) not null,
    korea number(3),
    total number(4),
    z number(2)
)
desc b_tbl;

-----------------------------------------------

insert into b_tbl values (1,40,2,90,45,5);
insert into b_tbl values (2,50,1,90,157,6);
insert into b_tbl values (3,60,7,100,163,7);
insert into b_tbl values (4,70,8,70,193,8);

select * from b_tbl;

------------------------------------------------

create table a_tbl(
    a number(10) primary key,
    b number(10),
    c number(10),
    d number(3) not null,
    item number(3),
    
    CONSTRAINT fk_item_bno foreign key(item) REFERENCES b_tbl(bno)
)
desc a_tbl;

-------------------------------------------------

insert into a_tbl values (1,11,12,2,1);
insert into a_tbl values (2,15,16,1,2);
insert into a_tbl values (3,9,4,3,3);
insert into a_tbl values (4,1,2,4,4);
insert into a_tbl values (5,0,0,7,1);
insert into a_tbl values (6,null,null,8,3);
insert into a_tbl values (7,11,19,100,2);
insert into a_tbl values (8,50,51,5,4);

select * from a_tbl;

----------------------------------------------------

select * from a_tbl A, b_tbl B
where A.d = B.eng and c >= 12;

select * from a_tbl A
inner join b_tbl B on A.d = B.eng where c >= 12;