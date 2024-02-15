package com.diary.AccountService.Repositories;

import com.diary.AccountService.Entities.Loans;
import org.springframework.data.repository.CrudRepository;

public interface LoanRepository extends CrudRepository<Loans, String> {
}
