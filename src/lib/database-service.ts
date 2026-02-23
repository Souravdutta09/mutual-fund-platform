import clientPromise from './mongodb';
import { User, Portfolio, Transaction, InvestmentGoal } from './database-types';
import bcrypt from 'bcryptjs';

export class DatabaseService {
  private static async getDB() {
    const client = await clientPromise;
    const db = client.db('mutual_fund_platform');
    return db;
  }

  // User Operations
  static async createUser(userData: Omit<User, '_id' | 'createdAt' | 'updatedAt'>) {
    const db = await this.getDB();
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    const user = {
      ...userData,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await db.collection('users').insertOne(user);
    return { ...user, _id: result.insertedId.toString() };
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    const db = await this.getDB();
    const user = await db.collection('users').findOne({ email });
    return user as User | null;
  }

  static async getUserById(id: string): Promise<User | null> {
    const db = await this.getDB();
    const user = await db.collection('users').findOne({ _id: id });
    return user as User | null;
  }

  static async updateUser(id: string, updateData: Partial<User>) {
    const db = await this.getDB();
    const updateDoc = {
      ...updateData,
      updatedAt: new Date(),
    };
    
    if (updateData.password) {
      updateDoc.password = await bcrypt.hash(updateData.password, 10);
    }
    
    const result = await db.collection('users').updateOne(
      { _id: id },
      { $set: updateDoc }
    );
    return result.modifiedCount > 0;
  }

  static async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  // Portfolio Operations
  static async getUserPortfolio(userId: string): Promise<Portfolio | null> {
    const db = await this.getDB();
    const portfolio = await db.collection('portfolios').findOne({ userId });
    return portfolio as Portfolio | null;
  }

  static async createOrUpdatePortfolio(portfolioData: Omit<Portfolio, '_id' | 'createdAt' | 'updatedAt'>) {
    const db = await this.getDB();
    
    const portfolio = {
      ...portfolioData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await db.collection('portfolios').updateOne(
      { userId: portfolioData.userId },
      { $set: portfolio },
      { upsert: true }
    );
    
    return result.modifiedCount > 0 || result.upsertedCount > 0;
  }

  // Transaction Operations
  static async createTransaction(transactionData: Omit<Transaction, '_id' | 'createdAt'>) {
    const db = await this.getDB();
    
    const transaction = {
      ...transactionData,
      createdAt: new Date(),
    };
    
    const result = await db.collection('transactions').insertOne(transaction);
    return { ...transaction, _id: result.insertedId.toString() };
  }

  static async getUserTransactions(userId: string, limit: number = 50) {
    const db = await this.getDB();
    const transactions = await db
      .collection('transactions')
      .find({ userId })
      .sort({ date: -1 })
      .limit(limit)
      .toArray();
    
    return transactions as Transaction[];
  }

  // Investment Goals Operations
  static async createGoal(goalData: Omit<InvestmentGoal, '_id' | 'createdAt' | 'updatedAt'>) {
    const db = await this.getDB();
    
    const goal = {
      ...goalData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await db.collection('goals').insertOne(goal);
    return { ...goal, _id: result.insertedId.toString() };
  }

  static async getUserGoals(userId: string) {
    const db = await this.getDB();
    const goals = await db.collection('goals').find({ userId }).toArray();
    return goals as InvestmentGoal[];
  }

  static async updateGoal(id: string, updateData: Partial<InvestmentGoal>) {
    const db = await this.getDB();
    const updateDoc = {
      ...updateData,
      updatedAt: new Date(),
    };
    
    const result = await db.collection('goals').updateOne(
      { _id: id },
      { $set: updateDoc }
    );
    return result.modifiedCount > 0;
  }
}
