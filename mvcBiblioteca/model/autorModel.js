const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Autor extends Model {}
Autor.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  }
},{
    sequelize: dbConfig(),
    modelName: "PATRICK_AUTOR_MVC",
    timestamps: false,
  }
);

exports.Autor = Autor;