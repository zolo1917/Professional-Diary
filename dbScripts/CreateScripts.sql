CREATE TYPE "status" AS ENUM (
  'active',
  'inactive'
);

CREATE TYPE "task_status" AS ENUM (
  'todo',
  'inProgress',
  'inReview',
  'Testing',
  'Deployed',
  'Done'
);

CREATE TYPE "change_type" AS ENUM (
  'status_change',
  'created',
  'deleted',
  'description_updated',
  'name_updated',
  'task_created'
);

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

CREATE TABLE "Users" (
  "id" varchar,
  "user_handle" varchar,
  "hashed_password" varchar,
  "email" email,
  "alternate_email" email,
  "status" status,
  "DOB" timestamp,
  "created_at" dateTime,
  "updated_at" dateTime,
  "last_logged_in" dateTime
);

CREATE TABLE "Tasks" (
  "id" varchar,
  "name" varchar,
  "description" varchar,
  "status" task_status,
  "due_date" varchar,
  "user_id" varchar,
  "project_id" varchar,
  "isComplete" boolean,
  "isDeleted" boolean,
  "created_at" dateTime,
  "updated_at" dateTime
);

CREATE TABLE "Projects" (
  "id" varchar,
  "name" varchar,
  "description" varchar,
  "status" enum,
  "user_id" varchar,
  "created_at" dateTime,
  "updated_at" dateTime,
  "isDeleted" boolean
);

CREATE TABLE "Project_log" (
  "id" varchar,
  "project_id" varchar,
  "change_type" change_type,
  "description" varchar,
  "change_date" dateTime,
  "created_at" dateTime
);



ALTER TABLE "Accounts" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "credit_cards" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "Tasks" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "Projects" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "Project_log" ADD FOREIGN KEY ("project_id") REFERENCES "Projects" ("id");

ALTER TABLE "Tasks" ADD FOREIGN KEY ("project_id") REFERENCES "Projects" ("id");