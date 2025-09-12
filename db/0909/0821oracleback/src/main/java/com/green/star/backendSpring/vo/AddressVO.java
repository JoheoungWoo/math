package com.green.star.backendSpring.vo;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tbl_address")
@Setter
@Getter
@NoArgsConstructor
@ToString
@Builder
@AllArgsConstructor
public class AddressVO {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ano;//중복이 불가능한 column
    private String address;
    private String name;
    private String phone;
    private int age;
}
