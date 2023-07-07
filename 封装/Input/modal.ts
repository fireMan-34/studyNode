import type { BaseRuleItem, InputRuleItem } from './type';

class RuleManager<RI extends BaseRuleItem<unknown, unknown>>{
  public rules: RI | null;
  public cur: RI | null;
  constructor() {
    this.rules = null;
    this.cur = null;
  }

  pushRule(rule: RI) {
    if (null === this.rules || null === this.cur) {
      this.rules = rule;
      this.cur = rule;
    } else {
      this.cur.next = rule;
    }

    return this;
  }

  checkChain(value: unknown) {
    let result = true, cur: RI | null = this.rules;

    while (true === result && cur) {
      result = !!(this.cur?.check(value));

      if (!result && this.cur?.errorTrigger) {
        this.cur.errorTrigger(value);
      }

      cur = cur?.next as RI;
    };
    return result;
  }
}

export class InputRuleManager extends RuleManager<InputRuleItem> {

}
