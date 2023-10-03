import { TyphographyDrawerContext } from '@/context/typographyDrawer.context';
import React, { useContext, useEffect, useState } from 'react';

const FontFamily = () => {
    const { state, dispatch } = useContext(TyphographyDrawerContext);
    const fontNames = [
        { fontName: 'Roboto', value: '"Roboto", sans-serif' },
        { fontName: 'Roboto Slab', value: '"Roboto Slab", serif' },
        { fontName: 'Lato', value: '"Lato", sans-serif' },
        { fontName: 'Poppins', value: '"Poppins", sans-serif' },
        { fontName: 'Pixelify Sans', value: '"Pixelify Sans", cursive' },
        { fontName: 'Young Serif', value: '"Young Serif", serif' },
    ];

    const [fontFamily, setFontFamily] = useState('"Roboto", sans-serif');

    useEffect(() => {
        dispatch({
            type: 'SET_FONT_FAMILY',
            payload: fontFamily,
        });
    }, [fontFamily]);

    return (
        <div className="flex justify-between gap-4">
            <label htmlFor="" className="text-gray-500">
                Font Family
            </label>
            <select
                name=""
                id=""
                className="rounded-md px-2 outline-none text-gray-500 py-1 "
                onChange={(e) => setFontFamily(e.target.value)}
            >
                {fontNames.map((font, index) => (
                    <option key={index} value={font.value}>
                        {font.fontName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FontFamily;
