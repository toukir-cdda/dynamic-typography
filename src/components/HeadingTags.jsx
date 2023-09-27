"use client";
import { TyphographyContext } from "@/context/typography.context";
import { useContext, useEffect, useState } from "react";

const HeadingTags = () => {
  const { state, dispatch } = useContext(TyphographyContext);

  const { selectedTag = {} } = state || {};

  const [selectTag, setselectTag] = useState(selectedTag?.tag);

  useEffect(() => {
    setselectTag(selectedTag?.tag);
  }, [selectedTag?.tag]);

  useEffect(() => {
    dispatch({
      type: "SET_TAG",
      payload: selectTag,
    });
  }, [selectTag]);

  return (
    <div>
      <span className="pr-3">Select Tag</span>
      <select
        className="rounded-md"
        name="tag"
        onChange={(e) => setselectTag(e.target.value)}
        value={selectTag}
      >
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="h4">h4</option>
        <option value="h5">h5</option>
        <option value="h6">h6</option>
      </select>
    </div>
  );
};

export default HeadingTags;
