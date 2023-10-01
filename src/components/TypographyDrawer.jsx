import React from 'react';

const TypographyDrawer = () => {
    return (
        <div className="bg-gray-200 rounded-md p-3">
            <h3 className="font-semibold py-2">Typography</h3>
            <form className="flex flex-col gap-2">
                <div className="flex justify-between gap-4">
                    <label htmlFor="" className="text-gray-500">
                        Font Family
                    </label>
                    <select
                        name=""
                        id=""
                        className="rounded-md px-2 outline-none text-gray-500 py-1 "
                    >
                        <option value="">Font name</option>
                        <option value="">Roboto</option>
                    </select>
                </div>

                {/* with slider */}
                <div className="flex flex-col">
                    <label className="text-gray-500">Font Size</label>
                    <div className="flex items-center gap-2  ">
                        <div className="w-10/12">
                            <input
                                className="w-full"
                                type="range"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="flex flex-col w-2/12">
                            <select
                                name=""
                                id=""
                                className="bg-transparent  w-11"
                            >
                                <option value="px">px</option>
                                <option value="rem">rem</option>
                            </select>
                            <input
                                type="number"
                                name=""
                                id=""
                                className="w-9 h-9 rounded-md"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-4">
                    <label htmlFor="" className="text-gray-500">
                        Weight
                    </label>
                    <select
                        name=""
                        id=""
                        className="rounded-md px-2 outline-none text-gray-500 py-1"
                    >
                        <option value="100">100 – Thin.</option>
                        <option value="200">
                            200 – Extra Light (Ultra Light)
                        </option>
                        <option value="300">300 – Light</option>
                        <option value="400">400 – Normal</option>
                        <option value="500">500 – Medium</option>
                        <option value="600">600 – Semi Bold (Demi Bold)</option>
                        <option value="700">700 – Bold</option>
                        <option value="800">
                            800 – Extra Bold (Ultra Bold)
                        </option>
                        <option value="900">900 – Black (Heavy)</option>
                    </select>
                </div>

                <div className="flex justify-between gap-4">
                    <label htmlFor="" className="text-gray-500">
                        Transform
                    </label>
                    <select
                        name=""
                        id=""
                        className="rounded-md px-2 outline-none text-gray-500 py-1"
                    >
                        <option value="">Default</option>
                        <option value="">Capitalized</option>
                        <option value="">lowercase</option>
                        <option value="">UPPERCASE</option>
                    </select>
                </div>

                <div className="flex justify-between gap-4">
                    <label htmlFor="" className="text-gray-500">
                        Style
                    </label>
                    <select
                        name=""
                        id=""
                        className="rounded-md px-2 outline-none text-gray-500 py-1"
                    >
                        <option value="">Normal</option>
                        <option value="">Italic</option>
                        <option value="">Oblique</option>
                    </select>
                </div>

                <div className="flex justify-between gap-4">
                    <label htmlFor="" className="text-gray-500">
                        Decoration
                    </label>
                    <select
                        name=""
                        id=""
                        className="rounded-md px-2 outline-none text-gray-500 py-1"
                    >
                        <option value="">Default</option>
                        <option value="">Overline</option>
                        <option value="">line-through</option>
                        <option value="">Underline</option>
                        <option value="">underline overline</option>
                    </select>
                </div>

                {/* with slider */}
                <div className="flex flex-col">
                    <label className="text-gray-500">Line-Height</label>
                    <div className="flex items-center gap-2 ">
                        <div className=" w-10/12">
                            <input
                                className="w-full"
                                type="range"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="flex flex-col w-2/12">
                            <select
                                name=""
                                id=""
                                className="bg-transparent w-11"
                            >
                                <option value="px">px</option>
                                <option value="rem">rem</option>
                            </select>
                            <input
                                type="number"
                                name=""
                                id=""
                                className="w-9 h-9 rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* with slider */}
                <div className="flex flex-col">
                    <label className="text-gray-500">Letter Spaceing</label>
                    <div className="flex items-center gap-2 ">
                        <div className=" w-10/12">
                            <input
                                className="w-full"
                                type="range"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="flex flex-col w-2/12">
                            <select
                                name=""
                                id=""
                                className="bg-transparent w-11"
                            >
                                <option value="px">px</option>
                                <option value="rem">rem</option>
                            </select>
                            <input
                                type="number"
                                name=""
                                id=""
                                className="w-9 h-9 rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* with slider */}
                <div className="flex flex-col">
                    <label className="text-gray-500">Word Spacing</label>
                    <div className="flex items-center gap-2 ">
                        <div className=" w-10/12">
                            <input
                                className="w-full"
                                type="range"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="flex flex-col w-2/12">
                            <select
                                name=""
                                id=""
                                className="bg-transparent w-11"
                            >
                                <option value="px">px</option>
                                <option value="rem">rem</option>
                            </select>
                            <input
                                type="number"
                                name=""
                                id=""
                                className="w-9 h-9 rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TypographyDrawer;
