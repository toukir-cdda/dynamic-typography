'use client';
import React, { useState } from 'react';
import { createUseStyles, jss } from 'react-jss';
const Page = () => {
    const [selectedFont, setSelectedFont] = useState('RobotoBold');

    const handleFontChange = (event) => {
        setSelectedFont(event.target.value);
    };

    const fontOptions = [
        'RobotoBold',
        'CroissantOne-Regular',
        'Times New Roman',
        'Roboto',
    ]; // Add your font names here

    // jss.createStyleSheet({
    //     '@font-face': [
    //         {
    //             fontFamily: 'RobotoBold',
    //             src: 'url("public/fonts/RobotoBold.ttf")',
    //         },
    //         {
    //             fontFamily: 'CroissantOne-Regular',
    //             src: 'url("/fonts/font2.ttf")',
    //         },
    //         /* Add more @font-face rules for additional fonts */
    //     ],
    //     body: {
    //         fontFamily: (props) =>
    //             props.selectedFont === 'RobotoBold'
    //                 ? 'RobotoBold'
    //                 : props.selectedFont === 'CroissantOne-Regular'
    //                 ? 'CroissantOne-Regular'
    //                 : props.selectedFont,
    //     },
    // }).attach();

    const useStyles = createUseStyles({
        '@font-face': {
            fontFamily: 'RobotoBold',
            src: 'url(../../../public/fonts/Roboto-Bold.ttf) ',
            fallbacks: [
                {
                    src: 'url(../../../public/fonts/Roboto-Bold.ttf) format(truetype)',
                },
            ],
        },
        // {
        //     fontFamily: 'CroissantOne-Regular',
        //     src: 'url("../../../public/fonts/CroissantOne-Regular.ttf") ',
        // },
        // ],
        body: {
            fontFamily: (props) =>
                props.selectedFont === 'RobotoBold'
                    ? 'RobotoBold'
                    : props.selectedFont === 'CroissantOne-Regular'
                    ? 'CroissantOne-Regular'
                    : props.selectedFont,
        },
    });

    const classes = useStyles({ selectedFont });
    console.log(classes);
    return (
        <div>
            <style>{classes['@font-face']}</style>
            <select value={selectedFont} onChange={handleFontChange}>
                {fontOptions.map((font, index) => (
                    <option key={index} value={font}>
                        {font}
                    </option>
                ))}
            </select>
            <div className={classes.body}>
                <p>
                    This is an example text with the selected font:{' '}
                    {selectedFont}
                </p>
            </div>
        </div>
    );
};

export default Page;
