import { TyphographyDrawerContext } from '@/context/typographyDrawer.context';
import React, { useContext, useEffect, useState } from 'react';

const TextDecoration = () => {
    const { state, dispatch } = useContext(TyphographyDrawerContext);
    const [textDecoration, setTextDecoration] = useState('');

    useEffect(() => {
        dispatch({
            type: 'SET_TEXT_DECORATION',
            payload: textDecoration,
        });
    }, [textDecoration]);
    return (
        <div className="flex justify-between gap-4">
            <label htmlFor="" className="text-gray-500">
                Decoration
            </label>
            <select
                name=""
                id=""
                className="rounded-md px-2 outline-none text-gray-500 py-1"
                onChange={(e) => setTextDecoration(e.target.value)}
            >
                <option value="">Default</option>
                <option value="overline">Overline</option>
                <option value="line-through">line-through</option>
                <option value="underline">Underline</option>
                <option value="underline overline">underline overline</option>
            </select>
        </div>
    );
};

export default TextDecoration;
