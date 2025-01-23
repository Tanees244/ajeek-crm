export const APIResponseCodes = {
  SUCCESS: {
    code: 200,
    message: 'Login successful!',
  },
  CREATED: {
    code: 201,
    message: 'Resource created successfully!',
  },
  BAD_REQUEST: {
    code: 400,
    message: 'Bad request. Please check the input data.',
  },
  FORBIDDEN: {
    code: 403,
    message: 'Access forbidden. You do not have permission.',
  },
  NOT_FOUND: {
    code: 404,
    message: 'The requested resource was not found.',
  },
  UNPROCESSABLE_ENTITY: {
    code: 422,
    message: 'Unprocessable entity. Please verify the data and try again.',
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: 'An internal server error occurred. Please try again.',
  },
  INVALID_CREDENTIALS: {
    code: 401,
    message: 'Invalid email or password.',
  },
  UNEXPECTED_ERROR: {
    code: 500,
    message: 'An unexpected error occurred. Please try again.',
  },
};
