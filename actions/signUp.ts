import {redirect} from '@/utils/next-intl/routing';
import {createClient} from '@/utils/supabase/server';
import {getLocale} from 'next-intl/server';
import {headers} from 'next/headers';

export const signUp = async (formData: FormData) => {
    'use server';
    const signUpHeaders = await headers();
    const locale = await getLocale();

    const origin = signUpHeaders.get('origin');
    const data = formData;

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
        console.log(error);
        return redirect({
            href: {
                pathname: '/sign-up',
                query: {'message': 'Error when creating user'},
            },
            locale,
        });
    }
    return redirect({
        href: {
            pathname: '/login',
            query: {'message': 'You can log in now with your new credentials'},
        },
        locale,
    });
};
