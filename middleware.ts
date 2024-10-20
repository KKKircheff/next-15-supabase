import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'nl'],
    defaultLocale: 'en',
});

export const config = {
    matcher: [
        '/',
        '/(nl|en)/:path*',
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)', // Exclude specific paths and file types
    ],
};
