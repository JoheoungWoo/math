package com.green.star.backendSpring.controller;

import com.green.star.backendSpring.domain.Member;
import com.green.star.backendSpring.dto.MemberDTO;
import com.green.star.backendSpring.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(
        origins = {"http://localhost:3000"},
        methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PATCH,RequestMethod.OPTIONS},
        allowedHeaders = "*"
)
@Slf4j
public class MemberController {

    @Autowired
    MemberRepository r;

    Member toEntity(MemberDTO dto) {
        Member m = Member.builder()
                .name(dto.getName())
                .id(dto.getId())
                .password(dto.getPassword())
                .password2(dto.getPassword2())
                .email(dto.getEmail())
                .birth(new Date())
                .phone(dto.getPhone())
                .address(dto.getAddress())
                .agree(dto.getAgree())
                .build();

        return m;
    }

    MemberDTO toDTO(Member vo) {
        MemberDTO m = MemberDTO.builder()
                .name(vo.getName())
                .id(vo.getId())
                .password(vo.getPassword())
                .password2(vo.getPassword2())
                .email(vo.getEmail())
                .birth(new Date())
                .phone(vo.getPhone())
                .address(vo.getAddress())
                .agree(vo.getAgree())
                .build();

        return m;
    }

    @PostMapping("/api/member")
    public ResponseEntity<String> register(@RequestBody MemberDTO dto) {
        log.info("데이터 : {}",dto);
        r.save(toEntity(dto));
        return ResponseEntity.ok("hello");
    }

    @PostMapping("/api/member/login")
    public ResponseEntity<MemberDTO> login(@RequestBody MemberDTO dto) {
        log.info("dto : {}",dto);

//        List<Member> u = r.findAll().stream().filter(member ->
//                member.getId().equals(dto.getId()) &&
//                        member.getPassword().equals(dto.getPassword()) // && member.getPassword2().equals(dto.getPassword2())
//                        ).toList();
//        MemberDTO vv = null;
//        if(u.size() > 0) {
//            vv = toDTO(u.get(0));
//            log.info("vv : {}",vv);
//        }
        var test = r.findAll().stream().filter(member -> member.getId().equals(dto.getId())).findFirst().orElseGet(() -> new Member());


        return ResponseEntity.ok(toDTO(test));
    }


//    @GetMapping("/api/member/id")
//    public ResponseEntity<Member> register22(String id) {
//        log.info("id:{}",id);
//        Optional<Member> z = r.findByUserId(id);
//        return ResponseEntity.ok(z.get());
//    }
}
