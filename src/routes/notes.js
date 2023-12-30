import { Router } from 'express';
import NoteController from '../controller/note';
import * as Validations from '../middlewares/validation/note';

const router = Router();

router.post('/addNote', Validations.createNote, NoteController.createNote);
router.put('/updateNote/:id', Validations.updateNote, NoteController.noteEditDetails);
router.get('/fetchNotes', NoteController.fetchAllNotes);
router.get('/note/:id', NoteController.fetchNoteById);
router.delete('/deleteNote/:id', NoteController.deleteNoteById);

export default router;
