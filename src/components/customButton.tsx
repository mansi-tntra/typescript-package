import { Button } from 'antd'
import React from 'react'

interface buttonProps {
  buttonText: string
  disabled: boolean
  onClick: () => void
  type: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  danger: boolean
  size: 'large' | 'middle' | 'small'
  className: string
  htmlType: 'button' | 'submit' | 'reset'
}

const CustomButton = (props: buttonProps) => {
  return (
    <Button
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      danger={props.danger}
      size={props.size}
      className={props.className}
      htmlType={props.htmlType}
    >
      {props.buttonText}
    </Button>
  )
}

export default CustomButton
