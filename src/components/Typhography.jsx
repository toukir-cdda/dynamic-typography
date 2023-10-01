import { TyphographyContext } from '@/context/typography.context';
import { useContext, useEffect } from 'react';
import { jss } from 'react-jss';

const Typography = () => {
    const { state, dispatch } = useContext(TyphographyContext);

    const { componentData = [], selectedTag = {}, tagStyles } = state || {};

    const renderComponent = (component) => {
        const {
            id,
            tag: Tag,
            styles,
            componentType,
            content,
            children,
        } = component;
        const sheet = jss.createStyleSheet(styles).attach();
        return (
            <div key={id}>
                {componentType === 'parent' ? (
                    <Tag className={sheet.classes.container}>
                        {content && <Tag>{content}</Tag>}
                        {children &&
                            children.map((child) => renderComponent(child))}
                    </Tag>
                ) : (
                    <Tag
                        className={sheet.classes.container}
                        onClick={() =>
                            dispatch({
                                type: 'SELECTED_CHILD_TAG',
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
        <div>
            {componentData.map((component) => renderComponent(component))}
        </div>
    );
};

export default Typography;
