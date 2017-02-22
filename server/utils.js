module.exports = {
  errorHandler: (e, req, res, next) => {
    res.status(500).send({
      error: e.message
    })
  },
  logError: (e, req, res, next) => {
    console.error(e.stack);
    next(e);
  }
}
