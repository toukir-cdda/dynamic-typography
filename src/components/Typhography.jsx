import { TyphographyContext } from "@/context/typography.context";
import { useContext, useEffect } from "react";

const Typography = () => {
  const { state, dispatch } = useContext(TyphographyContext);

  const { componentData = [], selectedTag = {}, tagStyles } = state || {};
  console.log(componentData);
  const renderComponent = (component) => {
    const {
      id,
      tag: Tag,
      styles,
      componentType,
      content,
      children,
    } = component;
    return (
      <div key={id}>
        {componentType === "parent" ? (
          <Tag style={styles}>
            {content && <Tag>{content}</Tag>}
            {children && children.map((child) => renderComponent(child))}
          </Tag>
        ) : (
          <Tag
            style={styles}
            onClick={() =>
              dispatch({
                type: "SELECTED_CHILD_TAG",
                payload: component,
              })
            }
          >
            {Tag}
          </Tag>
        )}
      </div>
    );
  };
  return (
    <div>{componentData.map((component) => renderComponent(component))}</div>
  );
};

export default Typography;
