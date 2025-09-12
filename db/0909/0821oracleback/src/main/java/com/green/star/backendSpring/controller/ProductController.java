package com.green.star.backendSpring.controller;

import com.green.star.backendSpring.vo.AddressVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(
        origins = {"http://localhost:3000"},
        methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PATCH,RequestMethod.OPTIONS},
        allowedHeaders = "*"
)

@Slf4j
public class ProductController {
    List<AddressVO> list= new ArrayList<>();
    private void addData(AddressVO v){
        list.add(v);
    }

    @GetMapping("/list")
    public ResponseEntity<String> list(String id){
        log.info("list={}",list);
        for (int i = 0; i <10 ; i++) {
            AddressVO a =new AddressVO();
            a.setName("홍길동"+(i+1));
            a.setAddress("강북구"+(i+1));
            a.setAge((int)(Math.random()*20));
            a.setAno((long)(i+1));
            a.setPhone("010-000-000"+(i+1));
            addData(a);
        }
        Long.parseLong("12");
        Long l= (long)12;
        log.info("list의 값은={}",list);
        for(AddressVO i: list){
            if(Long.parseLong(id)==i.getAno()){
                log.info("찾았다 요놈:" +i);
                break;
            }
        }
//        System.out.println("여기는 controller list"+a);
        return  null;
    }
}
