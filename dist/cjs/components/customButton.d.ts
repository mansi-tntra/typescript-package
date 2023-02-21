/// <reference types="react" />
interface buttonProps {
    buttonText: string;
    disabled: boolean;
    onClick: () => void;
    type: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
    danger: boolean;
    size: 'large' | 'middle' | 'small';
    className: string;
    htmlType: 'button' | 'submit' | 'reset';
}
declare const CustomButton: (props: buttonProps) => JSX.Element;
export default CustomButton;
