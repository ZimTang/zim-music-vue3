/**
 * 转换音乐播放时间
 * @param {*} times 音乐播放持续时间
 * @returns 00：00格式的时间
 */
export function timeToMinute(times: number) {
  var t
  if (times > -1) {
    var hour = Math.floor(times / 3600)
    var min = Math.floor(times / 60) % 60
    var sec = times % 60
    if (hour < 10) {
      t = '0' + hour + ':'
    } else {
      t = hour + ':'
    }

    if (min < 10) {
      t += '0'
    }
    t += min + ':'
    if (sec < 10) {
      t += '0'
    }
    t += sec.toFixed(2)
  }
  t = t?.substring(3, t.length - 3)
  return t
}
