package com.green.star.backendSpring.service;

import com.green.star.backendSpring.domain.Yura;
import com.green.star.backendSpring.dto.YuraDTO;
import com.green.star.backendSpring.repository.YuraRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class YuraServiceImpl implements YuraService {
    @Autowired
    private YuraRepository repository;

    Yura toEntity(YuraDTO dto) {
        return Yura.builder()
                .yno(dto.getYno())
                .name(dto.getName())
                .age(dto.getAge())
                .address(dto.getAddress())
                .addressAge(dto.getAddressAge())
                .build();
    }

    YuraDTO toDTO(Yura vo) {
        return YuraDTO.builder()
                .yno(vo.getYno())
                .name(vo.getName())
                .age(vo.getAge())
                .address(vo.getAddress())
                .addressAge(vo.getAddressAge())
                .build();
    }


    @Override
    public List<YuraDTO> getList() {
        return repository.findAll().stream().map(dto -> toDTO(dto)).toList();
    }
}
