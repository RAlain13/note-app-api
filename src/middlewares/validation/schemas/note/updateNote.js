import Joi from 'joi';

export default Joi.object().keys({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  note: Joi.string().optional(),
}).options({ allowUnknown: false });
