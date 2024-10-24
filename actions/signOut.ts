'use server';

import {Locale, redirect} from '@/utils/next-intl/routing';
import {createClient} from '@/utils/supabase/server';
import {getLocale} from 'next-intl/server';

export const signOut = async () => {
    const supabase = await createClient();
    const locale = (await getLocale()) as Locale;
    let errorMessage = '';

    const {data: user, error} = await supabase.auth.getUser();

    if (error) {
        errorMessage = error.message;
    } else {
        const {error} = await supabase.auth.signOut();
        errorMessage = !error
            ? 'Successfuly signed out'
            : 'Can not sign-out user!';
    }

    errorMessage = 'Internal Server Error';

    return redirect({
        href: {
            pathname: '/login',
            query: {message: errorMessage},
        },
        locale,
    });
};
