-- 문 1) tbl_rara 테이블
-- number ano, varchar2(100) address,varchar2(50) city
create table tbl_rara (
    ano number(10),
    address varchar2(100),
    city varchar2(50)
)
drop SEQUENCE rara_sequence;
create SEQUENCE rara_sequence;

insert into tbl_rara values(rara_sequence.nextval, '123 Main St', '서울');
insert into tbl_rara values(rara_sequence.nextval, '456 Maple Ave', '부산');
insert into tbl_rara values(rara_sequence.nextval, '789 Oak Blvd', '인천');
insert into tbl_rara values(rara_sequence.nextval, '101 Pine Rd', '대구');

select * from tbl_rara;
-- 문 2) tbl_star 테이블
-- number bno, varchar2(100) phone, varchar2(50) dodo
create table tbl_star (
    bno number(10),
    phone varchar2(100),
    dodo varchar2(50)
)
drop SEQUENCE star_sequence;
create SEQUENCE star_sequence;

insert into tbl_star values(star_sequence.nextval, '010-1111-1111', '서울');
insert into tbl_star values(star_sequence.nextval, '010-2222-2222', '부산');
insert into tbl_star values(star_sequence.nextval, '010-3333-3333', '대전');
insert into tbl_star values(star_sequence.nextval, '010-4444-4444', '울산');

select * from tbl_star;
-- 결과
-- rara.city와 star.dodo를 inner join
-- tbl_rara    tbl_star

select R.city RCITY, S.dodo SDODO, address,city, dodo, phone from tbl_rara R inner join tbl_star S on R.city = S.dodo;
-- rara.city와 star.dodo를 left join
-- select R.city RCITY, S.dodo SDODO, address,city, dodo, phone from tbl_rara R left join tbl_star S on R.city = S.dodo;
select R.city RCITY, S.dodo SDODO, address,city, dodo, phone from tbl_rara R left join tbl_star S on R.city = S.dodo where bno is not null;
-- rara.city와 star.dodo를 right join
-- select R.city RCITY, S.dodo SDODO, address,city,  dodo, phone from tbl_rara R right join tbl_star S on R.city = S.dodo;
select R.city RCITY, S.dodo SDODO, address,city,  dodo, phone from tbl_rara R right join tbl_star S on R.city = S.dodo where ano is not null;
