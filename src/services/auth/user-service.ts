import pool from '@/src/lib/db/connection';
import { User, RegisterRequest } from '@/src/types/auth';

export class UserService {
  static async create(userData: RegisterRequest): Promise<User> {
    const { email, password, firstName, lastName, phone } = userData;
    
    const query = `
      INSERT INTO users (email, password_hash, first_name, last_name, phone, role, status)
      VALUES ($1, $2, $3, $4, $5, 'user', 'active')
      RETURNING id, email, first_name, last_name, phone, role, status, created_at, updated_at
    `;
    
    const values = [email, password, firstName, lastName, phone];
    const result = await pool.query(query, values);
    
    return this.mapRowToUser(result.rows[0]);
  }

  static async findByEmail(email: string): Promise<User | null> {
    const query = `
      SELECT id, email, first_name, last_name, phone, role, status, created_at, updated_at
      FROM users
      WHERE email = $1 AND status = 'active'
    `;
    
    const result = await pool.query(query, [email]);
    
    return result.rows[0] ? this.mapRowToUser(result.rows[0]) : null;
  }

  static async findById(id: string): Promise<User | null> {
    const query = `
      SELECT id, email, first_name, last_name, phone, role, status, created_at, updated_at
      FROM users
      WHERE id = $1 AND status = 'active'
    `;
    
    const result = await pool.query(query, [id]);
    
    return result.rows[0] ? this.mapRowToUser(result.rows[0]) : null;
  }

  static async updateLastLogin(id: string): Promise<void> {
    const query = `
      UPDATE users
      SET last_login_at = CURRENT_TIMESTAMP
      WHERE id = $1
    `;
    
    await pool.query(query, [id]);
  }

  private static mapRowToUser(row: any): User {
    return {
      id: row.id,
      email: row.email,
      firstName: row.first_name,
      lastName: row.last_name,
      phone: row.phone,
      role: row.role,
      status: row.status,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }
}