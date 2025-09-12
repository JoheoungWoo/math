package com.green.star.backendSpring.repository;

import com.green.star.backendSpring.domain.Yura;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootTest
@Slf4j
public class YuraRepositoryTests {

    @Autowired
    private YuraRepository repository;

    @Test
    public void insertDummy() {
        // 주소의 문자열을 나이만큼 반복한 것과
        // name 문자열 결합하시오
        // 서울서울서울조형우
        String[] addressArray = {"서울","대구","부산","경기"};
        String[] nameArray = {"조형우","홍길동","김말자","동길홍"};


        for(int i=0; i<100; i++) {
            Yura yura = new Yura();
            yura.setName(nameArray[(int)(Math.random()*nameArray.length)]);
            yura.setAge((int)(Math.random()*10));
            yura.setAddress(addressArray[(int)(Math.random()*addressArray.length)]);

            String name = yura.getName();
            String data = "";
            String address = yura.getAddress();

            for(int j=0; j<yura.getAge(); j++)
                data += address;
            yura.setAddressAge(data + name);

            log.info("데이터 추가 : {} ",yura);
            repository.save(yura);
        }

        // sql에서 cursor를 통해
        // 앞 글자 주소가 서울을 만족하는 age와 addres를 cursor로 출력
    }
}
