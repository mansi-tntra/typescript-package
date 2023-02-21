import { Button } from 'antd';
import React from 'react';
var CustomButton = function (props) {
    return (React.createElement(Button, { disabled: props.disabled, onClick: props.onClick, type: props.type, danger: props.danger, size: props.size, className: props.className, htmlType: props.htmlType }, props.buttonText));
};
export default CustomButton;
//# sourceMappingURL=customButton.js.map