import {updateSession} from '@/utils/supabase/middleware';
import {type NextRequest} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from './utils/next-intl/routing';

const handleI18nRouting = createMiddleware(routing);

export async function middleware(request: NextRequest) {
    const response = handleI18nRouting(request);

    // A `response` can now be passed here
    return await updateSession(request, response);
}

// export async function middleware(request: NextRequest) {
//     return await updateSession(request);
// }

export const config = {
    matcher: [
        '/',
        '/(nl|en)/:path*',
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)', // Exclude specific paths and file types
    ],
};
