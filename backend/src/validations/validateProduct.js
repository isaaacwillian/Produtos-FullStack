const Joi = require("joi");

exports.insertValidate = (data) => {
  const schema = Joi.object({
    productName: Joi.string().min(3).max(50).required(),
    originDate: Joi.date().required(),
    isPerishable: Joi.boolean().required(),
    expirationDate: Joi.exist().when("isPerishable", {
      is: true,
      then: Joi.date().greater(data.originDate).required(),
      otherwise: Joi.forbidden(),
    }),
    price: Joi.number().greater(0).required(),
  });

  return schema.validate(data);
};

exports.updateValidate = (data) => {
  const schema = Joi.object({
    id: Joi.string(),
    productName: Joi.string().min(3).max(50),
    originDate: Joi.date(),
    isPerishable: Joi.boolean().required(),
    expirationDate: Joi.exist().when("isPerishable", {
      is: true,
      then: Joi.date().greater(data.originDate).required(),
      otherwise: Joi.forbidden(),
    }),
    price: Joi.number().greater(0),
  });

  return schema.validate(data);
};
