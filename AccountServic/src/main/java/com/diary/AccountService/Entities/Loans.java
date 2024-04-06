package com.diary.AccountService.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name = "loans")
@Getter
@Setter
public class Loans {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String loanAccountNumber;
    private Long amount;
    private BigInteger term;
    private Long rate;
    private Long currentPrincipleRemaining;
    private Long currentInterestRemaining;
    private Long monthlyEmi;
    private String accountId;
    private String loanStatus;
    private Date createdAt;
    private Date updatedAt;
}
