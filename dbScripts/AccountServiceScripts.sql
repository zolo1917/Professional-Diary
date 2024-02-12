-- setting up the required enums
CREATE TYPE "account_type" AS ENUM (
  'savings',
  'current',
  'loan',
  'other'
);

CREATE TYPE "credit_type" AS ENUM (
  'employmentIncome',
  'selfEmploymentIncome',
  'investmentIncome',
  'RentalIncome',
  'CommisionBasedIncome',
  'PassiveIncome',
  'refund',
  'capitalGains',
  'other'
);

CREATE TYPE "debit_type" AS ENUM (
  'rent',
  'travel',
  'techItems',
  'food',
  'utilities',
  'healthAndMedical',
  'LoanPayments',
  'education',
  'clothingAndAccessories',
  'Charity',
  'investment',
  'Other'
);

CREATE TYPE "status" AS ENUM (
  'active',
  'inactive'
);
-- The user data for this table will not have a direct link to the table since it will be fetched from a no sequal database
drop table if exists "Accounts";
CREATE TABLE "Accounts" (
  "acc_id" varchar primary key,
  "acc_number" varchar,
  "acc_provider" varchar,
  "acc_status" status,
  "acc_type" varchar,
  "acc_balance" DOUBLE PRECISION,
  "created_at" timestamp default NOW(),
  "updated_at" timestamp,
  "user_id" varchar
);

drop table if exists "credit_cards";
CREATE TABLE "credit_cards" (
  "id" varchar primary key,
  "card_number" varchar,
  "card_provider" varchar,
  "card_limit" varchar,
  "card_cash_limit" varchar,
  "user_id" varchar,
  "card_status" status,
  "card_expiration" date,
  "created_at" timestamp default NOW(),
  "updated_at" timestamp
);


drop table if exists "Loans";
CREATE TABLE "Loans" (
  "id" varchar primary key,
  "loan_account_num" varchar,
  "amount" DOUBLE PRECISION,
  "term" BigInt,
  "interest" Integer,
  "current_principle_remaining" DOUBLE PRECISION,
  "current_interest_remaining" DOUBLE PRECISION,
  "monthly_emi" DOUBLE PRECISION,
  "account_id" varchar,
  "loan_status" status,
  "created_at" timestamp default NOW(),
  "updated_at" timestamp
);

drop table if exists "credit_transactions";
CREATE TABLE "credit_transactions" (
  "id" varchar primary key,
  "transaction_id" varchar,
  "transaction_date" timestamp default NOW(),
  "amount" DOUBLE PRECISION,
  "type" varchar,
  "details" text,
  "account_id" varchar,
  "is_loan" boolean,
  "loan_id" varchar,
  "card_id" varchar,
  "created_at" timestamp default NOW(),
  "updated_at" timestamp
);

drop table if exists "debit_transactions";
CREATE TABLE "debit_transactions" (
  "id" varchar primary key,
  "transaction_id" varchar,
  "transaction_date" timestamp default NOW(),
  "amount" DOUBLE PRECISION,
  "type" varchar,
  "details" text,
  "account_id" varchar,
  "is_loan" boolean,
  "loan_id" varchar,
  "card_id" varchar,
  "created_at" timestamp default NOW(),
  "updated_at" timestamp
);

ALTER TABLE "credit_transactions" ADD constraint "fk_credit_account" FOREIGN KEY ("account_id") REFERENCES "Accounts" ("acc_id");

ALTER TABLE "credit_transactions" ADD constraint "fk_credit_card"FOREIGN KEY ("card_id") REFERENCES "credit_cards" ("id");

ALTER TABLE "debit_transactions" ADD constraint "fk_debit_account" FOREIGN KEY ("account_id") REFERENCES "Accounts" ("acc_id");

ALTER TABLE "debit_transactions" ADD constraint "fk_debit_cards" FOREIGN KEY ("card_id") REFERENCES "credit_cards" ("id");

ALTER TABLE "Loans" ADD constraint "fk_loans_account" FOREIGN KEY ("account_id") REFERENCES "Accounts" ("acc_id");

ALTER TABLE "credit_transactions" add constraint "fk_credit_loans" FOREIGN KEY ("loan_id") REFERENCES "Loans" ("id");

ALTER TABLE "debit_transactions" ADD constraint "fk_debit_loans " FOREIGN KEY ("loan_id") REFERENCES "Loans" ("id");