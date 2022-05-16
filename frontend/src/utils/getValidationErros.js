export default function getValidationsErrors(errors) {
  const errorMessages = {};

  errors.inner.forEach((error) => {
    if (error.path) errorMessages[error.path] = error.message;
  });

  return errorMessages;
}
