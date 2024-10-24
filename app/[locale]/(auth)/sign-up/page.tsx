import { SignupForm } from '@/components/forms/Signup.form';
import { Stack } from '@mui/material';
import 'server-only'


export default async function SignUp(
    props: {
        searchParams: Promise<{ message: string }>;
    }
) {
    const searchParams = await props.searchParams;

    return (
        <Stack justifyContent={'center'} alignItems={'center'} minHeight={'100vh'} sx={{ flexFlow: 'row nowrap' }}>
            <SignupForm message={searchParams.message} />
        </Stack>
    );
}