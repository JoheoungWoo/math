package com.green.star.backendSpring.service;

import com.green.star.backendSpring.dto.ScoreDTO;

import java.util.List;

public interface ScoreService {
    public void register(ScoreDTO dto);
    public List<ScoreDTO> getList();
    public ScoreDTO getOne(Long mno);
    public void remove(Long mno);
    public void update(ScoreDTO dto);

}
