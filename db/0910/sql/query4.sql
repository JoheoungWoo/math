-- 테이블 생성
drop table tbl_student;
create table tbl_student
(
    vno number(4),
    vname varchar2(10),
    total number(10,3),
    avg number(10,2),
    math number(4),
    grade varchar2(4)
)

-- 데이터 생성
--                              vno vname total avg math grade
insert into tbl_student values (1,'홍1',200.3, 52.3, 50, '수');
insert into tbl_student values (2,'홍2',217.6, 48.7, 60, '미');
insert into tbl_student values (3,'홍3',415.7, 94.5, 80, '양');
insert into tbl_student values (4,'홍4',118.9, 100.7, 100, '가');

-- 확인
select vname, total, avg from tbl_student where grade = '미';

-- 결과
select * from tbl_student where total > (select total from tbl_student where avg = 48.7)
