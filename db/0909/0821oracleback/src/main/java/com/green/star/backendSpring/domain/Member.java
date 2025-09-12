package com.green.star.backendSpring.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
@Getter
@Entity
public class Member {

    @Id
    @SequenceGenerator(
            name = "member_seq_gen",
            sequenceName= "member_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "member_seq_gen"  // 위에서 선언한 제너레이터 이름 지정
    )
    private Long pno;

    private String name;      // 사용자 이름
    private String id;        // 아이디
    private String password;  // 비밀번호
    private String password2; // 비밀번호 확인
    private String email;     // 이메일
    private Date birth;       // 생년월일 (YYYY-MM-DD)
    private String phone;     // 전화번호
    private String address;   // 주소
    private String agree;     // 약관 동의 여부 (체크박스)
}
