'use client';

import React, { createContext, useReducer } from 'react';

const initialState = {
    typographyProperties: {
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        textTransform: '',
        fontStyle: '',
        textDecoration: '',
        lineHeight: '',
        letterSpacing: '',
        wordSpacing: '',
    },

    typography: [
        // {
        //     elementId: '',
        //     properties: {
        //         fontFamily: '',
        //         fontSize: '',
        //         fontWeight: '',
        //         textTransform: '',
        //         fontStyle: '',
        //         textDecoration: '',
        //         lineHeight: '',
        //         letterSpacing: '',
        //         wordSpacing: '',
        //     },
        // },
    ],

    selectedEleId: '',
};

const updatePropertis = (state, updatedKey, updatedValue) => {
    return state.typography.map((element) => {
        if (element.elementId === state.selectedEleId) {
            return {
                ...element,
                properties: {
                    ...element.properties,
                    [updatedKey]: updatedValue,
                },
            };
        }
        return element;
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FONT_FAMILY':
            const updatedFontFamily = action.payload;
            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    fontFamily: updatedFontFamily,
                },
                typography: updatePropertis(
                    state,
                    'fontFamily',
                    updatedFontFamily
                ),
            };

        case 'SET_FONT_SIZE':
            const updatedFontSize = action.payload;

            // const updatedPropertis = state.typography.map((element) => {
            //     if (element.elementId === state.selectedEleId) {
            //         return {
            //             ...element,
            //             properties: {
            //                 ...element.properties,
            //                 fontSize: updatedFontSize,
            //             },
            //         };
            //     }
            //     return element;
            // });

            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    fontSize: updatedFontSize,
                },
                typography: updatePropertis(state, 'fontSize', updatedFontSize),
            };

        case 'SET_FONT_WEIGTH':
            const updatedFontWeigth = action.payload;
            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    fontWeight: updatedFontWeigth,
                },
                typography: updatePropertis(
                    state,
                    'fontWeight',
                    updatedFontWeigth
                ),
            };

        case 'SET_TEXT_TRANSFROM':
            const updatedTextTransform = action.payload;
            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    textTransform: updatedTextTransform,
                },
                typography: updatePropertis(
                    state,
                    'textTransform',
                    updatedTextTransform
                ),
            };

        case 'SET_FONT_STYLE':
            const updatedFontStyle = action.payload;
            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    fontStyle: updatedFontStyle,
                },
                typography: updatePropertis(
                    state,
                    'fontStyle',
                    updatedFontStyle
                ),
            };

        case 'SET_TEXT_DECORATION':
            const updatedTextDecoration = action.payload;
            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    textDecoration: updatedTextDecoration,
                },
                typography: updatePropertis(
                    state,
                    'textDecoration',
                    updatedTextDecoration
                ),
            };

        case 'SET_LINE_HEIGHT':
            const updatedLineHeight = action.payload;
            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    lineHeight: updatedLineHeight,
                },
                typography: updatePropertis(
                    state,
                    'lineHeight',
                    updatedLineHeight
                ),
            };

        case 'SET_LETTER_SPACING':
            const updatedLetterSpacing = action.payload;
            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    letterSpacing: updatedLetterSpacing,
                },
                typography: updatePropertis(
                    state,
                    'letterSpacing',
                    updatedLetterSpacing
                ),
            };

        case 'SET_WORD_SPACING':
            const updatedWordSpaching = action.payload;
            return {
                ...state,
                typographyProperties: {
                    ...state.typographyProperties,
                    wordSpacing: updatedWordSpaching,
                },
                typography: updatePropertis(
                    state,
                    'wordSpacing',
                    updatedWordSpaching
                ),
            };

        case 'SET_ELEMENT_PROPERTIES':
            const { elementId, properties } = action.payload;
            //checking elementId is available or not
            const existingElementIndex = state.typography.findIndex(
                (item) => item.elementId === elementId
            );
            if (existingElementIndex !== -1) {
                //available
                const updatedElement = [...state.typography];
                // const elemt = typography.find(
                //     (el) => el.elementId === elementId
                // );
                updatedElement[existingElementIndex].properties = properties;
                // updatedElement[existingElementIndex].properties =
                //     elemt.properties;

                return {
                    ...state,
                    typography: updatedElement,
                };
            } else {
                //not available
                return {
                    ...state,
                    typography: [
                        ...state.typography,
                        { elementId, properties },
                    ],
                    selectedEleId: elementId,
                };
            }

        case 'SELECT_ELEMENT':
            const eleId = action.payload;
            return {
                ...state,
                selectedEleId: eleId,
            };

        default:
            return state;
    }
};

export const TyphographyDrawerContext = createContext({
    state: initialState,
    dispatch: () => null,
});

export const TyphographyDrawerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TyphographyDrawerContext.Provider value={{ state, dispatch }}>
            {children}
        </TyphographyDrawerContext.Provider>
    );
};
