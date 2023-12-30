const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate() {
    }
  }
  Note.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.literal('gen_random_uuid()')
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};
