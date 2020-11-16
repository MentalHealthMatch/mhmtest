module.exports = errorHandler

function errorHandler(err, req, res, next) {
  if (typeof err === 'string') {
    return res.status(400).json({ message: err })
  }

  return res.status(400).json({
    message:
      err.errors && err.errors instanceof Array
        ? err.errors[0].message
        : err.message,
  })
}
