import validator from '../../helpers/validator';
import createNoteSchema from './schemas/note/createNote';
import noteEditSchema from './schemas/note/updateNote';

// eslint-disable-next-line import/prefer-default-export
export const createNote = (req, res, next) => (
  validator(createNoteSchema, req.body, res, next)
);

export const updateNote = (req, res, next) => (
  validator(noteEditSchema, req.body, res, next)
);
