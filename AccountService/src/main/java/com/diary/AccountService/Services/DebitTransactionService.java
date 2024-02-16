package com.diary.AccountService.Services;

import com.diary.AccountService.Entities.DebitTransactions;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DebitTransactionService {
    public List getTransactions () {
        // create debit transactions
        return null;
    }

    public DebitTransactions getDebitTransactionById(String id) {
        return  new DebitTransactions();
    }

    public List<DebitTransactions> getTransactionsForAccount(String accountNumber){
        return null;
    }
    public String createDebit () {
        // TODO: update this impl
        return null;
    }

    public String updateDebitDetails () {
        //TODO: update this impleemntation
        return null;
    }
}
