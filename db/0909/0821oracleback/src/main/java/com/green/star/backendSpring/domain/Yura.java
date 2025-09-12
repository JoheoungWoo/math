package com.green.star.backendSpring.domain;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "yura_tbl")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Builder
public class Yura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long yno;

    private String name;
    private int age;
    private String address;

    private String addressAge;
}
