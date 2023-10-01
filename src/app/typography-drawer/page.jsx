import TypographyDrawer from '@/components/TypographyDrawer';
import { TyphographyDrawerProvider } from '@/context/typographyDrawer.context';
import React from 'react';

const Page = () => {
    return (
        <div className="flex justify-center items-center ">
            <TyphographyDrawerProvider>
                <TypographyDrawer />
            </TyphographyDrawerProvider>
        </div>
    );
};

export default Page;
