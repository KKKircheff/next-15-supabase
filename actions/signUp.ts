'use server';
import {redirect} from '@/utils/next-intl/routing';
import {createClient} from '@/utils/supabase/server';
import {getLocale} from 'next-intl/server';
import {headers} from 'next/headers';

export const signUp = async (_: null, formData: FormData) => {
    const signUpHeaders = await headers();
    const locale = await getLocale();

    const origin = signUpHeaders.get('origin');

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = await createClient();

    const {error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        return redirect({
            href: {
                pathname: '/sign-up',
                query: {'message': 'Sign up error! '},
            },
            locale,
        });
    }

    return redirect({
        href: {
            pathname: '/protected',
        },
        locale,
    });
};
