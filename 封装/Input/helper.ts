import { showToast } from '@tarojs/taro';
import type { InputRuleItem } from './type';


/** 规则校验整数 */
export const numberRule: InputRuleItem = {
  type: 'number',
  check(v) {
    const num = Number(v);
    return !Number.isNaN(num);
  },
  errorTrigger(v) {
    showToast({
      title: '请输入数字',
      icon: 'none',
    })
  },
}

/** 规则校验正整数 */
export const positiveRule: InputRuleItem = {
  type: 'positive',
  check(v) {
    const num = Number(v);
    if (Number.isNaN(num)) return false;
    if (num <= 0) return false;
    return true;
  },
  errorTrigger(v) {
    showToast({
      title: '请输入正整数',
      icon: 'none',
    })
  },
}

/** 规则校验负整数 */
export const negativeRule: InputRuleItem = {
  type: 'negative',
  check(v) {
    const num = Number(v);
    if (Number.isNaN(num)) return false;
    if (num >= 0) return false;
    return true;
  },
  errorTrigger(v) {
    showToast({
      title: '请输入负整数',
      icon: 'none',
    })
  },
};
