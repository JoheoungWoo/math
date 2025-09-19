create database jdbcdb;
use jdbcdb;


create table members(
	mno integer not null comment '회원일련번호',
    email varchar(40) not null comment '이메일',
    pwd varchar(100) not null comment '암호',
    mname varchar(50) not null comment '이름',
    cre_date datetime not null comment '가입일',
    mod_date datetime not null comment '마지막 변경일'
);

alter table members
	add constraint PK_MEMBERS -- 회원 번호 기본키
		primary key(mno);
        
create unique index utx_members on members (email asc);
alter table members
	modify column mno integer not null auto_increment comment '회원일련번호';
    
    
insert into members (email, pwd, mname, cre_date, mod_date)
	values ('s1@test.com', '1111', '홍길동', now(), now());
    
insert into members (email, pwd, mname, cre_date, mod_date)
	values ('s2@test.com', '1111', '임꺽정', now(), now());
    
insert into members (email, pwd, mname, cre_date, mod_date)
	values ('s3@test.com', '1111', '일지매', now(), now());
    
insert into members (email, pwd, mname, cre_date, mod_date)
	values ('s4@test.com', '1111', '이몽룡', now(), now());
    
insert into members (email, pwd, mname, cre_date, mod_date)
	values ('s5@test.com', '1111', '성춘향', now(), now());
    
select * from members;
desc members;

create table tbl_score(
	math int,
    korea int,
    eng int,
    total float,
    avg float,
    grade varchar(10)
);

insert into tbl_score (korea,math,eng) values (88,66,44);
insert into tbl_score (korea,math,eng) values (99,22,100);
insert into tbl_score (korea,math,eng) values (38,100,89);
insert into tbl_score (korea,math,eng) values (88,66,44);
insert into tbl_score (korea,math,eng) values (77,99,11);
select * from tbl_score;

SET SQL_SAFE_UPDATES = 0;
update tbl_score set total = korea + math + eng, avg = (korea + math + eng)/3;
update tbl_score set grade = '수' where avg between 90 and 100;
update tbl_score set grade = '우' where avg between 80 and 89;
update tbl_score set grade = '미' where avg between 70 and 79;
update tbl_score set grade = '양' where avg between 60 and 69;
update tbl_score set grade = '가' where avg < 60;