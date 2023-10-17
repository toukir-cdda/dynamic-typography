'use client';
import preset from 'jss-preset-default';
import { create } from 'jss';
import useGetDeviceBreakpoints from '@/hooks/useGetDeviceBreakpoints';
import TestComponent from '@/components/TestComponent';
import { useEffect, useRef } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

const Page = () => {
    const jss = create();
    jss.setup(preset());

    // const deviceBreakpoints = useGetDeviceBreakpoints();
    // const [width, height] = useWindowSize();
    const width = 700;
    const sheet = jss.createStyleSheet(
        {
            container: {
                height: '100vh',
                width: '100vw',
            },
            nav_container: {
                // backgroundColor: nav_container.nav_container.backgroundColor,
                height: '80px',
                [`@media (min-width: ${width}px)`]: {
                    backgroundColor: 'red',
                },
            },
            main_section: {
                display: 'flex',
                height: 'calc(100vh - 80px)',
            },

            side_container: {
                backgroundColor: 'green',
                width: '240px',
            },
            main_container: {
                backgroundColor: 'darkgray',
                width: 'calc(100vw - 240px)',
            },
        },
        { link: true }
    );

    // if (deviceBreakpoints.xl || deviceBreakpoints.lg) {
    //     //large
    //     sheet.addRules({
    //         container: {
    //             height: '100vh',
    //             width: '100vw',
    //         },
    //         nav_container: {
    //             // backgroundColor: nav_container.nav_container.backgroundColor,
    //             height: '80px',
    //             [`@media (min-width: ${width}px)`]: {
    //                 backgroundColor: 'red',
    //             },
    //         },
    //         main_section: {
    //             display: 'flex',
    //             height: 'calc(100vh - 80px)',
    //         },

    //         side_container: {
    //             backgroundColor: 'green',
    //             width: '240px',
    //         },
    //         main_container: {
    //             backgroundColor: 'darkgray',
    //             width: 'calc(100vw - 240px)',
    //         },
    //     });

    //     //update rule
    //     sheet.update({
    //         nav_container: {
    //             backgroundColor: 'black',
    //         },
    //     });
    // }

    // if (deviceBreakpoints.xs || deviceBreakpoints.sm || deviceBreakpoints.md) {
    //     //small midium
    //     sheet.addRules({
    //         container: {
    //             height: '100vh',
    //             width: '100vw',
    //         },
    //         nav_container: {
    //             backgroundColor: 'blue',
    //             height: '80px',
    //         },
    //         main_section: {
    //             display: 'flex',
    //             flexDirection: 'column',
    //             height: 'calc(100vh - 80px)',
    //         },
    //         side_container: {
    //             backgroundColor: 'green',
    //             width: '100%',
    //             height: '60px',
    //             order: '2',
    //         },
    //         main_container: {
    //             backgroundColor: 'darkgray',
    //             width: '100%',
    //             height: 'calc(100vh - 140px)',
    //             order: '1',
    //         },
    //     });
    // }

    const { classes } = sheet.attach();

    return (
        <div className={classes.container}>
            <nav className={classes.nav_container}>nav</nav>
            <section className={classes.main_section}>
                <aside className={classes.side_container}>side</aside>
                <main className={classes.main_container}>
                    <TestComponent />
                </main>
            </section>
        </div>
    );
};

export default Page;
