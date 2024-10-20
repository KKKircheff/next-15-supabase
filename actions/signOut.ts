'use server';

import {Locale, Pathnames, redirect} from '@/utils/next-intl/routing';
import {createClient} from '@/utils/supabase/server';
import {getLocale} from 'next-intl/server';

export const signOut = async () => {
    const supabase = await createClient();
    const locale = (await getLocale()) as Locale;
    await supabase.auth.signOut();

    // Assuming `href` is valid, and you can pass `query` with it
    // return redirect({
    //     href, // e.g., '/sign-up'
    //     locale,
    //     query: {message: message || 'Error when creating user'},
    // } as any);
};
