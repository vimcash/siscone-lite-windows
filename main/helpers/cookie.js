import cookie from 'cookie';

export const cookieMiddleware = (req, res, next) => {
  const cookies = req.headers.cookie;
  if (cookies) {
    const parsedCookies = cookie.parse(cookies);
    req.cookies = parsedCookies;
  }
  next();
};