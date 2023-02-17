const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Editora extends Model {}
Editora.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
    sequelize: dbConfig(),
    modelName: "PATRICK_EDITORA_MVC",
    timestamps: false,
  });

  exports.Editora = Editora;
