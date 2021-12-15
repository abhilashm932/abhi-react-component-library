import React, { MouseEventHandler } from "react";
import Button from '@mui/material/Button';
import './Button.css';

export interface ButtonProps {
  label: string;
  onClick: MouseEventHandler
}

const ButtonC = (props: ButtonProps) => {
  return <Button variant="contained" onClick={props.onClick}>{props.label}</Button>;
};

export default ButtonC;