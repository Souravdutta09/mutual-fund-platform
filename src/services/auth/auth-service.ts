import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authConfig } from '@/src/lib/auth/config';
import { UserService } from '@/src/services/auth/user-service';
import { User, LoginRequest, RegisterRequest, AuthResponse, JwtPayload, RefreshTokenRequest } from '@/src/types/auth';
import pool from '@/src/lib/db/connection';

export class AuthService {
  static async register(userData: RegisterRequest): Promise<AuthResponse> {
    const { email, password } = userData;
    
    const existingUser = await UserService.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, authConfig.bcrypt.saltRounds);
    
    const user = await UserService.create({
      ...userData,
      password: hashedPassword,
    });

    const tokens = await this.generateTokens(user);
    
    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
        status: user.status,
      },
      tokens,
    };
  }

  static async login(credentials: LoginRequest): Promise<AuthResponse> {
    const { email, password } = credentials;
    
    const user = await UserService.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const query = 'SELECT password_hash FROM users WHERE id = $1';
    const result = await pool.query(query, [user.id]);
    const passwordHash = result.rows[0]?.password_hash;
    
    if (!passwordHash || !(await bcrypt.compare(password, passwordHash))) {
      throw new Error('Invalid credentials');
    }

    await UserService.updateLastLogin(user.id);
    const tokens = await this.generateTokens(user);
    
    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
        status: user.status,
      },
      tokens,
    };
  }

  static async refreshToken(request: RefreshTokenRequest): Promise<{ accessToken: string; expiresIn: number }> {
    const { refreshToken } = request;
    
    try {
      const payload = jwt.verify(refreshToken, authConfig.jwt.refreshTokenSecret) as JwtPayload;
      
      if (payload.type !== 'refresh') {
        throw new Error('Invalid token type');
      }

      const user = await UserService.findById(payload.userId);
      if (!user) {
        throw new Error('User not found');
      }

      const accessToken = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          role: user.role,
          type: 'access' as const,
        },
        authConfig.jwt.accessTokenSecret,
        { expiresIn: authConfig.jwt.accessTokenExpiry }
      );

      return {
        accessToken,
        expiresIn: 15 * 60, // 15 minutes in seconds
      };
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  static async logout(refreshToken: string): Promise<void> {
    try {
      jwt.verify(refreshToken, authConfig.jwt.refreshTokenSecret);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  private static async generateTokens(user: User): Promise<{ accessToken: string; refreshToken: string; expiresIn: number }> {
    const accessToken = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
        type: 'access' as const,
      },
      authConfig.jwt.accessTokenSecret,
      { expiresIn: authConfig.jwt.accessTokenExpiry }
    );

    const refreshToken = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
        type: 'refresh' as const,
      },
      authConfig.jwt.refreshTokenSecret,
      { expiresIn: authConfig.jwt.refreshTokenExpiry }
    );

    return {
      accessToken,
      refreshToken,
      expiresIn: 15 * 60, // 15 minutes in seconds
    };
  }

  static verifyAccessToken(token: string): JwtPayload {
    try {
      return jwt.verify(token, authConfig.jwt.accessTokenSecret) as JwtPayload;
    } catch (error) {
      throw new Error('Invalid access token');
    }
  }
}