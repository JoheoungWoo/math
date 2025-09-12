package com.green.star.backendSpring.controller;

import com.green.star.backendSpring.dto.ScoreDTO;
import com.green.star.backendSpring.service.ScoreService;
import com.green.star.backendSpring.vo.AddressVO;
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
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PostMapping("/api/score/register")
    public ResponseEntity<String> register(@RequestBody ScoreDTO dto) {
        log.info("score controller : dto => {}",dto);
        service.register(dto);
        return ResponseEntity.ok("등록되었습니다.");
    }

    @GetMapping("/api/score/list")
    public ResponseEntity<List<ScoreDTO>> list() {
        log.info("score controller 전체 조회");
        return ResponseEntity.ok(service.getList());
    }

    @GetMapping("/api/score/read/{rno}")
    public ResponseEntity<ScoreDTO> read(@PathVariable("rno") String rno) {
        log.info("controller 전체 조회 : {}", rno);
        return ResponseEntity.ok(service.getOne(Long.parseLong(rno)));
    }

}
