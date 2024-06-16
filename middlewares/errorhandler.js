function errorhandler(err, req, res, next) {
  let statusCode = err.status;
  // || 500;
  let message;

  switch (statusCode) {
    case 401:
      message = "Unauthorized: Access is denied due to invalid credentials.";
      break;
    case 402:
      message =
        "Payment Required: Payment is required to access this resource.";
      break;
    case 403:
      message =
        "Forbidden: You do not have permission to access this resource.";
      break;
    case 404:
      message = "Not Found: The requested resource could not be found.";
      break;
    // case 500:
    // default:
    //   message =
    //     "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.";
    //   break;
  }

  res.status(statusCode);
  res.render("errors/error.ejs", {
    status: statusCode,
    message: message,
  });
}

module.exports = errorhandler;
