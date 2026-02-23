import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Portfolio {
  _id?: ObjectId;
  userId: ObjectId;
  totalInvestment: number;
  currentValue: number;
  returns: number;
  returnsPercentage: number;
  holdings: Holding[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Holding {
  fundId: string;
  fundName: string;
  units: number;
  averageCost: number;
  currentValue: number;
  returns: number;
  returnsPercentage: number;
}

export interface Transaction {
  _id?: ObjectId;
  userId: ObjectId;
  fundId: string;
  fundName: string;
  type: 'SIP' | 'LUMPSUM' | 'REDEEM';
  amount: number;
  units?: number;
  nav?: number;
  date: Date;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt?: Date;
}

export interface InvestmentGoal {
  _id?: ObjectId;
  userId: ObjectId;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  category: 'RETIREMENT' | 'EDUCATION' | 'HOUSE' | 'CAR' | 'TRAVEL' | 'OTHER';
  monthlyContribution: number;
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED';
  createdAt?: Date;
  updatedAt?: Date;
}
