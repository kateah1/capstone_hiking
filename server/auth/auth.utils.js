exports.isLoggedIn = (request, response, next) => {
  if (!request.user) {
    return response.status(401).json({
      message: 'Unauthorized'
    })
  }
  next()
}
