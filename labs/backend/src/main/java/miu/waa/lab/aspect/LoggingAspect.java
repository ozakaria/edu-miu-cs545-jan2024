package miu.waa.lab.aspect;

import java.util.Date;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import miu.waa.lab.entity.ExceptionLog;
import miu.waa.lab.entity.Log;
import miu.waa.lab.service.LogService;

@Aspect
@Component
public class LoggingAspect {

	@Autowired
	private LogService logService;

    @Before("execution(* miu.waa.lab.*.*(..))")
    public void beforeMethodExecution(JoinPoint joinPoint) {
        String className = joinPoint.getTarget().getClass().getSimpleName();
        String methodName = joinPoint.getSignature().getName();
        String principle = "user";
        String operation = className + "." + methodName;

        logOperation(principle, operation);
    }

    @AfterReturning(pointcut = "execution(* miu.waa.lab.*.*(..))", returning = "result")
    public void afterMethodExecution(JoinPoint joinPoint, Object result) {
    	
    }

    @AfterThrowing(pointcut = "execution(* miu.waa.lab.*.*(..))", throwing = "ex")
    public void logAfterThrowing(JoinPoint joinPoint, Exception ex) {
        String className = joinPoint.getTarget().getClass().getSimpleName();
        String methodName = joinPoint.getSignature().getName();
        String exception = ex.getMessage();
        String principle = "user";
        String operation = className + "." + methodName;

        logException(principle, operation, exception);
    }

    private void logOperation(String principle, String operation) {
        Log logger = new Log();
        logger.setTime(new Date());
        logger.setPrinciple(principle);
        logger.setOperation(operation);
        logService.save(logger);
    }

    private void logException(String principle, String operation, String exception) {
    	ExceptionLog logger = new ExceptionLog();
        logger.setTime(new Date());
        logger.setPrinciple(principle);
        logger.setOperation(operation);
        logger.setException_type(exception);
        logService.saveException(logger);
    }
}
