package com.green.star.backendSpring.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name="tbl_score")
public class Score {
    @Id
    @SequenceGenerator(
            name = "member_seq_gen",
            sequenceName= "seq_score",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "member_seq_gen"  // 위에서 선언한 제너레이터 이름 지정
    )
    private Long vno;

    private String vname;
    private float total;
    private float avg;
    private int math;
    private int eng;
    private int korea;
    private String grade;
}
