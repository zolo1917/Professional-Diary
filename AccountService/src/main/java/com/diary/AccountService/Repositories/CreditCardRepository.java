package com.diary.AccountService.Repositories;

import com.diary.AccountService.Entities.CreditCards;
import org.springframework.data.repository.CrudRepository;

public interface CreditCardRepository extends CrudRepository<CreditCards, String> {
}
