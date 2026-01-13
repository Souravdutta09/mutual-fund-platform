import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/src/services/auth/auth-service';
import { ApiResponse, RegisterRequest } from '@/src/types';
import { authConfig } from '@/src/lib/auth/config';

export async function POST(request: NextRequest) {
  try {
    const body: RegisterRequest = await request.json();
    
    const { email, password, firstName, lastName, phone } = body;
    
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Missing required fields',
            details: [
              { field: 'email', message: 'Email is required' },
              { field: 'password', message: 'Password is required' },
              { field: 'firstName', message: 'First name is required' },
              { field: 'lastName', message: 'Last name is required' },
            ].filter(detail => 
              !body[detail.field as keyof RegisterRequest]
            ),
          },
          timestamp: new Date().toISOString(),
          path: '/api/auth/register',
        } as ApiResponse,
        { status: 400 }
      );
    }

    const result = await AuthService.register(body);
    
    const response = NextResponse.json(
      {
        success: true,
        data: result,
        timestamp: new Date().toISOString(),
        path: '/api/auth/register',
      } as ApiResponse,
      { status: 201 }
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
    console.error('Registration error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'REGISTRATION_ERROR',
          message: error instanceof Error ? error.message : 'Registration failed',
        },
        timestamp: new Date().toISOString(),
        path: '/api/auth/register',
      } as ApiResponse,
      { status: 400 }
    );
  }
}