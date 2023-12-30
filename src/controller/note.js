import { isUuidValid } from '../helpers/uuid';
import NotesService from '../database/services/notes';
import out from '../helpers/response';

class UserController {
  static async createNote(req, res) {
    try {
      const {
        title, description, note
      } = req.body;

      const notes = await NotesService.findNote({ where: { title } });

      if (notes) {
        return out(res, 409, 'The Note with this title already exists!', null, 'CONFLICT_ERROR');
      }

      const noteData = await NotesService.addNotes({
        title,
        description,
        note
      });

      return out(res, 201, 'Note successfully created', noteData);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async noteEditDetails(req, res) {
    try {
      const { id } = req.params;
      if (!id || !isUuidValid(id)) {
        return out(res, 400, 'Please use a valid UUID format to search!', null, 'BAD_REQUEST');
      }

      const noteToUpdateExist = await NotesService.findNote({ where: { id } });
      if (!noteToUpdateExist) return out(res, 404, 'This Note does not exist', null, 'BAD_REQUEST');
      await NotesService.NoteToUpdate(id, req.body);

      return out(res, 200, 'Note updated successfully');
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async fetchAllNotes(req, res) {
    try {
      const allNotes = await NotesService.fetchNotes();
      if (allNotes.length === 0) return out(res, 404, 'No note found', null, 'NOT_FOUND');

      return out(res, 200, 'Notes retrieved successfully', allNotes, null);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async fetchNoteById(req, res) {
    try {
      const { id } = req.params;
      if (!id || !isUuidValid(id)) {
        return out(res, 400, 'Please use a valid UUID format to search!', null, 'BAD_REQUEST');
      }

      const singleNote = await NotesService.findNote({ where: { id } });
      if (!singleNote) {
        return out(res, 404, `Whoops! We can't find note with this id ${id}!`, null, 'NOT_FOUND');
      }
      return out(res, 200, `Note with id ${id} successfully retreived!`, singleNote);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async deleteNoteById(req, res) {
    try {
      const { id } = req.params;
      if (!id || !isUuidValid(id)) {
        return out(res, 400, 'Please use a valid UUID format to search!', null, 'BAD_REQUEST');
      }

      const singleNote = await NotesService.deleteNote({ where: { id } });
      if (!singleNote) {
        return out(res, 404, `Whoops! We can't find note with this id ${id}!`, null, 'NOT_FOUND');
      }
      return out(res, 200, `Note with id ${id} successfully deleted!`);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default UserController;
