module.exports = {
  validateStringLength(string ,length) {
    if (string.length > length) {
      return 'Length of parameter exceeded the limit'
    }

    return null
  }
}