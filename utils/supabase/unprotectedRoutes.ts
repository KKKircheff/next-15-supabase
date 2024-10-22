import {routing} from '../next-intl/routing';

const publicRoutes = ['/', '/login', '/sign-up'];
const {locales} = routing;

const allUnprotectedRoutes = locales.flatMap((locale) => {
    return publicRoutes.map((route) => {
        if (route === '/') {
            return `/${locale}`;
        } else {
            return `/${locale}${route}`;
        }
    });
});

allUnprotectedRoutes.push(...publicRoutes);
export default allUnprotectedRoutes;
