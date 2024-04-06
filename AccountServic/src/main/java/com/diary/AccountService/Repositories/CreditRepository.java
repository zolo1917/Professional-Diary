package com.diary.AccountService.Repositories;

import com.diary.AccountService.Entities.CreditTransactions;
import org.springframework.data.repository.CrudRepository;

public interface CreditRepository extends CrudRepository<CreditTransactions, String> {
}
