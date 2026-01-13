export const authConfig = {
  jwt: {
    accessTokenSecret: process.env.JWT_ACCESS_SECRET || 'fallback-access-secret-change-in-production',
    refreshTokenSecret: process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret-change-in-production',
    accessTokenExpiry: '15m',
    refreshTokenExpiry: '7d',
  },
  cookies: {
    accessTokenName: 'access_token',
    refreshTokenName: 'refresh_token',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict' as const,
    path: '/',
  },
  bcrypt: {
    saltRounds: 12,
  },
};