package com.diary.AccountService.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "debit_transactions")
@Getter
@Setter
public class DebitTransactions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String transactionId;
    private Date transaction_date;
    private Long amount;
    private String type;
    private String details;
    private String accountId;
    private Boolean isLoan;
    private String loanId;
    private String cardId;
    private Date createdAt;
    private Date updatedAt;
}
