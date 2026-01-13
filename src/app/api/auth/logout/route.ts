import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/src/services/auth/auth-service';
import { ApiResponse } from '@/src/types';
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
          path: '/api/auth/logout',
        } as ApiResponse,
        { status: 401 }
      );
    }

    await AuthService.logout(refreshToken);
    
    const response = NextResponse.json(
      {
        success: true,
        message: 'Logged out successfully',
        timestamp: new Date().toISOString(),
        path: '/api/auth/logout',
      } as ApiResponse,
      { status: 200 }
    );

    response.cookies.delete(authConfig.cookies.accessTokenName);
    response.cookies.delete(authConfig.cookies.refreshTokenName);

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'LOGOUT_ERROR',
          message: error instanceof Error ? error.message : 'Logout failed',
        },
        timestamp: new Date().toISOString(),
        path: '/api/auth/logout',
      } as ApiResponse,
      { status: 400 }
    );
  }
}