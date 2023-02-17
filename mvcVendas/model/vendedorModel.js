const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Vendedor extends Model {}
Vendedor.init(
  {
    idVendedor: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConfig(),
    modelName: "PATRICK_VENDEDOR_MVC",
    timestamps: false,
  }
);

exports.Vendedor = Vendedor;
