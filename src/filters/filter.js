import Momont from 'moment'

// 时间格式化
export function cstime(value) {
  if (!value) {
    return ''
  }
  return Momont(value).format('YYYY-MM-DD HH:mm')
}
