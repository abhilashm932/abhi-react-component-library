import React, { MouseEventHandler } from "react";
import './Button.css';

export interface ButtonProps {
  label: string;
  onClick: MouseEventHandler
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default Button;