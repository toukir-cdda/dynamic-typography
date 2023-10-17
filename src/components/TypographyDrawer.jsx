'use client';
import React, { useContext, useEffect, useState } from 'react';
import FontSize from './FontSize';
import LineHeight from './LineHeight';
import LetterSpacing from './LetterSpacing';
import WordSpacing from './WordSpacing';
import FontWeigth from './FontWeight';
import TextTransform from './TextTransform';
import FontStyle from './FontStyle';
import TextDecoration from './TextDecoration';
import { TyphographyDrawerContext } from '@/context/typographyDrawer.context';
import FontFamily from './FontFamily';
import TextColor from './TextColor';

const TypographyDrawer = () => {
    const { state, dispatch } = useContext(TyphographyDrawerContext);
    const { typographyProperties, typography, selectedEleId } = state || {};

    const handleClick = (event, properties) => {
        const clickedElementId = event.target.id;

        dispatch({
            type: 'SET_ELEMENT_PROPERTIES',
            payload: {
                elementId: clickedElementId,
                properties: typographyProperties,
            },
        });

        if (properties) {
            dispatch({
                type: 'SET_ELEMENT_PROPERTIES',
                payload: {
                    elementId: clickedElementId,
                    properties: properties,
                },
            });
        }

        dispatch({
            type: 'SELECT_ELEMENT',
            payload: clickedElementId,
        });
    };

    const getProperties = (typoData, eleId) => {
        if (typoData !== undefined) {
            const elemt = typoData.find((el) => el.elementId === eleId);
            return elemt?.properties;
        }
    };
    console.log(typographyProperties);

    return (
        <div className="grid  ">
            <div className="bg-gray-200 rounded-md p-3 w-[375px] ">
                <h3 className="font-semibold py-2">Typography</h3>
                <form className="flex flex-col gap-2">
                    <FontFamily />
                    <FontSize />
                    <FontWeigth />
                    <TextTransform />
                    <FontStyle />
                    <TextDecoration />
                    <LineHeight />
                    <LetterSpacing />
                    <WordSpacing />
                    <TextColor />
                </form>
            </div>

            <div className="grid-cols-3">
                <h2
                    id="heading-h2"
                    onClick={(e) =>
                        handleClick(e, getProperties(typography, 'heading-h2'))
                    }
                    style={getProperties(typography, 'heading-h2')}
                    className="hover:border hover:cursor-pointer"
                >
                    {' '}
                    h2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <h6
                    id="heading-h6"
                    // onClick={handleClick}
                    onClick={(e) =>
                        handleClick(e, getProperties(typography, 'heading-h6'))
                    }
                    style={getProperties(typography, 'heading-h6')}
                    className="hover:border hover:cursor-pointer"
                >
                    {' '}
                    h1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
                <span
                    id="span-1"
                    // onClick={handleClick}
                    onClick={(e) =>
                        handleClick(e, getProperties(typography, 'span-1'))
                    }
                    style={getProperties(typography, 'span-1')}
                    className="hover:border hover:cursor-pointer"
                >
                    {' '}
                    span Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.
                </span>
                <p
                    id="p-1"
                    // onClick={handleClick}
                    onClick={(e) =>
                        handleClick(e, getProperties(typography, 'p-1'))
                    }
                    style={getProperties(typography, 'p-1')}
                    className="hover:border hover:cursor-pointer"
                >
                    p Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    );
};

export default TypographyDrawer;
