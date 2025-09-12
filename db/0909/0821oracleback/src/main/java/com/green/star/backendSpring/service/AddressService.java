package com.green.star.backendSpring.service;

import com.green.star.backendSpring.dto.AddressDTO;

import java.util.List;

public interface AddressService {
    public List<AddressDTO> list();
    public AddressDTO get(Long id);
    public int modify(AddressDTO dto);
    public void delete(Long id);
    public void add(AddressDTO dto);
 }
