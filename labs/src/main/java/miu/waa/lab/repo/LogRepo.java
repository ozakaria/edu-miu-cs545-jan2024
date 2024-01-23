package miu.waa.lab.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import miu.waa.lab.entity.Log;

public interface LogRepo extends JpaRepository<Log, Long> {

}
