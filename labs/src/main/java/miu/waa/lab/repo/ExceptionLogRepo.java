package miu.waa.lab.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import miu.waa.lab.entity.ExceptionLog;

public interface ExceptionLogRepo extends JpaRepository<ExceptionLog, Long> {

}
