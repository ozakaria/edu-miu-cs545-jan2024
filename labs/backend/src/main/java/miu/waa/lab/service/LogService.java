package miu.waa.lab.service;

import java.util.List;

import miu.waa.lab.entity.ExceptionLog;
import miu.waa.lab.entity.Log;

public interface LogService {

    public List<Log> findAll();

    public Log getById(long id);

    public void save(Log l);

    public void delete(long id);

    public List<ExceptionLog> findAllExceptions();

    public ExceptionLog getExceptionById(long id);

    public void saveException(ExceptionLog l);

    public void deleteException(long id);

}
