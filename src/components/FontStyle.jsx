import { TyphographyDrawerContext } from '@/context/typographyDrawer.context';
import React, { useContext, useEffect, useState } from 'react';

const FontStyle = () => {
    const { state, dispatch } = useContext(TyphographyDrawerContext);
    const [fontStyle, setFontStyle] = useState('');
    useEffect(() => {
        dispatch({
            type: 'SET_FONT_STYLE',
            payload: fontStyle,
        });
    }, [fontStyle]);
    return (
        <div className="flex justify-between gap-4">
            <label htmlFor="" className="text-gray-500">
                Style
            </label>
            <select
                name=""
                id=""
                className="rounded-md px-2 outline-none text-gray-500 py-1"
                onChange={(e) => setFontStyle(e.target.value)}
            >
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
            </select>
        </div>
    );
};

export default FontStyle;
