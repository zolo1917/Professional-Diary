package com.diary.AccountService.Repositories;

import com.diary.AccountService.Entities.Account;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, String> {
}
