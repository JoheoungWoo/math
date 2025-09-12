select * from yura_tbl;



declare
    cursor yura_cur
    is
        select * from yura_tbl where address_age like '서울%';
        yura_rec yura_tbl%ROWTYPE;
    begin
        open yura_cur;
        loop
            fetch yura_cur into yura_rec;
            exit when yura_cur%notfound;
            dbms_output.put_line(yura_rec.yno || ' ' || yura_rec.age || ' ' || yura_rec.address);  
        end loop;
    end;
    
    
create or replace PROCEDURE get_cur(
    anyData out any
)
is
    begin
        select * into anyData from yura_tbl where address_age like '서울%';
        exception
            when no_data_found then
                anyData := '';
    end get_cur;
    /    
    
desc 
-- yno , address , address_age , age , name
var v_yno any;
exec get_cur(:anyData);