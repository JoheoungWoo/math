package com.green.star.backendSpring.dto;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class YuraDTO {
    private Long yno;

    private String name;
    private int age;
    private String address;

    private String addressAge;
}
