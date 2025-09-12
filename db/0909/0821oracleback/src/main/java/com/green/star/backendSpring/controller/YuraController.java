package com.green.star.backendSpring.controller;


import com.green.star.backendSpring.dto.YuraDTO;
import com.green.star.backendSpring.service.YuraService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin(
        origins = {"http://localhost:3000"},
        methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PATCH,RequestMethod.OPTIONS},
        allowedHeaders = "*"
)
@Slf4j
public class YuraController {
    @Autowired
    private YuraService service;

    @GetMapping("/yura/list")
    public ResponseEntity<List<YuraDTO>> getList() {
        return ResponseEntity.ok(service.getList());
    }
}
