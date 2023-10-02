'use client';
import { TyphographyContext } from '@/context/typography.context';
import { TyphographyDrawerContext } from '@/context/typographyDrawer.context';
import { useContext, useEffect, useState } from 'react';

const FontWeigth = () => {
    const { state, dispatch } = useContext(TyphographyDrawerContext);
    const [weigth, setWeigth] = useState('');

    useEffect(() => {
        dispatch({
            type: 'SET_FONT_WEIGTH',
            payload: weigth,
        });
    }, [weigth]);
    return (
        <div className="flex justify-between gap-4">
            <label className="text-gray-500">Select Font weigth</label>
            <select
                className="rounded-md px-2 outline-none text-gray-500 py-1"
                onChange={(e) => setWeigth(e.target.value)}
            >
                <option value="100">100 – Thin.</option>
                <option value="200">200 – Extra Light (Ultra Light)</option>
                <option value="300">300 – Light</option>
                <option value="400">400 – Normal</option>
                <option value="500">500 – Medium</option>
                <option value="600">600 – Semi Bold (Demi Bold)</option>
                <option value="700">700 – Bold</option>
                <option value="800">800 – Extra Bold (Ultra Bold)</option>
                <option value="900">900 – Black (Heavy)</option>
            </select>
        </div>
    );
};

export default FontWeigth;
