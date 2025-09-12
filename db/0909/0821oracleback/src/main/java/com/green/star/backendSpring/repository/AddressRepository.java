package com.green.star.backendSpring.repository;

import com.green.star.backendSpring.vo.AddressVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<AddressVO,Long> {
}
