import bcrypt from 'bcryptjs';

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Portfolio {
  _id?: string;
  userId: string;
  funds: Array<{
    fundName: string;
    fundType: string;
    units: number;
    avgCost: number;
    currentNAV: number;
    currentValue: number;
    returns: number;
    returnsPercentage: number;
  }>;
  totalInvestment: number;
  currentValue: number;
  totalReturns: number;
  totalReturnsPercentage: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  _id?: string;
  userId: string;
  fundName: string;
  fundType: string;
  transactionType: 'SIP' | 'LUMPSUM' | 'REDEEM';
  amount: number;
  units: number;
  nav: number;
  date: Date;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt: Date;
}

export interface InvestmentGoal {
  _id?: string;
  userId: string;
  goalName: string;
  targetAmount: number;
  currentAmount: number;
  monthlyContribution: number;
  targetDate: Date;
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED';
  createdAt: Date;
  updatedAt: Date;
}
