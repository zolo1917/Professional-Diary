import { DataTypes, Model } from "sequelize";
import { sequalizeInstance } from "../config/dbconfig";

const Accounts = sequalizeInstance.define("accounts", {
  accId: {
    type: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
  },
  acc_number: {
    type: DataTypes.STRING,
  },
  acc_provider: {
    type: DataTypes.STRING,
  },
  acc_status: {
    type: DataTypes.STRING,
  },
  acc_type: {
    type: DataTypes.STRING,
  },
  acc_balance: {
    type: DataTypes.DOUBLE,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  user_id: {
    type: DataTypes.UUIDV4,
  },
});

export default Accounts;
