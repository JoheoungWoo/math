package com.blue.ex.starprj.mybatis.domain;


import lombok.Data;

@Data
public class ScoreVO {
    private Long mno;
    private int korea;
    private int eng;
    private int math;
    private int total;
    private float avg;
    private String grade;
}
