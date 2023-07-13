import React from 'react'
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
/**
 * Primary UI component for user interaction
 */
type ButtonProps = {
  loading?: boolean
} & MuiButtonProps

export const Button = ({
  ...props
}: ButtonProps) => {
  return (
    <MuiButton {...props}>{props.children}</MuiButton>
  );
};
