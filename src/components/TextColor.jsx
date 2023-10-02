import React, { useState } from 'react';

const TextColor = () => {
    const [textColor, setTextColor] = useState('#ff0000');
    return (
        <div className="flex flex-col">
            <label className="text-gray-500">Text Color</label>
            <div className="flex items-center gap-2  ">
                <div className="w-10/12">
                    <input className="w-10 h-10 rounded-full" type="color" />
                </div>

                {/* <div className="flex flex-col w-2/12">
                    <select className="bg-transparent  w-11">
                        <option value="px">px</option>
                        <option value="rem">rem</option>
                    </select>
                    <input type="number" className="w-9 h-9 rounded-md" />
                </div> */}
            </div>
        </div>
    );
};

export default TextColor;
