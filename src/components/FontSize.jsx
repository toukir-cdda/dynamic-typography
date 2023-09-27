"use client";
import { TyphographyContext } from "@/context/typography.context";
import { useContext, useEffect, useState } from "react";

const FontSize = () => {
  const { state, dispatch } = useContext(TyphographyContext);
  const [unit, setUnit] = useState("px");
  const [fontSize, setFontSize] = useState("");

  const { selectedTag = {}, tagStyles } = state || {};
  // console.log(tagStyles);

  function splitValueAndUnit(input) {
    // Regular expression to match digits and units
    const regex = /^(\d+)([a-zA-Z]+)$/;

    // Use regex to extract digits and units
    const match = input.match(regex);

    if (!match) {
      // If no match, return null
      return null;
    }

    const digit = parseInt(match[1], 10);
    const unit = match[2];

    return { digit, unit };
  }

  const handleChange = (e) => {
    setFontSize(unit === "px" ? `${e.target.value}px` : `${e.target.value}rem`);
  };

  useEffect(() => {
    dispatch({
      type: "SET_FONT_SIZE",
      payload: fontSize,
    });
  }, [fontSize]);
  return (
    <div>
      <span className="pr-3">Select size unit</span>
      <select className="rounded-md " onChange={(e) => setUnit(e.target.value)}>
        <option value="px">px</option>
        <option value="rem">rem</option>
      </select>
      <input
        className="rounded-md ml-2"
        type="number"
        name=""
        id=""
        placeholder="@font size"
        onChange={handleChange}
        pattern="^(?!\s*$).+"
        required
      />
    </div>
  );
};

export default FontSize;
