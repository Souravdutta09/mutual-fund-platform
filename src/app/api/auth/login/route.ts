import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/src/services/auth/auth-service';
import { ApiResponse, LoginRequest } from '@/src/types';
import { authConfig } from '@/src/lib/auth/config';

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();
    
    const { email, password } = body;
    
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Email and password are required',
          },
          timestamp: new Date().toISOString(),
          path: '/api/auth/login',
        } as ApiResponse,
        { status: 400 }
      );
    }

    const result = await AuthService.login(body);
    
    const response = NextResponse.json(
      {
        success: true,
        data: result,
        timestamp: new Date().toISOString(),
        path: '/api/auth/login',
      } as ApiResponse,
      { status: 200 }
    );

    response.cookies.set({
      name: authConfig.cookies.accessTokenName,
      value: result.tokens.accessToken,
      httpOnly: authConfig.cookies.httpOnly,
      secure: authConfig.cookies.secure,
      sameSite: authConfig.cookies.sameSite,
      path: authConfig.cookies.path,
      maxAge: result.tokens.expiresIn,
    });

    response.cookies.set({
      name: authConfig.cookies.refreshTokenName,
      value: result.tokens.refreshToken,
      httpOnly: authConfig.cookies.httpOnly,
      secure: authConfig.cookies.secure,
      sameSite: authConfig.cookies.sameSite,
      path: authConfig.cookies.path,
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'LOGIN_ERROR',
          message: error instanceof Error ? error.message : 'Login failed',
        },
        timestamp: new Date().toISOString(),
        path: '/api/auth/login',
      } as ApiResponse,
      { status: 401 }
    );
  }
}