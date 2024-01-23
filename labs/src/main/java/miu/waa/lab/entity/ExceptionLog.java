package miu.waa.lab.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionLog {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	long transaction_id;
	Date time;
	String principle;
	String operation;
	String exception_type;
	
}
