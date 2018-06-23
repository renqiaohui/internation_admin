const filters = {}

/**
 * 格式化时间
 *
 * @param {String} str
 * @returns {String}
 */
filters.formatDate = (str) => {
  if (!str) return ''

  const date = new Date(str)
  const time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）

  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return `${parseInt(time / 1000, 10)}秒前`
  } else if ((time / 60000) < 60) {
    return `${parseInt(time / 60000, 10)}分钟前`
  } else if ((time / 3600000) < 24) {
    return `${parseInt(time / 3600000, 10)}小时前`
  } else if ((time / 86400000) < 31) {
    return `${parseInt(time / 86400000, 10)}天前`
  } else if ((time / 2592000000) < 12) {
    return `${parseInt(time / 2592000000, 10)}月前`
  }
  return `${parseInt(time / 31536000000, 10)}年前`
}

/**
 * 时间格式转换
 */
filters.timeChange = (source, inFormat, outFormat) => {
  const checkTime = (time) => {
    if (time < 10) {
      time = `0${time}`
    }
    return time
  }

  // 防止参数为空时下面匹配报错(使用当前日期作为参数)
  if (!source) {
    source = new Date()
    source = `${source.getFullYear()}-${checkTime(source.getMonth() + 1)}-${checkTime(source.getDate())} ${checkTime(source.getHours())}:${checkTime(source.getMinutes())}:${checkTime(source.getSeconds())}` // eslint-disable-line
  }

  let reg = ''
  switch (inFormat) {
    case 'Y-m-d H:i:s':
      reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/
      source = source.match(reg)
      source = new Date(source[1], source[3] - 1, source[4], source[5], source[6], source[7])
      break
    case 'Y-m-d':
      reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/
      source = source.match(reg)
      source = new Date(source[1], source[3] - 1, source[4])
      break
    case 'timestamp':
      source = new Date(parseInt(source, 10) * 1000)
      break
    default:
  }

  let outputStr = ''
  switch (outFormat) {
    case 'Y-m-d H:i:s':
      outputStr = `${source.getFullYear()}-${checkTime(source.getMonth() + 1)}-${checkTime(source.getDate())} ${checkTime(source.getHours())}:${checkTime(source.getMinutes())}:${checkTime(source.getSeconds())}`  // eslint-disable-line
      break
    case 'Y-m-d':
      outputStr = `${source.getFullYear()}-${checkTime(source.getMonth() + 1)}-${checkTime(source.getDate())}`
      break
    case 'Y.m.d':
      outputStr = `${source.getFullYear()}.${checkTime(source.getMonth() + 1)}.${checkTime(source.getDate())}`
      break
    case 'H:i':
      outputStr = `${source.getHours()}:${checkTime(source.getMinutes())}`
      break
    case 'timestamp':
      outputStr = parseInt(source.getTime() / 1000, 10)
      break
    case 'newDate':
      outputStr = source
      break
    default:
  }
  return outputStr
}

/**
 * 字符串过滤溢出省略号
 *
 * @param {String} str
 * @returns {String}
 */
filters.formatString = (str, start, end, extraStr) => {
  if (str) {
    if (typeof (start) === 'number' && typeof (end) === 'number') {
      if (str.length > end && extraStr && typeof (extraStr) === 'string') {
        return str.slice(start, end) + extraStr.toString()
      }
      return str.slice(start, end)
    }
    return str
  }
  return str
}

export default filters
