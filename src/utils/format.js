/**
 * 字符串格式化
 */
/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
String.prototype.format = function(args) {
  var result = this
  if (arguments.length === 0) {
    return result
  }

  if (arguments.length === 1 && typeof args === 'object') {
    for (var key in args) {
      if (args[key] !== undefined) {
        var reg = new RegExp('({' + key + '})', 'g')
        result = result.replace(reg, args[key])
      }
    }
  } else {
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] !== undefined) {
        var obgReg = new RegExp('({)' + i + '(})', 'g')
        result = result.replace(obgReg, arguments[i])
      }
    }
  }
  return result
}
