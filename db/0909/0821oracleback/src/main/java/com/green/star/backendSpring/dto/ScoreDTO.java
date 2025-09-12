package com.green.star.backendSpring.dto;

import jakarta.persistence.*;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ScoreDTO {
    private Long vno;

    private String vname;
    private float total;
    private float avg;
    private int math;
    private int eng;
    private int korea;
    private String grade;
}
