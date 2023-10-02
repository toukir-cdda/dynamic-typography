import { TyphographyDrawerContext } from '@/context/typographyDrawer.context';
import React, { useContext, useEffect, useState } from 'react';

const TextTransform = () => {
    const { state, dispatch } = useContext(TyphographyDrawerContext);
    const [textTransform, setTextTransform] = useState('');

    useEffect(() => {
        dispatch({
            type: 'SET_TEXT_TRANSFROM',
            payload: textTransform,
        });
    }, [textTransform]);
    return (
        <div className="flex justify-between gap-4">
            <label htmlFor="" className="text-gray-500">
                Transform
            </label>
            <select
                name=""
                id=""
                className="rounded-md px-2 outline-none text-gray-500 py-1"
                onChange={(e) => setTextTransform(e.target.value)}
            >
                <option value="">Default</option>
                <option value="capitalize">Capitalized</option>
                <option value="lowercase">lowercase</option>
                <option value="uppercase">UPPERCASE</option>
            </select>
        </div>
    );
};

export default TextTransform;
