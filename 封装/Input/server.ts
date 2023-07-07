import { useMemo, } from 'react';
import { InputRuleManager } from './modal';
import { noop, emptyList, noChange , createBefore } from './util';
import type { useRuleInProps } from './type';

export const useRule = (props: useRuleInProps) => {
  const {
    rules = emptyList,
    onChange = noop,
    onBlur = noop,
  } = props;

  const ruleManager = useMemo(() => {
    const formatRules = Array.isArray(rules) ? rules.filter(noChange) : [rules].filter(noChange);
    const inputRuleManager = new InputRuleManager();
    formatRules.forEach(rule => {
      inputRuleManager.pushRule(rule);
    });
    return inputRuleManager;
  }, [rules]);

  const changeWrapper = useMemo(() => {
    // 实际设计并不好，我没有考虑到组件什么时候调用，什么时候检测，只是对可能 change 的方法做了一层 拦截处理
    const beforeWrapper = (fn: typeof onChange | typeof onBlur) => createBefore(fn, ruleManager.checkChain.apply(ruleManager));

    return {
      onChange: beforeWrapper(onChange),
      onBlur: beforeWrapper(onBlur),
    }
  }, [onChange, onBlur, ruleManager])

  return changeWrapper;
};
