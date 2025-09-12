package com.green.star.backendSpring.repository;

import com.green.star.backendSpring.domain.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, Long> {
}
