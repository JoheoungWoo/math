package com.green.star.backendSpring.controller;

import com.green.star.backendSpring.dto.AddressDTO;
import com.green.star.backendSpring.repository.AddressRepository;
import com.green.star.backendSpring.service.AddressService;
import com.green.star.backendSpring.vo.AddressVO;
import jakarta.transaction.TransactionScoped;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(
        origins = {"http://localhost:3000"},
        methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PATCH,RequestMethod.OPTIONS},
        allowedHeaders = "*"
)
@Slf4j
public class AddressController {

    @Autowired
    private AddressService service;//respository였는데 service layer를 여기서 사용한다
    //원래 안되던것인데 되는 이유 : spring boot 버전이 올라가면서, Jpa 대신 해준다던가?
    @GetMapping("/add")
    public ResponseEntity<AddressDTO> add(String id){
        System.out.println("address controller에 들어왔다ㅁㄴㄹㅇㅁㄹ");
        AddressDTO v = service.get(Long.parseLong(id));
        log.info("frontend로 부터넘어온 id에 대응하는 데이터={}",v);
        return ResponseEntity.ok(v);
    }
    @GetMapping("/delete")
    public ResponseEntity<List<AddressDTO>> d(String ano){
        log.info("address controller에 삭제하고파{}",ano);
        service.delete(Long.parseLong(ano));
        return ResponseEntity.ok(service.list());
    }
    @GetMapping("/address/list")
    public ResponseEntity<List<AddressDTO>> list(){
        log.info("여기는 controller 전체조회:");
        List<AddressDTO> r=service.list();//toDto 호출하여 반환
        return ResponseEntity.ok( r );
    }

    @Transactional
    @PostMapping("/get")
    public ResponseEntity<String> add(@RequestBody AddressDTO u){
        log.info("dto data={}",u);
        service.add(u);
        return  ResponseEntity.ok("성공");
    }
}
