
export const padZero = (n) => ~~(n, 10) < 10 ? `0${n}` : n;

/**
 *  @description 格式化日期
 *  @param {String} val 用于格式化日期的数据，要求能够被Date()对象所处理
 *  @param {String} model 用于格式化日期的格式，默认'YYYY-MM-DD hh:mm:ss'表示'2017-05-08 17:44:30'
 *  @return {String} 返回值为格式化后的数据
 */
export const formatDate = (val, model) => {
  if (typeof val === 'string') {
    val = val.replace(/-/g, '/');
  }
  let date = new Date(val);
  let chinese = ['一', '二', '三', '四', '五', '六', '日'];
  let result = model || 'YYYY-MM-DD hh:mm:ss';
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let week = date.getDay();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let time = date.getTime();

  if (result === 'time' || result === 'Time') { return time; }

  result = result.replace(/YYYY/, year);
  result = result.replace(/YY/, (year + '').slice(2));
  result = result.replace(/MM/, padZero(month));
  result = result.replace(/M/, month);
  result = result.replace(/[wW]+/, `星期${chinese[week]}`);
  result = result.replace(/DD/, padZero(day));
  result = result.replace(/D/, day)
  result = result.replace(/hh/, padZero(hour));
  result = result.replace(/h/, hour);
  result = result.replace(/mm/, padZero(minute));
  result = result.replace(/m/, minute);
  result = result.replace(/ss/, padZero(second));
  result = result.replace(/s/, second);
  return result;
}

export default {
  formatDate
};
