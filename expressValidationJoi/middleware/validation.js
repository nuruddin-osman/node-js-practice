exports.runValidation = (schema) => {
  return (req, res, next) => {
    const users = schema.validate(req.body, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });

    if (users.error) {
      return res.status(400).send({
        message: "Validation failed",
        error: users.error.details.map((err) => err.message),
      });
    }
    next();
  };
};
