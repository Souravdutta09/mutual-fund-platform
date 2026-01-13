import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/src/services/auth/auth-service';
import { ApiResponse, RefreshTokenRequest } from '@/src/types';
import { authConfig } from '@/src/lib/auth/config';

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get(authConfig.cookies.refreshTokenName)?.value;
    
    if (!refreshToken) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'REFRESH_TOKEN_MISSING',
            message: 'Refresh token is required',
          },
          timestamp: new Date().toISOString(),
          path: '/api/auth/refresh',
        } as ApiResponse,
        { status: 401 }
      );
    }

    const result = await AuthService.refreshToken({ refreshToken });
    
    const response = NextResponse.json(
      {
        success: true,
        data: result,
        timestamp: new Date().toISOString(),
        path: '/api/auth/refresh',
      } as ApiResponse,
      { status: 200 }
    );

    response.cookies.set({
      name: authConfig.cookies.accessTokenName,
      value: result.accessToken,
      httpOnly: authConfig.cookies.httpOnly,
      secure: authConfig.cookies.secure,
      sameSite: authConfig.cookies.sameSite,
      path: authConfig.cookies.path,
      maxAge: result.expiresIn,
    });

    return response;
  } catch (error) {
    console.error('Token refresh error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'REFRESH_ERROR',
          message: error instanceof Error ? error.message : 'Token refresh failed',
        },
        timestamp: new Date().toISOString(),
        path: '/api/auth/refresh',
      } as ApiResponse,
      { status: 401 }
    );
  }
}