package com.diary.AccountService.Repositories;

import com.diary.AccountService.Entities.DebitTransactions;
import org.springframework.data.repository.CrudRepository;

public interface DebitRepository extends CrudRepository<DebitTransactions, String> {
}
