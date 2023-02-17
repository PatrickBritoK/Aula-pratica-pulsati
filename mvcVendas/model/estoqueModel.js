const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Estoque extends Model {}
Estoque.init(
  {
    idEstoque: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    CodEstoqueProduto: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantidadeEstoque: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: dbConfig(),
    modelName: "PATRICK_ESTOQUE_MVC",
    timestamps: false,
  }
);

exports.Estoque = Estoque;
