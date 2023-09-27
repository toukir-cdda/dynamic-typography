"use client";

import React, { createContext, useReducer } from "react";

const initialState = {
  componentData: [],
  selectedTag: {},
  tagStyles: {
    fontSize: "",
    fontWeight: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMPONENT_DATA":
      const data = action.payload;
      const modifiedData = [];
      //Helper function to recursively find children for a given parentId
      const findChildren = (parentId) => {
        const children = [];
        for (const item of data) {
          if (item.parentId === parentId) {
            const childItem = { ...item, children: findChildren(item.id) };
            children.push(childItem);
          }
        }
        return children.length > 0 ? children : null;
      };

      for (const item of data) {
        if (!item.parentId) {
          const newItem = { ...item, children: findChildren(item.id) };
          modifiedData.push(newItem);
        }
      }

      return {
        ...state,
        componentData: modifiedData,
      };

    case "SELECTED_CHILD_TAG":
      return {
        ...state,
        selectedTag: action.payload,
      };

    case "SET_TAG":
      const updatedTag = action.payload;
      const selectedTag = { ...state.selectedTag };

      const updatedComponentData = state.componentData.map((parent) => {
        const updatedChildren = parent.children.map((child) => {
          if (child.id === selectedTag.id) {
            return {
              ...child,
              tag: updatedTag,
            };
          }
          return child;
        });
        return {
          ...parent,
          children: updatedChildren,
        };
      });

      return {
        ...state,
        componentData: updatedComponentData,
        tagStyles: {
          ...state.tagStyles,
          tag: action.payload,
        },
      };

    case "SET_FONT_SIZE":
      const updatedFontSize = action.payload;
      const selectedTagFZ = { ...state.selectedTag };

      const updatedComponent = state.componentData.map((parent) => {
        const updatedChildren = parent.children.map((child) => {
          if (child.id === selectedTagFZ.id) {
            return {
              ...child,
              styles: {
                ...child.styles,
                fontSize: updatedFontSize,
              },
            };
          }
          return child;
        });
        return {
          ...parent,
          children: updatedChildren,
        };
      });

      return {
        ...state,
        componentData: updatedComponent,
        tagStyles: {
          ...state.tagStyles,
          fontSize: action.payload,
        },
      };

    case "SET_FONT_WEIGTH":
      const updatedFontWeigth = action.payload;
      const selectedTagFw = { ...state.selectedTag };

      const updatedComponentFw = state.componentData.map((parent) => {
        const updatedChildren = parent.children.map((child) => {
          if (child.id === selectedTagFw.id) {
            return {
              ...child,
              styles: {
                ...child.styles,
                fontWeight: Number(updatedFontWeigth),
              },
            };
          }
          return child;
        });
        return {
          ...parent,
          children: updatedChildren,
        };
      });

      return {
        ...state,
        componentData: updatedComponentFw,
        tagStyles: {
          ...state.tagStyles,
          fontWeight: action.payload,
        },
      };

    default:
      return state;
  }
};

export const TyphographyContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const TyphographyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TyphographyContext.Provider value={{ state, dispatch }}>
      {children}
    </TyphographyContext.Provider>
  );
};
