import {createServerClient} from '@supabase/ssr';
import {NextResponse, type NextRequest} from 'next/server';
import {routing} from '../next-intl/routing';
import allUnprotectedRoutes from './unprotectedRoutes';

export async function updateSession(
    request: NextRequest,
    response: NextResponse
) {
    try {
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return request.cookies.getAll();
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({name, value}) =>
                            request.cookies.set(name, value)
                        );
                        cookiesToSet.forEach(({name, value, options}) =>
                            response.cookies.set(name, value, options)
                        );
                    },
                },
            }
        );

        const user = await supabase.auth.getUser();

        const {pathname} = request.nextUrl;
        const currentLocale = request.cookies.get('NEXT_LOCALE')?.value;

        const isUnprotectedRoute = allUnprotectedRoutes.includes(pathname);

        if (isUnprotectedRoute) return response;

        if (user.error && !isUnprotectedRoute) {
            const redirectUrl = currentLocale
                ? `/${currentLocale}/login`
                : '/login';
            return NextResponse.redirect(new URL(redirectUrl, request.url));
        }

        return response;
    } catch (e) {
        // If you are here, a Supabase client could not be created!
        // This is likely because you have not set up environment variables.
        // Check out http://localhost:3000 for Next Steps.
        return NextResponse.next({
            request: {
                headers: request.headers,
            },
        });
    }
}
