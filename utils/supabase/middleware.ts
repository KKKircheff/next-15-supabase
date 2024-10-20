import {createServerClient} from '@supabase/ssr';
import {NextResponse, type NextRequest} from 'next/server';
import {redirect} from '../next-intl/routing';
import {getLocale} from 'next-intl/server';

export async function updateSession(request: NextRequest) {
    console.log('----- 1 -----');
    let supabaseResponse = NextResponse.next({
        request,
    });

    console.log('----- 2 before -----');

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({name, value, options}) =>
                        request.cookies.set(name, value)
                    );
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({name, value, options}) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // IMPORTANT: Avoid writing any logic between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    console.log('----- 3 after -----');
    const {
        data: {user},
    } = await supabase.auth.getUser();

    // the list of unprotected routes
    const locale = await getLocale();
    const pathnameWithoutLocale = request.nextUrl.pathname.replace(
        `/${locale}`,
        ''
    );

    if (
        !user &&
        !pathnameWithoutLocale.startsWith('/') &&
        !pathnameWithoutLocale.startsWith('/login') &&
        !pathnameWithoutLocale.startsWith('/sign-up') &&
        !pathnameWithoutLocale.startsWith('/auth')
    ) {
        return redirect({
            href: {
                pathname: `/login`,
            },
            locale,
        });
    }

    // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
    // creating a new response object with NextResponse.next() make sure to:
    // 1. Pass the request in it, like so:
    //    const myNewResponse = NextResponse.next({ request })
    // 2. Copy over the cookies, like so:
    //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
    // 3. Change the myNewResponse object to fit your needs, but avoid changing
    //    the cookies!
    // 4. Finally:
    //    return myNewResponse
    // If this is not done, you may be causing the browser and server to go out
    // of sync and terminate the user's session prematurely!

    return supabaseResponse;
}
