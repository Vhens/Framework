/* eslint-disbale */
/**
 * 倒计时
 * @param {string} y 年
 * @param {string} m 月
 * @param {string} d 日
 * @param {string} h 时
 * @param {string} min 分
 * @param {string} s 秒
 */
function countdown(y, m, d, h, min, s) {
  const nowDate = new Date();
  const endDate = new Date(y, m - 1, d, h, min, s);
  const disTime = endDate.getTime() - nowDate.getTime();
  const disSecond = ~~(disTime / 1000);
  const day = Math.floor(disSecond / (60*60*24));
  const hour = Math.floor((disSecond - day * 24 * 60 * 60) / 3600);
  const minute = Math.floor((disSecond - day * 24 * 60 * 60 - hour * 3600) / 60);
  const second = Math.floor(disSecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60);
  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second
  }
}
export { countdown };
