import React from 'react';
import { Input, } from '@linkseeks/god-taro-library';
import { useRule } from './server';
import type { InputXProps } from './type';


function InputX (props: InputXProps ) {
  const { rules, onChange, onBlur, ...inputProps } = props;
  const changeWrapper = useRule({
    rules,
    onChange,
    onBlur,
  })
  return <Input {...changeWrapper} {...inputProps}  />
};

export default InputX;


export * from './type';
export * from './modal';
export * from './util';
export * from './helper';
export * from './server';
