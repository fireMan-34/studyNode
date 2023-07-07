/**--------------------- 函数相关 */
export const noop = () => { };

export const emptyList = [];

export const noChange = item => item;

export const createBefore = <F extends Function>(fn: F, before: (args: any[]) => boolean) => new Proxy(fn, {
  apply: function (target, thisArg, args) {
    return before(args) && target.apply(thisArg, args)
  }
});
