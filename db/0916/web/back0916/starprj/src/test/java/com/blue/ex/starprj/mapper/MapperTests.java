package com.blue.ex.starprj.mapper;


import com.blue.ex.starprj.mybatis.domain.ScoreVO;
import com.blue.ex.starprj.mybatis.mapper.ScoreMapper;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@MapperScan("com.blue.ex.starprj.mybatis.mapper")
public class MapperTests {

    @Autowired
    private ScoreMapper mapper;

    @Test
    public void find() {
        System.out.println("find");
        System.out.println(mapper);
        System.out.println(mapper.getList());
    }

    @Test
    public void insertDummy() {
        for(int i=0; i<100; i++) {
            ScoreVO v = new ScoreVO();
            v.setKorea(77);
            v.setMath(55);
            v.setEng(53);
            v.setTotal(v.getMath()+ v.getEng()+v.getKorea());
            v.setAvg(v.getTotal()/3.0f);
            v.setGrade("수");
            mapper.insert(v);
        }
    }

}
