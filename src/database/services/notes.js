import data from '../models';

class NotesService {
  static async addNotes(newNote) {
    try {
      return await data.Note.create(newNote);
    } catch (error) {
      throw error;
    }
  }

  static async findNote(newNote) {
    try {
      return await data.Note.findOne(newNote);
    } catch (error) {
      throw error;
    }
  }

  static async NoteToUpdate(id, NoteToUpdate) {
    try {
      await data.Note.update(NoteToUpdate, { where: { id } });
      return NoteToUpdate;
    } catch (error) {
      throw error;
    }
  }

  static async findNotes() {
    try {
      return await data.Note.findAll({
        attributes: { exclude: ['id', 'description'] }
      });
    } catch (error) {
      throw error;
    }
  }

  static async fetchNotes() {
    try {
      return await data.Note.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async deleteNote(id) {
    try {
      const notes = await data.Note.findOne(id);

      if (!notes) {
        throw new Error('Workout not found');
      }
      await notes.destroy();

      return notes;
    } catch (error) {
      throw error;
    }
  }
}
export default NotesService;
