

import { Button, Typography } from '@mui/material';
type Props = {
    isPending: boolean;
}

export default function SignoutButton({ isPending }: Props) {
    return (
        <Button variant="contained" color="primary" type="submit" disabled={isPending}>
            <Typography variant="body1" color={'white'}>{isPending ? 'Logging out...' : 'Logout'}</Typography>
        </Button>)
}
