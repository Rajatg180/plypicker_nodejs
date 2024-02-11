const { UnauthenticatedError } = require('../errors');

const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {
  // Get the 'Authorization' header from the request
  const authHeader = req.headers.authorization;

  // Check if the 'Authorization' header is missing or doesn't start with 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // If invalid, throw an UnauthenticatedError
    throw new UnauthenticatedError('Authentication invalid');
  }

  // Extract the token from the 'Authorization' header
  const token = authHeader.split(' ')[1];

  try {
    // Verify the JWT token using the secret key
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Log the email from the payload to the console (for demonstration purposes)
    console.log(`This is payload of auth middleware ${payload.email}`);

    // Attach user information from the decoded JWT payload to the request object
    req.user = {
      userId: payload.userId,
      name: payload.name,
      email: payload.email,
    };

    // Call the next middleware or route handler in the stack
    next();
  } catch (err) {
    // If there's an error (e.g., token is invalid or expired), log it and throw an UnauthenticatedError
    console.log(err);
    throw new UnauthenticatedError('Authentication invalid');
  }
};

module.exports = auth;
