package com.diary.AccountService.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "ACCOUNTS")
@Getter
@Setter
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String acc_id;
    private String acc_number;
    private String acc_provider;
    private String acc_status;
    private String acc_type;
    private Long acc_balance;
    private Date created_at;
    private Date updated_at;
    private String user_id;

}
