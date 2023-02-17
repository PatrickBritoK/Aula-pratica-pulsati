const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Aeroporto extends Model {}
Aeroporto.init(
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: dbConfig(),
    modelName: "PATRICK_AEROPORTO_MVC",
    timestamps: false,
  }
);

exports.Aeroporto = Aeroporto;
