import Joi from 'joi';

export default Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  note: Joi.string().required(),
}).options({ allowUnknown: false });
