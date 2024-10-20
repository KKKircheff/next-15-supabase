'use server';

import {redirect} from '@/utils/next-intl/routing';
import {createClient} from '@/utils/supabase/server';
import {getLocale} from 'next-intl/server';

export const signIn = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = await createClient();
    const locale = await getLocale();

    const {error} = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        message: 'Could not authenticate user';
        return redirect({
            href: {
                pathname: '/login',
                query: {'message': 'Could not authenticate user'},
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
