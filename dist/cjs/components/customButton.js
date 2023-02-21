"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var react_1 = tslib_1.__importDefault(require("react"));
var CustomButton = function (props) {
    return (react_1["default"].createElement(antd_1.Button, { disabled: props.disabled, onClick: props.onClick, type: props.type, danger: props.danger, size: props.size, className: props.className, htmlType: props.htmlType }, props.buttonText));
};
exports["default"] = CustomButton;
//# sourceMappingURL=customButton.js.map