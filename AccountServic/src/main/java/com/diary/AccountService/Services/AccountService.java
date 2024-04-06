package com.diary.AccountService.Services;

import com.diary.AccountService.Entities.Account;
import com.diary.AccountService.Repositories.AccountRepository;
import com.diary.AccountService.RequestObjects.AccountReqObj;
import com.diary.AccountService.ResponseObjects.AccountRespObj;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ModelMapper mapper;

    public AccountRespObj getAccountDetails(String accountId){
        Optional<Account> obj = accountRepository.findById(accountId);
        if(obj.isPresent()){
            return this.mapper.map(obj.get(), AccountRespObj.class);
        }
        System.out.println(obj);
        return null;
    }

    public String createNewAccount(AccountReqObj accReq){
        Account accountDetails = this.mapper.map(accReq, Account.class);
        if (accountDetails != null){
            accountRepository.save(accountDetails);
        }
        return "Account is saved";
    }

    public String updateAccount(AccountReqObj accReq){
        Account obj = this.mapper.map(accReq, Account.class);
        this.accountRepository.save(obj);
        return "Account is saved";
    }

    public String deleteAccount(String accountId){
        accountRepository.deleteById(accountId);
        return "Account Deleted";
    }
}
