'use server';

import {redirect} from '@/utils/next-intl/routing';
import {createClient} from '@/utils/supabase/server';

export const signOut = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect('/');
};
