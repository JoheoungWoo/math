select dbms_xdb.gethttpport() from dual;
exec dbms_xdb_config.sethttpport(9090);