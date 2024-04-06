package com.diary.AccountService.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "credit_cards")
@Getter
@Setter
public class CreditCards {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String cardNumber;
    private String cardProvider;
    private Long cardLimit;
    private Long cardCashLimit;
    private String userId;
    private String cardStatus;
    private Date cardExpiration;
    private Date createdAt;
    private Date updatedAt;
}
