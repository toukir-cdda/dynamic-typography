import React, { useContext, useEffect } from "react";
import Typography from "./Typhography";
import HeadingTags from "./HeadingTags";
import FontSize from "./FontSize";
import FontWeigth from "./FontWeight";
import { TyphographyContext } from "@/context/typography.context";

const TyphographyContainer = ({ componentData }) => {
  const { state, dispatch } = useContext(TyphographyContext);
  useEffect(() => {
    dispatch({
      type: "SET_COMPONENT_DATA",
      payload: componentData,
    });
  }, [componentData]);

  useEffect(() => {}, [state.componentData]);
  return (
    <div>
      <Typography />
      <div className="flex bg-slate-300  flex-col gap-3">
        <HeadingTags />
        <FontSize />
        <FontWeigth />
      </div>
    </div>
  );
};

export default TyphographyContainer;
