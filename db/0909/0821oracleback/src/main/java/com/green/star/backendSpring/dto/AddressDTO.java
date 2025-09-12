package com.green.star.backendSpring.dto;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@ToString
@Builder
@AllArgsConstructor
public class AddressDTO {

    private Long ano;//중복이 불가능한 column
    private String address;
    private String name;
    private String phone;
    private int age;
}
