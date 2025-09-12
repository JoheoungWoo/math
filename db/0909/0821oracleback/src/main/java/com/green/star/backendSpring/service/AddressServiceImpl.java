package com.green.star.backendSpring.service;

import com.green.star.backendSpring.dto.AddressDTO;
import com.green.star.backendSpring.repository.AddressRepository;
import com.green.star.backendSpring.vo.AddressVO;
import jdk.jfr.Frequency;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AddressServiceImpl implements  AddressService{

    @Autowired
    private AddressRepository repository;
    AddressDTO toDto(AddressVO v){
        return AddressDTO.builder()
                .address(v.getAddress())
                .name(v.getName())
                .age(v.getAge())
                .phone(v.getPhone())
                .ano(v.getAno())
                .build();

    }
    //브라우저로부터 입력된 데이터를 db로 저장할때 호출해야함
    AddressVO toEntity(AddressDTO d){
        return  AddressVO.builder()
                .name(d.getName())
                .address(d.getAddress())
                .phone(d.getPhone())
                .age(d.getAge())
//                .ano(d.getAno())
                .build();
    }
    @Override
    public List<AddressDTO> list() {
        return repository.findAll().stream().map(i->toDto(i)).toList();
    }

    @Override
    public AddressDTO get(Long id) {
        return toDto(repository.findById(id).get());
    }

    @Override
    public int modify(AddressDTO dto) {
        return 0;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void add(AddressDTO dto) {
        repository.save(toEntity(dto));
    }
}
