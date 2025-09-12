create table tbl_eunji(
    enum number(5) primary key,
    name varchar2(100)
);

create sequence seq_eunji;
insert into tbl_eunji values(seq_eunji.nextval, '이재오');
insert into tbl_eunji values(seq_eunji.nextval, '홍길동');
insert into tbl_eunji values(seq_eunji.nextval, '이재오2');

select * from tbl_eunji;

select * from tbl_eunji where name like '%재오';


-- 13개의 데이터를 추가하고, 우리반 학생 이름 저장
-- 2개 출력 => 전재석, 강민석
-- name



insert into tbl_eunji values(seq_eunji.nextval, '강민석');
insert into tbl_eunji values(seq_eunji.nextval, '곽은지');
insert into tbl_eunji values(seq_eunji.nextval, '권기현');

insert into tbl_eunji values(seq_eunji.nextval, '김유라');
insert into tbl_eunji values(seq_eunji.nextval, '김찬우');
insert into tbl_eunji values(seq_eunji.nextval, '나신영');

insert into tbl_eunji values(seq_eunji.nextval, '박종민');
insert into tbl_eunji values(seq_eunji.nextval, '신소라');
insert into tbl_eunji values(seq_eunji.nextval, '이건호');

insert into tbl_eunji values(seq_eunji.nextval, '임병국');
insert into tbl_eunji values(seq_eunji.nextval, '전별');
insert into tbl_eunji values(seq_eunji.nextval, '전재석');

insert into tbl_eunji values(seq_eunji.nextval, '조형우');

select * from tbl_eunji;
select * from tbl_eunji where name like '%석';



-- 테이블을 설계하고, union과 intersect 형태로 되도록 데이터 추가
create table tbl_set (
    ano number(4),
    val varchar2(20)
)

create sequence seq_set;

insert into tbl_set values (seq_set.nextval, 'hello world');
insert into tbl_set values (seq_set.nextval, 'hello guddn');
insert into tbl_set values (seq_set.nextval, 'hello rlfehd');
insert into tbl_set values (seq_set.nextval, 'hello ehdrlf');

select * from tbl_set;

select * from tbl_set where val like '%d'
intersect
select * from tbl_set where val like '%r%';

select * from tbl_set where val like '%d'
intersect
select * from tbl_set where val not like '%r%';


select * from tbl_set where val != all(select val from tbl_set where val like '%d' or val like '%r%');

select * from tbl_set where val like '%r%'
minus
select * from tbl_set where val like '%d';




create table uu (name varchar2(100), company varchar2(100));

insert into uu values ('이재오', '삼성');



