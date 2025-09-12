package com.green.star.backendSpring.repository;

import com.green.star.backendSpring.domain.Member;
import com.green.star.backendSpring.dto.MemberDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {

//    @Query("select * from member m where m.id   =:  id")
//    Optional<Member> findByUserId(@Param("id") String id);

}
