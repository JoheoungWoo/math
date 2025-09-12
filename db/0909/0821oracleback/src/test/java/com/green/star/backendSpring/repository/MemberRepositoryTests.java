package com.green.star.backendSpring.repository;

import com.green.star.backendSpring.domain.Member;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.LongStream;

@SpringBootTest
@Slf4j
public class MemberRepositoryTests {

    @Autowired
    private MemberRepository repository;

    @Test
    public void insertDummy() {
        int cnt = 0;
//        List<Long> numList = Arrays.asList(1l, 2l, 3l, 4l, 5l, 6l);
        List<Long> numList = new ArrayList<>();
        for(int i=20; i<100; i++)
            numList.add((long)i);

        numList.stream().forEach(i-> {

            Member m = Member.builder()
                    .address("주소"+i)
                    .phone("전화번호"+i)
                    .name("이름"+i)
                    .email("a@naver"+i)
                    .agree("동의"+i)
                    .id("id"+i)
                    .birth(new Date())
                    .password("1234")
                    .password2("1234")
                    .build();
            repository.save(m);
        });
    }
}
