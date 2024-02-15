package com.diary.AccountService.Services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CreditTransactionService {
    public void createCreditTransactions(){
//         TODO: Create the menthod
    }
    public List getCreditTransactions (String accountNumber) {
        return new ArrayList();
    }
//    TODO: Update datatype for the below method
    public String getTransactiosnById(String creditId){
        return "null";
    }
    // NOTE: this implementation will be a soft delete of the transactions and not completely delete the transaction
    public String deleteTransaction (String creditId){
        return "null";
    }
}
