create table backup_usertbl(
	userID char(8) not null primary key,
    name varchar(10) not null,
    birthYear int not null,
    addr char(2) not null,
    mobile1 char(3),
    mobile2 char(8),
    height smallint,
    mDate date,
    modType char(2),
    modDate date,
    modUser varChar(256)
);

drop table usertbl;
create table usertbl(
	userID char(8) not null primary key,
    name varchar(10) not null,
    birthYear int not null,
    addr char(2) not null,
    mobile1 char(3),
    mobile2 char(8),
    height smallint,
    mDate date,
	modType char(2),
    modUser varChar(256)
);



insert into usertbl values('1','홍길동', 90, 'ko','010','00001111',180,now(),'up','홍길동');
insert into usertbl values('2','김말자', 92, 'us','010','00001112',180,now(),'de',current_user());
insert into usertbl values('3','김개똥', 91, 'mx','011','00001113',78,now(),'in',current_user());
insert into usertbl values('4','김개퉁', 92, 'mx','011','00001114',150,now(),'in',current_user());
insert into usertbl values('5','개퉁', 92, 'mx','011','00001115',150,now(),'in',current_user());
insert into usertbl values('6','퉁', 90, 'mx','015','00001116',150,now(),'in',current_user());
select * from backup_usertbl;
select * from usertbl;

delimiter //
create trigger backuptbl_updatetrg
	after update
    on usertbl
    for each row
begin
	insert into backup_usertbl values(old.userid, old.name, old.birthYear, old.addr, old.mobile1,
		old.mobile2, old.height, old.mDate, '수정', curdate(), current_user());
end //
delimiter ;


drop trigger IF EXISTS usertbl_insert_trg;
-- trigger usertbl_insert_trg를 만들고, usertbl에서 데이터 추가시 backuptbl에 추가되도록 하여라
delimiter //
create trigger usertbl_insert_trg
	after insert
    on usertbl
    for each row
begin
	insert into backup_usertbl values(new.userid, new.name, new.birthYear, new.addr, new.mobile1,
		new.mobile2, new.height, new.mDate, '추가', curdate(), current_user());
end //
delimiter ;


delimiter //
create trigger backuptbl_deletetrg
	after delete
    on usertbl
    for each row
begin
	insert into backup_usertbl values(old.userid, old.name, old.birthYear, old.addr, old.mobile1,
		old.mobile2, old.height, old.mDate, '삭제', curdate(), current_user());
end //
delimiter ;

update usertbl set addr = '몽고' where userid='JKW';
select * from usertbl;
select * from backup_usertbl;

delete from usertbl where height>=177;
select * from usertbl;
select * from backup_usertbl;

truncate table usertbl;
select * from usertbl;
select * from backup_usertbl;



