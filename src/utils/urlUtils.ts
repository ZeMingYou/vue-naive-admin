/**
 * 通过正则获取URL参数名
 * @param {string} name 参数名
 * @return 有值返回对应参数值，没有就返回空字符串。
 */
export const getUrlParams = (url: string, name: string) => {
  const reg = new RegExp("(?:&|/?)" + name + "=([^&$]+)").exec(url);
  return reg ? reg[1] : ''
};

/**
 * 通过URLSearchParams方法，URL 的查询字符串。
 * 不兼容IE
 * @param url 路径或者参数 (?id=***&uid=***)
 * @returns {}
 */
// export const getUrlSearchParams = (url: string) => {
//   const searchParams = new URLSearchParams(url)
//   const params = Object.fromEntries(searchParams.entries())
//   return params ? params : ''
// }