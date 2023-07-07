import type { ComponentProps } from 'react';
import { Input, } from '@linkseeks/god-taro-library';

/** 基础校验规则 */
export interface BaseRuleItem<T, V> {
  type: T,
  /** 如果有异常，返回 false */
  check: (v: V) => boolean,
  /**  异常触发器 */
  errorTrigger?: (v: V) => void,
  next?: BaseRuleItem<T, V>,
};


type OriginInputProps = ComponentProps<typeof Input>;
/**
 * number 输入必须符合整数
 * positive 正整数
 * negative 负整数
 */
export type InputRuleItemType= 'number' | 'positive' | 'negative';

export interface InputRuleItem extends BaseRuleItem<InputRuleItemType, string> {
}

export interface InputXProps extends OriginInputProps {
  /** 内置常用的校验器 */
  rules?: InputRuleItem | InputRuleItem[];
}


export interface useRuleInProps extends Pick<InputXProps, "onChange"|"onBlur"|"rules"> {

}
