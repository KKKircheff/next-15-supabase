'use server';

import {Locale, redirect} from '@/utils/next-intl/routing';
import {createClient} from '@/utils/supabase/server';
import {getLocale} from 'next-intl/server';

export const signOut = async () => {
    const supabase = await createClient();
    const locale = (await getLocale()) as Locale;
    let errorMessage = '';

    try {
        const {
            data: {user},
        } = await supabase.auth.getUser();
        if (!user) {
            errorMessage = 'Not a logged user';
        } else {
            const {error} = await supabase.auth.signOut();
            errorMessage = !error
                ? 'Successfuly signed out'
                : 'Can not sign-out user!';
        }
    } catch (error) {
        errorMessage = 'Internal Server Error';
        console.error(error);
    }

    return redirect({
        href: {
            pathname: '/login',
            query: {message: errorMessage},
        },
        locale,
    });
};
