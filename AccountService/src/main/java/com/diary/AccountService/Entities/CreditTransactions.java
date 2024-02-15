package com.diary.AccountService.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name = "CreditTranasactionss")
@Getter
@Setter
public class CreditTransactions {
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
