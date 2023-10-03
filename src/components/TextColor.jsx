import { TyphographyDrawerContext } from '@/context/typographyDrawer.context';
import React, { useContext, useEffect, useState } from 'react';

const TextColor = () => {
    const { state, dispatch } = useContext(TyphographyDrawerContext);
    const [textColor, setTextColor] = useState('#000000');
    const handleChange = (e) => {
        setTextColor(e.target.value);
    };

    useEffect(() => {
        dispatch({
            type: 'SET_TEXT_COLOR',
            payload: textColor,
        });
    }, [textColor]);

    return (
        <div className="flex flex-col">
            <label className="text-gray-500">Text Color</label>
            <div className="flex items-center gap-2  ">
                <div className="w-10/12">
                    <input
                        className="w-10 h-10 rounded-full"
                        type="color"
                        value={textColor}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex justify-between gap-4">
                    <input
                        type="text"
                        name=""
                        value={textColor}
                        className="rounded-md px-2 outline-none text-gray-500 py-1"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};
export default TextColor;
