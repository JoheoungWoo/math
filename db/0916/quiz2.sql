create database eunjidb;

drop table member;
create table member(
	mno bigint primary key,
    korea int,
    eng int,
    math int,
    total int,
    avg float,
    grade varchar(20)
);

insert into member values (1,70,60,60,60,60,'수');
insert into member values (2,70,60,99,60,60,'우');
insert into member values (3,55,22,67,66,60,'미');
insert into member values (4,23,60,60,60,99,'양');
insert into member values (5,55,60,60,60,54,'가');

select * from member;