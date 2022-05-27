// 播放量的格式化
export function formatCount(num: number) {
  if (num > 100000) {
    return (num / 10000).toFixed(0) + '万'
  }
  return num.toString()
}
