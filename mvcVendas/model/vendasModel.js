const { Model, DataTypes } = require("sequelize");
const dbConfig = require("../configDb").getDbConfig;

class Venda extends Model {}
Venda.init(
  {
    idVenda: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    codVendedor: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    codProduto: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantidadeVendida: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  { sequelize: dbConfig(), modelName: "PATRICK_VENDA_MVC", timestamps: false }
);

exports.Venda = Venda;