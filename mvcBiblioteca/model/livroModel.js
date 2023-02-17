const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Livro extends Model {}
Livro.init(
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edicao: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    lancamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { sequelize: dbConfig(), modelName: "PATRICK_LIVRO_MVC", timestamps: false }
);

exports.Livro = Livro;