package com.diary.AccountService.Controller;

import com.diary.AccountService.RequestObjects.AccountReqObj;
import com.diary.AccountService.ResponseObjects.AccountRespObj;
import com.diary.AccountService.Services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping("/")
    public String getAllAccounts(){
        return "This is a test values";
    }
    @GetMapping("/{id}")
    public @ResponseBody AccountRespObj getAccountDetails(@PathVariable String id) {
        return accountService.getAccountDetails(id);
    }

    @PostMapping("/")
    public String createAccount(@RequestBody AccountReqObj req){
        return accountService.createNewAccount(req);
    }

    @PutMapping("/{id}")
    public String updateAccount(@PathVariable String id, @RequestBody AccountReqObj accountReqObj){
        return accountService.updateAccount(accountReqObj);
    }

    @DeleteMapping("/{id}")
    public String deleteAccount(@PathVariable String id){
        return accountService.deleteAccount(id);
    }
}
