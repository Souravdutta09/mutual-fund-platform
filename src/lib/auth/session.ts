import { NextRequest } from 'next/server';
import { authConfig } from './config';
import { JwtPayload } from '@/src/types/auth';

export function getAccessToken(request: NextRequest): string | undefined {
  return request.cookies.get(authConfig.cookies.accessTokenName)?.value;
}

export function getRefreshToken(request: NextRequest): string | undefined {
  return request.cookies.get(authConfig.cookies.refreshTokenName)?.value;
}

export function getUserFromToken(token: string): JwtPayload | null {
  try {
    const { jwt } = require('jsonwebtoken');
    const { authConfig } = require('./config');
    
    return jwt.verify(token, authConfig.jwt.accessTokenSecret) as JwtPayload;
  } catch (error) {
    return null;
  }
}