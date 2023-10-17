// import React, { useEffect, useState } from 'react';

// const useGetDeviceBreakpoints = () => {
//     const [deviceBreakpoints, setDeviceBreakpoints] = useState({});
//     useEffect(() => {
//         function getDeviceBreakpoints() {
//             const breakpoints = {
//                 xs: '(max-width: 575px)',
//                 sm: '(min-width: 576px) and (max-width: 767px)',
//                 md: '(min-width: 768px) and (max-width: 991px)',
//                 lg: '(min-width: 992px) and (max-width: 1199px)',
//                 xl: '(min-width: 1200px)',
//             };

//             const deviceBreakpoints = {};

//             const updateDeviceBreakpoints = () => {
//                 Object.keys(breakpoints).forEach((key) => {
//                     const mediaQuery = window.matchMedia(breakpoints[key]);
//                     deviceBreakpoints[key] = mediaQuery.matches;
//                 });
//                 setDeviceBreakpoints(deviceBreakpoints);
//             };

//             updateDeviceBreakpoints();

//             window.addEventListener('resize', updateDeviceBreakpoints);

//             return () => {
//                 window.removeEventListener('resize', updateDeviceBreakpoints);
//             };
//         }

//         getDeviceBreakpoints();
//     }, []);
//     return deviceBreakpoints;
// };

// export default useGetDeviceBreakpoints;

import React, { useEffect, useState } from 'react';

const useGetDeviceBreakpoints = () => {
    const [deviceBreakpoints, setDeviceBreakpoints] = useState({});

    useEffect(() => {
        const breakpoints = {
            xs: '(max-width: 575px)',
            sm: '(min-width: 576px) and (max-width: 767px)',
            md: '(min-width: 768px) and (max-width: 991px)',
            lg: '(min-width: 992px) and (max-width: 1199px)',
            xl: '(min-width: 1200px)',
        };

        let debounceTimer;

        const updateDeviceBreakpoints = () => {
            clearTimeout(debounceTimer);

            debounceTimer = setTimeout(() => {
                const updatedDeviceBreakpoints = {};
                Object.keys(breakpoints).forEach((key) => {
                    const mediaQuery = window.matchMedia(breakpoints[key]);
                    updatedDeviceBreakpoints[key] = mediaQuery.matches;
                });
                setDeviceBreakpoints(updatedDeviceBreakpoints);
            }, 100);
        };

        updateDeviceBreakpoints();

        window.addEventListener('resize', updateDeviceBreakpoints);

        return () => {
            window.removeEventListener('resize', updateDeviceBreakpoints);
            clearTimeout(debounceTimer);
        };
    }, []);

    return deviceBreakpoints;
};

export default useGetDeviceBreakpoints;
