'use client';
import { TyphographyDrawerContext } from '@/context/typographyDrawer.context';
import { useContext, useEffect, useState } from 'react';

const LineHeight = () => {
    const { state, dispatch } = useContext(TyphographyDrawerContext);
    function splitValueAndUnit(input) {
        // Regular expression to match digits and units
        const regex = /^(\d*)?([a-zA-Z]+)$/;

        const match = input.match(regex);

        if (!match) {
            // If no match, return null
            return null;
        }

        const digit = match[1] ? parseInt(match[1], 10) : '';
        const unit = match[2];

        return { digit, unit };
    }
    const [unit, setUnit] = useState('px');
    const [lineHeight, setLineHeight] = useState('25px');

    const handleChange = (e) => {
        setLineHeight(
            unit === 'px' ? `${e.target.value}px` : `${e.target.value}rem`
        );
    };
    const { digit } = splitValueAndUnit(lineHeight);

    useEffect(() => {
        dispatch({
            type: 'SET_LINE_HEIGHT',
            payload: lineHeight,
        });
    }, [lineHeight]);
    return (
        <div className="flex flex-col">
            <label className="text-gray-500">Line Height</label>
            <div className="flex items-center gap-2  ">
                <div className="w-10/12">
                    <input
                        className="w-full"
                        type="range"
                        value={digit}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col w-2/12">
                    <select
                        onChange={(e) => setUnit(e.target.value)}
                        className="bg-transparent  w-11"
                    >
                        <option value="px">px</option>
                        <option value="rem">rem</option>
                    </select>
                    <input
                        type="number"
                        value={digit}
                        // value={lineHeight}
                        onChange={handleChange}
                        className="w-9 h-9 rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default LineHeight;
