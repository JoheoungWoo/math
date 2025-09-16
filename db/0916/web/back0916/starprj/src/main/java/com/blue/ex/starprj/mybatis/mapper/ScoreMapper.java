package com.blue.ex.starprj.mybatis.mapper;

import com.blue.ex.starprj.mybatis.domain.ScoreVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ScoreMapper {
    List<ScoreVO> getList();
    ScoreVO findById(Long mno);
    void insert(ScoreVO v);
    void update(ScoreVO u);
    void delete(Long mno);

}
