package com.green.star.backendSpring.service;

import com.green.star.backendSpring.domain.Score;
import com.green.star.backendSpring.dto.ScoreDTO;
import com.green.star.backendSpring.repository.ScoreRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    private ScoreRepository repository;

    Score toEntity(ScoreDTO dto) {
        return Score.builder()
                .vno(dto.getVno())
                .vname(dto.getVname())
                .total(dto.getTotal())
                .avg(dto.getAvg())
                .math(dto.getMath())
                .eng(dto.getEng())
                .korea(dto.getKorea())
                .grade(dto.getGrade())
                .build();
    }

    ScoreDTO toDTO(Score vo) {
        return ScoreDTO.builder()
                .vno(vo.getVno())
                .vname(vo.getVname())
                .total(vo.getTotal())
                .avg(vo.getAvg())
                .math(vo.getMath())
                .eng(vo.getEng())
                .korea(vo.getKorea())
                .grade(vo.getGrade())
                .build();
    }

    private String calcGrade(float avg) {
        // 평균을 받아서 수우미양가 반환
        String grade = "수";

        if(avg >= 90) grade = "수";
        else if(avg >= 80) grade = "우";
        else if(avg >= 70) grade = "미";
        else if(avg >= 60) grade = "양";
        else grade = "가";

        return grade;
    }

    @Override
    public void register(ScoreDTO dto) {
        log.info("1) service 등록 : dto before => {}",dto);
        dto.setTotal(dto.getMath()+dto.getEng()+dto.getKorea());
        dto.setAvg(dto.getTotal()/3.0f);
        dto.setGrade(calcGrade(dto.getAvg()));
        log.info("1) service 등록 : dto after => {}",dto);
        repository.save(toEntity(dto));
    }

    @Override
    public List<ScoreDTO> getList() {
        log.info("전체목록조회");
        return repository.findAll().stream().map(dto -> toDTO(dto)).toList();
    }

    @Override
    public ScoreDTO getOne(Long mno) {
        log.info("impl : 목록 조회");
        return toDTO(repository.findById(mno).orElseGet(() -> new Score()));
    }

    @Override
    public void remove(Long mno) {

    }

    @Override
    public void update(ScoreDTO dto) {

    }
}
