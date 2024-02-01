package miu.waa.lab.service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import miu.waa.lab.entity.ExceptionLog;
import miu.waa.lab.entity.Log;
import miu.waa.lab.repo.ExceptionLogRepo;
import miu.waa.lab.repo.LogRepo;

@Service
@RequiredArgsConstructor
public class LogServiceImpl implements LogService {

	private final LogRepo logRepo;

	private final ExceptionLogRepo exceptionLogRepo;

	@Override
	public List<Log> findAll() {
		return logRepo.findAll();
	}

	@Override
	public Log getById(long id) {
		return logRepo.findById(id).get();
	}

	@Override
	public void save(Log l) {
		logRepo.save(l);
	}

	@Override
	public void delete(long id) {
		logRepo.delete(logRepo.findById(id).get());
	}

	@Override
	public List<ExceptionLog> findAllExceptions() {
		return exceptionLogRepo.findAll();
	}

	@Override
	public ExceptionLog getExceptionById(long id) {
		return exceptionLogRepo.findById(id).get();
	}

	@Override
	public void saveException(ExceptionLog l) {
		exceptionLogRepo.save(l);
	}

	@Override
	public void deleteException(long id) {
		exceptionLogRepo.delete(exceptionLogRepo.findById(id).get());
	}

}
